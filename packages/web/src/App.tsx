import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';

import { ApolloClient, TradulabTheme } from './services';
import Router from './containers/Router';

const App: React.FC = () => (
  <ApolloProvider client={ApolloClient}>
    <ThemeProvider theme={TradulabTheme}>
      <Router />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
