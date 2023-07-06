import { NextApiHandler } from 'next';
import Stripe from 'stripe';

const stripeCheckoutHandler: NextApiHandler = async(req, res) => {
	const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

	if (stripeSecretKey === undefined) {
	return	res.status(405).end();
	}
	const stripe = new Stripe(stripeSecretKey, { apiVersion: '2022-11-15' });
	const session =await stripe.checkout.sessions.create({
		mode: 'payment',
		locale: 'pl',
		payment_method_types: ['blik', 'p24', 'card'],
		success_url: 'http://localhost:3000/success.html',
		cancel_url: 'http://localhost:3000/cancel.html',
        line_items:[
            {
                price_data:{
                    currency: "PLN",
                    unit_amount:2121,
                    product_data:{
                        name:"Backpack"
                    }

                },
                quantity:1,
            }
        ]
	});
    res.json({session:session})
};
export default stripeCheckoutHandler;