import { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
	return (
		<div className='max-w-7xl mx-auto'>
			<header>
            </header>
			<main>{children}</main>
			<footer></footer>
		</div>
	);
}
