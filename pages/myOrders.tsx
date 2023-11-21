import { ShowingClientOrders } from 'components/ClientOrders/ShowingClientOrders';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function MyOrders() {
	const { data: session, status } = useSession();
	if (status === 'loading') {
		return <div>Loading...</div>;
	}
	if (!session?.user?.email)
		return (
			<div className='flex flex-col h-full justify-center items-center gap-20 '>
				<p className='uppercase font-bold'>
					You have to log in to see your orders !
				</p>
				<Link
					href={'/Account'}
					className='py-2 px-3 mt-2 mx-auto text-white bg-button-color rounded text-xs sm:text-sm lg:text-base hover:bg-button-color/[0.9]'>
					Log In
				</Link>
			</div>
		);

	if(session)return <ShowingClientOrders clientEmail={session.user.email} />;
}
