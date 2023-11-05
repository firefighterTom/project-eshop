import { useShowingComponentContext } from 'context/showingComponent';
import Link from 'next/link';
import IconCloseMenuBar from '../../assets/icon-close.svg';

export function PanelMenu() {
	const context = useShowingComponentContext();
	const linkNav = [
		{ link: '/', linkName: 'My account' },
		{ link: '/', linkName: 'Products' },
		{ link: '/cart', linkName: 'Cart' },
	];
	return (
		<>
			<div className='absolute bg-slate-300 w-full h-screen left-0 top-0 z-20 bg-opacity-75 blur-xl '></div>
			<div className='absolute bg-[#534b52] text-white left-0 top-0 h-screen z-40 flex w-1/3 min-w-[13rem] max-w-[15rem]  '>
				<div className='relative mt-8 w-full'>
					<Link
						onClick={()=>context.closeComponent('panelMenuComponent')}
						href={'/'}
						className='block font-bold uppercase text-2xl pl-2 inline-block '>
						E-shop
					</Link>
					<button
						onClick={()=>context.closeComponent('panelMenuComponent')}
						className='absolute right-3 top-[1px]'>
						<IconCloseMenuBar />
					</button>
					<div className='mt-9  '>
						{linkNav.map((el) => {
							return (
								<Link
									key={el.linkName}
									onClick={()=>context.closeComponent('panelMenuComponent')}
									href={`${el.link}`}
									className='block py-3 hover:bg-white hover:text-[#534b52] duration-200 py-2  pl-2  border solid border-0 border-b-[1px]  '>
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
