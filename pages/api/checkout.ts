import { admin, client } from 'apollo/client';
import { itemsCartType } from 'context/utilsCartContext';
import {
	CreateOrderDocument,
	CreateOrderMutationResult,
	CreateOrderMutationVariables,
	GetProductsToPaymentDocument,
	GetProductsToPaymentQuery,
	GetProductsToPaymentQueryVariables,
	OrderItemCreateInput,
} from 'generated/graphql';
import { NextApiHandler } from 'next';
import Stripe from 'stripe';

type SecuredProduct = {
	price: number;
	name: string;
	amount: number;
	images: string[];
	id: string;
};

type itemsWithEmail = {
	items: itemsCartType;
	email: string;
};

const stripeCheckoutHandler: NextApiHandler = async (req, res) => {
	const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

	if (stripeSecretKey === undefined) {
		return res.status(405).end();
	}

	const body = JSON.parse(req.body) as itemsWithEmail;
	const clientEmail = body.email;
	const { data } = await client.query<
		GetProductsToPaymentQuery,
		GetProductsToPaymentQueryVariables
	>({
		query: GetProductsToPaymentDocument,
		variables: {
			productsId: body.items.map(({ id }) => id),
		},
	});
	const securedProductsToPayment = data.products
		.map((product) => {
			const productWithAmount = body.items.find(({ id }) => id === product.id);
			if (productWithAmount) {
				const priceInCents = product.price * 100;
				return {
					price: priceInCents,
					name: product.name,
					amount: productWithAmount.amount,
					images: product.images.map((d) => d.url),
					id: product.id,
				};
			}
		})
		.filter((v): v is SecuredProduct => Boolean(v));
	const productsToStripe: Stripe.Checkout.SessionCreateParams.LineItem[] =
		securedProductsToPayment.map((product) => ({
			price_data: {
				currency: 'PLN',
				unit_amount: product.price,
				product_data: {
					name: product.name,
					images: product.images,
				},
			},
			quantity: product.amount,
		}));

	const createOrderInputs: OrderItemCreateInput[] =
		securedProductsToPayment.map((product) => ({
			quantity: product.amount,
			total: product.price * product.amount,
			product: {
				connect: {
					id: product.id,
				},
			},
		}));
	const stripe = new Stripe(stripeSecretKey, { apiVersion: '2022-11-15' });
	const session = await stripe.checkout.sessions.create({
		mode: 'payment',
		locale: 'pl',
		customer_email: clientEmail,
		payment_method_types: ['blik', 'p24', 'card'],
		success_url: 'http://localhost:3000/success.html',
		cancel_url: 'http://localhost:3000/cancel.html',
		line_items: productsToStripe,
	});
	if (session.status === 'open') {
		const fromCentsToDollars = 0.01;
		const sessionTotal = session.amount_total
			? session.amount_total * fromCentsToDollars
			: 0;
		const d = await admin.mutate<
			CreateOrderMutationResult,
			CreateOrderMutationVariables
		>({
			variables: {
				email: clientEmail,
				orderItems: createOrderInputs,
				totalOrder: sessionTotal,
				stripeCheckoutId: session.id,
			},
			mutation: CreateOrderDocument,
		});
	}

	res.json({ session });
};
export default stripeCheckoutHandler;
