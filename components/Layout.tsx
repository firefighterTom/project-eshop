import {
	AddNotificationProvider,
	useAddNotificationContext,
} from 'context/addNotification';
import { CartProvider } from 'context/cart';
import { PropsWithChildren } from 'react';
// import { AddNotification } from './Notification/Notification';
import { Nav } from './Nav/Nav';
import { ShowingPanelMenuProvider } from 'context/showingPanelMenu';

export function Layout({ children }: PropsWithChildren) {
	const addNotificationContext = useAddNotificationContext();
	return (
		<div className='max-w-screen-2xl mx-auto'>
			<AddNotificationProvider>
				<CartProvider>
					<ShowingPanelMenuProvider>
						<header className='sticky top-0 z-20 '>
							<Nav />
						</header>
						<main>{children}</main>
						<footer></footer>
					</ShowingPanelMenuProvider>
				</CartProvider>
			</AddNotificationProvider>
		</div>
	);
}
