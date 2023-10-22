import {
	AddNotificationProvider,
	useAddNotificationContext,
} from 'context/contextAddNotification';
import { CartProvider } from 'context/contextCart';
import { PropsWithChildren } from 'react';
// import { AddNotification } from './Notification/Notification';
import { Nav } from './Nav/Nav';
import { ShowingPanelMenuProvider } from 'context/contextIsShowingPanelMenu';

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
