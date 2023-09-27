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
};

const stripeCheckoutHandler: NextApiHandler = async (req, res) => {
	const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

	if (stripeSecretKey === undefined) {
		return res.status(405).end();
	}

	const body = JSON.parse(req.body) as itemsCartType;

	const { data } = await client.query<
		GetProductsToPaymentQuery,
		GetProductsToPaymentQueryVariables
	>({
		query: GetProductsToPaymentDocument,
		variables: {
			productsId: body.map(({ id }) => id),
		},
	});
	const securedProductsToPayment = data.products
		.map((product) => {
			const productWithAmount = body.find(({ id }) => id === product.id);
			if (productWithAmount) {
				return {
					price: product.price,
					name: product.name,
					amount: productWithAmount.amount,
					images: product.images.map((d) => d.url),
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
		}));
	const stripe = new Stripe(stripeSecretKey, { apiVersion: '2022-11-15' });
	const session = await stripe.checkout.sessions.create({
		mode: 'payment',
		locale: 'pl',
		payment_method_types: ['blik', 'p24', 'card'],
		success_url: 'http://localhost:3000/success.html',
		cancel_url: 'http://localhost:3000/cancel.html',
		line_items: productsToStripe,
	});
	if (session.status === 'open') {
		const sessionTotal=(session.amount_total)?session.amount_total:0;
		const d = await admin.mutate<
			CreateOrderMutationResult,
			CreateOrderMutationVariables
		>({
			variables: {
				email: 'a@example.com',
				orderItems: createOrderInputs,
				totalOrder:sessionTotal,
				stripeCheckoutId:session.id
			},
			mutation:CreateOrderDocument
		});
	}

	res.json({ session });
};
export default stripeCheckoutHandler;
