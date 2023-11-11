import { CartProvider } from 'context/cart';
import { PropsWithChildren } from 'react';
import { Nav } from './Nav/Nav';
import { useShowingComponentContext } from 'context/showingComponent';
import { Notification } from './Notification/Notification';
import { Search } from './Search/Search';
import { Footer } from './Footer';


export function Layout({ children }: PropsWithChildren) {
	const context = useShowingComponentContext();
	return (
		<div className=' flex flex-col h-full'>
			{context.addedToCartNotificationComponent.isOpen && <Notification />}
			{context.searchComponent.isOpen && <Search />}

			<header className='sticky top-0 z-20  '>
				<Nav />
			</header>
			<main className='grow '>{children}</main>
			<Footer/>
		</div>
	);
}
