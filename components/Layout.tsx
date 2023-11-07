import { CartProvider } from 'context/cart';
import { PropsWithChildren } from 'react';
import { Nav } from './Nav/Nav';
import { useShowingComponentContext } from 'context/showingComponent';
import { Notification } from './Notification/Notification';

export function Layout({ children }: PropsWithChildren) {
	const context = useShowingComponentContext();
	return (
		<div className='max-w-screen-2xl mx-auto flex flex-col h-full'>
			{context.addedToCartNotificationComponent.isOpen && <Notification/>}
					<header className='sticky top-0 z-20 '>
						<Nav />
					</header>
					<main className='grow'>{children}</main>
					<footer></footer>
				
		</div>
	);
}
