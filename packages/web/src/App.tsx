import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from './services';
import Routes from './containers';

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <Routes />
  </ApolloProvider>
);

export default App;
