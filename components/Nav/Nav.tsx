import Link from 'next/link';
import IconShoppingCart from '../../assets/icon-shoppingCart.svg';
import IconSearch from '../../assets/icon-search.svg';
import { PanelMenu } from './PanelMenu';
import { useShowingComponentContext } from 'context/showingComponent';
import IconOpenMenuBar from '../../assets/icon-open.svg';
import { Notification } from 'components/Notification/Notification';
import { ConfirmToRemoveItemFromCart } from 'components/Notification/ConfirmToRemoveItemFromCart';
import { useCartContext } from 'context/cart';

export function Nav() {
	const context = useShowingComponentContext();
	const { items } = useCartContext();
	const amountOfProductsInCart = items.length;

	return (
		<div className='w-full bg-white'>
			{context.addedToCartNotificationComponent.isOpen && <Notification />}
			{context.panelMenuComponent.isOpen && <PanelMenu />}
			{context.confirmToDeleteItemFromCartNotification.isOpen && (
				<ConfirmToRemoveItemFromCart />
			)}
			<div className='relative flex  px-5 py-5 mx-auto  max-w-screen-2xl bg-white text-black  '>
				<div className='basis-[30%]'>
					<button
						className=''
						onClick={() => context.visibilityToggle('panelMenuComponent')}>
						<IconOpenMenuBar className='w-6 h-6 xs:w-[30px] xs:h-[30px] md:w-[35px] md:h-[35px]' />
					</button>
				</div>
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
