import IconClose from '../../assets/icon-close.svg';
import Link from 'next/link';
import { useShowingComponentContext } from 'context/showingComponent';

export function Notification() {
	const context = useShowingComponentContext();

	return (
		<div className='absolute top-0 left-0 w-screen h-screen bg-black/[.33] z-[50]   '>
			<div className=' absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-white flex flex-col w-[15rem] sm:w-[20rem] items-center'>
				<h3 className='text-center mt-8 mb-7 font-bold'>Added To Cart</h3>
				<button
					onClick={() =>
						context.visibilityToggle('addedToCartNotificationComponent')
					}
					className='uppercase bg-black text-white py-3 w-[80%] font-bold mb-4 text-sm'>
					<Link href={`/cart`}>Proceed to cart</Link>
				</button>
				<button
					onClick={() =>
						context.visibilityToggle('addedToCartNotificationComponent')
					}
					className='uppercase bg-white text-black py-3 w-[80%] font-bold text-sm border mb-8'>
					Continue shopping
				</button>
				<IconClose
					onClick={() =>
						context.visibilityToggle('addedToCartNotificationComponent')
					}
					className='absolute top-[5%] right-[5%] fill-white cursor-pointer'></IconClose>
			</div>
		</div>
	);
}
