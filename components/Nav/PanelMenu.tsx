import { useShowingPanelMenuContext } from 'context/contextIsShowingPanelMenu';
import Link from 'next/link';
import IconCloseMenuBar from './assets/icon-closeMenuBar.svg';

export function PanelMenu() {
	const { closePanelMenu } = useShowingPanelMenuContext();
	const linkNav = [
		{ link: '/', linkName: 'My account' },
		{ link: '/', linkName: 'Products' },
		{ link: '/cart', linkName: 'Cart' },
	];
	return (
		<>
			<div className='absolute bg-slate-300 w-full h-screen left-0 top-0 z-40 bg-opacity-75 blur-xl '></div>
			<div className='absolute bg-slate-400 text-black left-0 top-0 h-screen z-40 flex rounded-r-2xl '>
				<div className='relative  text-center uppercase mt-8 '>
					<Link href={'/'} className='block font-bold'>
						E-shop
					</Link>
					<button onClick={closePanelMenu} className='absolute right-2 -top-2'>
						<IconCloseMenuBar />
					</button>
					<div className='mt-7'>
						{linkNav.map((el) => {
							return (
								<Link
									key={el.linkName}
									onClick={closePanelMenu}
									href={`${el.link}`}
									className='block mb-4 hover:bg-white duration-200 py-2  px-16 '>
									{el.linkName}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
