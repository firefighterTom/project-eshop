import { ApolloClient, InMemoryCache } from '@apollo/client';

function getEnv() {
	if (process.env.NEXT_PUBLIC_HYGRAPH_API)
		return process.env.NEXT_PUBLIC_HYGRAPH_API;

	throw new Error('Fail env');
}

export const client = new ApolloClient({
	uri: getEnv(),
	cache: new InMemoryCache(),
});
