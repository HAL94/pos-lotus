import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: 'http://localhost:5000',
  credentials: 'include',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
