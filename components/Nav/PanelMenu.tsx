import { useShowingComponentContext } from 'context/showingComponent';
import Link from 'next/link';
import IconCloseMenuBar from '../../assets/icon-close.svg';
import { signOut, useSession } from 'next-auth/react';

const linkNav = [
	{ link: '/', linkName: 'My account' },
	{ link: '/', linkName: 'Products' },
	{ link: '/cart', linkName: 'Cart' },
];

export function PanelMenu() {
	const { data: session } = useSession();
	const firstLetterOfTheName = session?.user?.name?.charAt(0).toUpperCase();

	const context = useShowingComponentContext();

	return (
		<>
			<div className='absolute  w-full h-screen left-0 top-0 z-20 bg-slate-300 bg-opacity-75 blur-xl '></div>
			<div className='absolute bg-quartz-gray text-white left-0 top-0 h-screen z-40 flex w-1/3 min-w-[13rem] max-w-[15rem]  '>
				<div className='relative flex flex-col mt-8 w-full'>
					<Link
						onClick={() => context.visibilityToggle('panelMenuComponent')}
						href={'/'}
						className='pl-2 font-bold uppercase text-2xl'>
						E-shop
					</Link>
					<button
						onClick={() => context.visibilityToggle('panelMenuComponent')}
						className='absolute right-3 top-[1px]'>
						<IconCloseMenuBar />
					</button>
					{session && (
						<>
							<div className='flex justify-center items-center w-10 h-10 mt-8 mx-auto rounded-full bg-white text-black '>
								{firstLetterOfTheName}
							</div>
							<p className='mx-auto mt-2'>{session?.user?.name}</p>
						</>
					)}
					<div className='mt-6  '>
						{linkNav.map((el) => {
							return (
								<Link
									key={el.linkName}
									onClick={() => context.visibilityToggle('panelMenuComponent')}
									href={`${el.link}`}
									className='block py-3 hover:bg-white hover:text-quartz-gray duration-200  pl-2 border-b-[1px]  '>
									{el.linkName}
								</Link>
							);
						})}
					</div>
					{session && (
						<button
							className='mx-auto py-2 px-3 mt-12 bg-button-color text-xs sm:text-sm lg:text-base rounded hover:bg-button-color/[0.9]'
							onClick={() => signOut()}>
							Log Out
						</button>
					)}
					{!session && (
						<Link
							href={'/Account'}
							onClick={() => context.visibilityToggle('panelMenuComponent')}
							className='mx-auto py-2 px-3 mt-12 bg-button-color text-xs sm:text-sm lg:text-base rounded hover:bg-button-color/[0.9] '>
							Log In
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
