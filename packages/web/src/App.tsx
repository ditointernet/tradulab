import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, TradulabTheme } from './services';
import { ThemeProvider } from '@material-ui/core/styles';
import Login from './containers/pages/Login';

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <ThemeProvider theme={TradulabTheme}>
      <Login
        location={{
          state: { redirect: '/' },
          pathname: '/login',
          search: '',
          hash: '',
        }}
      />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
