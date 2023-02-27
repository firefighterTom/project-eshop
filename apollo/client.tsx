import { ApolloClient, InMemoryCache } from '@apollo/client';

function getEnv<T>(env: T): T {
	if (env) return env;

	throw new Error('Fail env');
}

export const client = new ApolloClient({
	uri: getEnv(process.env.NEXT_PUBLIC_HYGRAPH_API),
	cache: new InMemoryCache(),
});
