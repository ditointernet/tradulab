import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

import { apollo, createTradulabTheme } from './services';
import Router from './Router';

const App: React.FC = () => {
  /* TODO: support dark and light modes in the future

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
      () =>
        createTradulabTheme({
          palette: prefersDarkMode
            ? {
                type: 'dark',
              }
            : undefined,
        }),
      [prefersDarkMode]
    );
  */

  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={createTradulabTheme()}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
