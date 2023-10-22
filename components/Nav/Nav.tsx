import Link from 'next/link';
import IconShoppingCart from './assets/icon-shoppingCart.svg';
import IconSearch from './assets/icon-search.svg';
import { Search } from 'components/Search/Search';
import { PanelMenu } from './PanelMenu';
import { useShowingPanelMenuContext } from 'context/contextIsShowingPanelMenu';
import IconOpenMenuBar from './assets/icon-openMenuBar.svg';

export function Nav() {
	const { isOpen, openPanelMenu } = useShowingPanelMenuContext();
	return (
		<div className='relative flex justify-between px-5 py-5 bg-white text-black '>
			{!isOpen && <PanelMenu />}
			<button onClick={openPanelMenu}>
				<IconOpenMenuBar />
			</button>
			<Link
				href={'/'}
				className='text-2xl sm:text-3xl font-gabarito uppercase text-right lg:w-[19rem] '>
				E-shop
			</Link>
			<div className='flex items-center gap-4 sm:gap-6'>
				<form action='#' className='hidden lg:flex'>
					<input
						type='text'
						placeholder='Search product'
						className='focus:outline-none'
					/>
					<Link href={'/'}>
						<IconSearch />
					</Link>
				</form>
				<Link href={'/'} className='block lg:hidden'>
					<IconSearch />
				</Link>
				<Link href={'/cart'}>
					<IconShoppingCart />
				</Link>
			</div>
			{/* <Search></Search> */}
		</div>
	);
}
