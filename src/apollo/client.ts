import { ApolloClient, InMemoryCache } from '@apollo/client';

const URI = process.env.NEXT_PUBLIC_URI_API;

const client = new ApolloClient({
  uri: URI || 'http://localhost:3002/api/graphql',
  cache: new InMemoryCache()
});

export default client;
