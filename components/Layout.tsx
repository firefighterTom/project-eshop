import { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
	return (
		<div className='max-w-7xl'>
			<header>
            </header>
			<main>{children}</main>
			<footer></footer>
		</div>
	);
}
