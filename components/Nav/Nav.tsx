import Link from 'next/link';
import IconShoppingCart from '../../assets/icon-shoppingCart.svg';
import IconSearch from '../../assets/icon-search.svg';
import { useShowingComponentContext } from 'context/showingComponent';
import { Notification } from 'components/Notification/Notification';
import { ConfirmToRemoveItemFromCart } from 'components/Notification/ConfirmToRemoveItemFromCart';
import { useCartContext } from 'context/cart';
import { ButtonPanelMenu } from './ButtonPanelMenu';

export function Nav() {
	const context = useShowingComponentContext();
	const { items } = useCartContext();
	const amountOfProductsInCart = items.length;

	return (
		<div className='w-full bg-white'>
			{context.addedToCartNotificationComponent.isOpen && <Notification />}
			
			{context.confirmToDeleteItemFromCartNotification.isOpen && (
				<ConfirmToRemoveItemFromCart />
			)}
			<div className='relative flex  px-5 py-5 mx-auto  max-w-screen-2xl bg-white text-black  '>
				<ButtonPanelMenu/>
				
				<div className=' basis-[40%] text-center text-xl sm:text-3xl font-merriweather uppercase lg:w-[19rem] '>
					<Link href={'/'}>E-shop</Link>
				</div>
				<div className='flex items-center justify-end basis-[30%] gap-4 sm:gap-6'>
					<form
						action='#'
						className='hidden lg:flex'
						onClick={() => context.visibilityToggle('searchComponent')}>
						<input
							type='text'
							placeholder='Search product'
							className='focus:outline-none'
						/>

						<IconSearch className='cursor-pointer w-6 h-6 md:w-[30px] md:h-[30px] ' />
					</form>

					<IconSearch
						className='w-6 h-6 md:w-[30px] md:h-[30px] lg:hidden cursor-pointer '
						onClick={() => context.visibilityToggle('searchComponent')}
					/>

					<Link href={'/cart'} className='relative'>
						<IconShoppingCart className='w-6 h-6 md:w-[30px] md:h-[30px]' />
						{amountOfProductsInCart !== 0 && (
							<div className='absolute -bottom-4 -right-2 bg-button-color text-white px-2 rounded-full '>
								{amountOfProductsInCart}
							</div>
						)}
					</Link>
				</div>
			</div>
		</div>
	);
}
