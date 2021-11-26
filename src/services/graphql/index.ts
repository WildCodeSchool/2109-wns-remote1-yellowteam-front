import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

export default function initializeApollo(): ApolloClient<NormalizedCacheObject> {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return client;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
}
