import Link from 'next/link';
import IconShoppingCart from '../../assets/icon-shoppingCart.svg';
import IconSearch from '../../assets/icon-search.svg';
import { Search } from 'components/Search/Search';
import { PanelMenu } from './PanelMenu';
import { useShowingComponentContext } from 'context/showingComponent';
import IconOpenMenuBar from '../../assets/icon-open.svg';
import { Notification } from 'components/Notification/Notification';

export function Nav() {
	const context = useShowingComponentContext();
	return (
		<div className='w-full bg-white'>
			<div className='relative flex justify-between px-5 py-5 bg-white text-black max-w-screen-2xl mx-auto '>
				{context.panelMenuComponent.isOpen && <PanelMenu />}

				<button onClick={() => context.openComponent('panelMenuComponent')}>
					<IconOpenMenuBar />
				</button>
				<Link
					href={'/'}
					className='text-2xl sm:text-3xl font-gabarito uppercase text-right lg:w-[19rem] '>
					E-shop
				</Link>
				<div className='flex items-center gap-4 sm:gap-6'>
					<form
						action='#'
						className='hidden lg:flex'
						onClick={() => context.openComponent('searchComponent')}>
						<input
							type='text'
							placeholder='Search product'
							className='focus:outline-none'
						/>

						<IconSearch className='cursor-pointer' />
					</form>

					<IconSearch
						className='block lg:hidden cursor-pointer'
						onClick={() => context.openComponent('searchComponent')}
					/>

					<Link href={'/cart'}>
						<IconShoppingCart />
					</Link>
				</div>
			</div>
		</div>
	);
}
