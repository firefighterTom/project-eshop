import { ShowingClientOrders } from 'components/ClientOrders/ShowingClientOrders';
import { useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function MyOrders() {
	const { data: session, status } = useSession();
	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	return (
		<>
			<NextSeo
				title='My orders'
				openGraph={{
					url: 'http://localhost:3000/myOrders',
				}}
			/>
			{!session?.user?.email ? (
				<div className='flex flex-col h-full justify-center items-center gap-20 '>
					<p className='uppercase font-bold'>
						You have to log in to see your orders !
					</p>
					<Link
						href={'/login'}
						className='py-2 px-3 mt-2 mx-auto text-white bg-button-color rounded text-xs sm:text-sm lg:text-base hover:bg-button-color/[0.9]'>
						Log In
					</Link>
				</div>
			) : (
				<ShowingClientOrders clientEmail={session.user.email} />
			)}
		</>
	);
}
