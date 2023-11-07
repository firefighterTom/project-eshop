import { client } from 'apollo/client';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"
import '../styles/global.css'
import { Layout } from 'components/Layout';
import { ShowingComponentProvider } from 'context/showingComponent';
import { CartProvider } from 'context/cart';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
		<ApolloProvider client={client}>
		<ShowingComponentProvider>
				<CartProvider>
			<Layout>
			<Component {...pageProps} />
			</Layout>
			</CartProvider>
			</ShowingComponentProvider>
		</ApolloProvider>
		</SessionProvider>
	);
}
