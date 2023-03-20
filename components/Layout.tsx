import {
	AddNotificationProvider,
	useAddNotificationContext,
} from 'context/contextAddNotification';
import { CartProvider } from 'context/contextCart';
import { PropsWithChildren } from 'react';
import { AddNotification } from './Notification/Notification';
import { Nav } from './Nav';

export function Layout({ children }: PropsWithChildren) {
	const addNotificationContext = useAddNotificationContext();
	return (
		<div className='max-w-7xl mx-auto'>
			<AddNotificationProvider>
				<CartProvider>
					<header>
						<Nav />
					</header>
					<main>{children}</main>
					<footer></footer>
				</CartProvider>
			</AddNotificationProvider>
		</div>
	);
}
