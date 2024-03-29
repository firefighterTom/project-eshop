import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnv } from 'utilities/getEnv';



export const client = new ApolloClient({
	uri: getEnv(process.env.NEXT_PUBLIC_HYGRAPH_API),
	cache: new InMemoryCache(),
});

export const admin = new ApolloClient({
	uri: getEnv(process.env.NEXT_PUBLIC_HYGRAPH_API),
	cache: new InMemoryCache(),
	headers: {
		authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
	},
});

