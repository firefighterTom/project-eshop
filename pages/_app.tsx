import { client } from 'apollo/client';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"
import '../styles/global.css'
import { Layout } from 'components/Layout';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
		<ApolloProvider client={client}>
			<Layout>
			<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
		</SessionProvider>
	);
}
