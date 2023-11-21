import Link from 'next/link';
import IconShoppingCart from '../../assets/icon-shoppingCart.svg';
import IconSearch from '../../assets/icon-search.svg';
import { PanelMenu } from './PanelMenu';
import { useShowingComponentContext } from 'context/showingComponent';
import IconOpenMenuBar from '../../assets/icon-open.svg';
import { Notification } from 'components/Notification/Notification';
import { ConfirmToRemoveItemFromCart } from 'components/Notification/ConfirmToRemoveItemFromCart';

export function Nav() {
	const context = useShowingComponentContext();

	
	return (
		<div className='w-full bg-white'>
			{context.addedToCartNotificationComponent.isOpen && <Notification />}
			{context.panelMenuComponent.isOpen && <PanelMenu />}
			{context.confirmToDeleteItemFromCartNotification.isOpen && <ConfirmToRemoveItemFromCart/>}
			<div className='relative flex  px-5 py-5 mx-auto  max-w-screen-2xl bg-white text-black  '>
				<button
					className='basis-[30%]'
					onClick={() => context.visibilityToggle('panelMenuComponent')}>
					<IconOpenMenuBar className='w-6 h-6 xs:w-[30px] xs:h-[30px] md:w-[35px] md:h-[35px]' />
				</button>
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

					<Link href={'/cart'}>
						<IconShoppingCart className='w-6 h-6 md:w-[30px] md:h-[30px]' />
					</Link>
				</div>
			</div>
		</div>
	);
}
