import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  from,
  createHttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
// import { createUploadLink } from 'apollo-upload-client';

// const uploadLink = createUploadLink({
//   uri: 'http://localhost:3001/graphql',
//   credentials: 'include',
// });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');

  if (!['web_login', 'web_register'].includes(operation.operationName)) {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  }

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors && graphQLErrors.length) {
    for (const error of graphQLErrors) {
      const AUTH_ERROR_CODES = [
        'EXPIRED_TOKEN',
        'INVALID_TOKEN',
        'UNAUTHORIZED',
      ];

      if (
        error.extensions &&
        AUTH_ERROR_CODES.includes(error.extensions.code)
      ) {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
      }
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authLink,
    errorLink,
    createHttpLink({ uri: 'http://localhost:3001/graphql' }),
  ]),
});

export default client;
