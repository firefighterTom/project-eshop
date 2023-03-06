
import { CartProvider } from 'context/contextCart';
import { PropsWithChildren } from 'react';
import { Nav } from './Nav';

export function Layout({ children }: PropsWithChildren) {
	return (
		<div className='max-w-7xl mx-auto'>
			<CartProvider>
			<header>
			<Nav/>
            </header>
			<main>{children}</main>
			<footer></footer>
			</CartProvider>
		</div>
	);
}
