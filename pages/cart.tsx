import { loadStripe } from '@stripe/stripe-js';
import { useCartContext } from 'context/cart';
import { FormEvent } from 'react';
import Stripe from 'stripe';
import Image from 'next/image';
import { countTotalPrice } from 'utilities/countTotalPrice';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_API_KEY}`);

export default function Cart() {
	const { data: session } = useSession();
	const { items } = useCartContext();
	const router = useRouter();

	const totalPrice = countTotalPrice(items);
	const handleSubmit = async (emailParameter: string) => {
		const stripe = await stripePromise;

		const itemsWithEmail = {
			items: [...items],
			email: emailParameter,
		};
		const response = await fetch('api/checkout', {
			method: 'POST',
			body: JSON.stringify(itemsWithEmail),
		});
		const { session } = (await response.json()) as {
			session: Stripe.Response<Stripe.Checkout.Session>;
		};
		stripe?.redirectToCheckout({ sessionId: session.id });
	};
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!session?.user?.email) router.push('/');
		if (session?.user?.email) await handleSubmit(session.user.email);
	};
	return (
		<div className='flex flex-col items-center mb-5'>
			<h2 className=' w-full mb-4 py-12 md:py-16 text-2xl md:text-3xl text-center font-merriweather bg-[#f5f5f5] border-y'>
				Your Cart
			</h2>
			<form
				onSubmit={onSubmit}
				className='flex flex-col items-center justify-center w-full '>
				{items &&
					items.map((product) => {
						return (
							<div
								key={product.id}
								className='grid grid-rows-2 grid-cols-3 mb-3 w-full max-w-screen-md'>
								<Image
									src={product.img}
									width={50}
									height={50}
									alt={product.name}
									className='row-span-full justify-self-center self-center md:justify-self-start'
								/>
								<p className='col-start-2 col-end-4 row-start-1 font-bold'>
									{product.name}
								</p>
								<p>
									{Intl.NumberFormat('pl-PL', {
										style: 'currency',
										currency: 'PLN',
									}).format(product.price)}
								</p>
								<p className='justify-self-center md:self-center md:row-span-full col-start-3'>
									x {product.amount}
								</p>
							</div>
						);
					})}
				<p className='mt-3 pt-2 w-full max-w-screen-md text-center border-t'>
					<span className='font-bold'>Total:</span>{' '}
					{Intl.NumberFormat('pl-PL', {
						style: 'currency',
						currency: 'PLN',
					}).format(totalPrice)}
				</p>
				<button className='py-2 px-3 mt-2 mx-auto text-white bg-[#70a9a1] rounded text-xs sm:text-sm lg:text-base hover:bg-[#70a9a1]/[0.9]'>
					Submit
				</button>
			</form>
		</div>
	);
}
