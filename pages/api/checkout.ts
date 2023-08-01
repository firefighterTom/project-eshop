import { itemsCartType } from 'context/utilsCartContext';
import { NextApiHandler } from 'next';
import Stripe from 'stripe';

const stripeCheckoutHandler: NextApiHandler = async (req, res) => {
	const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

	if (stripeSecretKey === undefined) {
		return res.status(405).end();
	}

	const body = JSON.parse(req.body) as itemsCartType;
	const productsToStripe: Stripe.Checkout.SessionCreateParams.LineItem[] =
		body.map((product) => ({
			price_data: {
				currency: 'PLN',
				unit_amount: product.price,
				product_data: {
					name: product.name,
				},
			},
			quantity: product.amount,
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
	res.json({ session });
    
};
export default stripeCheckoutHandler;
