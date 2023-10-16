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
		<div className='flex justify-between px-6 py-6 bg-black text-white relative'>
			{!isOpen && <PanelMenu />}
			<button onClick={openPanelMenu}>
				<IconOpenMenuBar />
			</button>
			<Link href={'/'} className='text-xl'>
				E-shop
			</Link>
			<div className='flex items-center gap-6 '>
				<Link href={'/'}>
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
