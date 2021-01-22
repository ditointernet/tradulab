import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const uploadLink = createUploadLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include',
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');

  if (!['loginUser', 'createUser'].includes(operation.operationName)) {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(uploadLink),
});

export default client;
