import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clee5gppg59gz01uj3o2t25l9/master',
    cache: new InMemoryCache(),
  });