import { loadStripe } from '@stripe/stripe-js';
import { useCartContext } from 'context/cart';
import { FormEvent } from 'react';
import Stripe from 'stripe';
import { getEnv } from 'utilities/getEnv';

const stripePromise = loadStripe(
	`${process.env.NEXT_PUBLIC_STRIPE_API_KEY}`
);

export default function Cart() {
	const { items } = useCartContext();

	const handleSubmit = async () => {
		const stripe = await stripePromise;

		const response = await fetch('api/checkout', {
			method: 'POST',
			body: JSON.stringify(items),
		});
		const { session } = (await response.json()) as {
			session: Stripe.Response<Stripe.Checkout.Session>;
		};
		console.log(session);
		stripe?.redirectToCheckout({ sessionId: session.id });
	};
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await handleSubmit();
	};
	return (
		<>
			<form onSubmit={onSubmit}>
				{items &&
					items.map((product) => {
						return (
							<p key={product.name}>
								{product.name}: {product.amount}
							</p>
						);
					})}
				<button>Submit</button>
			</form>
		</>
	);
}
