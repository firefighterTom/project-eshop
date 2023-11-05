import { CartProvider } from 'context/cart';
import { PropsWithChildren } from 'react';
import { Nav } from './Nav/Nav';
import { ShowingComponentProvider } from 'context/showingComponent';

export function Layout({ children }: PropsWithChildren) {
	return (
		<div className='max-w-screen-2xl mx-auto'>
			<ShowingComponentProvider>
				<CartProvider>
					<header className='sticky top-0 z-20 '>
						<Nav />
					</header>
					<main>{children}</main>
					<footer></footer>
				</CartProvider>
			</ShowingComponentProvider>
		</div>
	);
}
