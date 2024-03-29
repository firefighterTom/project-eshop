import { client } from 'apollo/client';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';
import { Layout } from 'components/Layout/Layout';
import { ShowingComponentProvider } from 'context/showingComponent';
import { CartProvider } from 'context/cart';
import { ConfirmToDeleteItemProvider } from 'context/confirmToDeleteItem';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<ApolloProvider client={client}>
				<ConfirmToDeleteItemProvider>
				<ShowingComponentProvider>
					<CartProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</CartProvider>
				</ShowingComponentProvider>
				</ConfirmToDeleteItemProvider>
			</ApolloProvider>
		</SessionProvider>
	);
}
