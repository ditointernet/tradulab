import React from 'react';
import { ApolloProvider } from '@apollo/client';

import ApolloClient from './services/ApolloClient';
import Router from './containers/Router';

const App: React.FC = () => (
  <ApolloProvider client={ApolloClient}>
    <Router />
  </ApolloProvider>
);

export default App;
