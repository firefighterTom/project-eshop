import { admin, client } from 'apollo/client';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import '../styles/global.css'
import { Layout } from 'components/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Layout>
			<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}
