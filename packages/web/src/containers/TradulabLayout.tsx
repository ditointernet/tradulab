import React from 'react';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';

import NavBarContainer from './NavBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navContainer: {
      'min-height': '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    mainContent: {
      flexGrow: 1,
      margin: theme.spacing(1, 3, 0, 3),
    },
    footerContent: {
      backgroundColor: 'red',
    },
  })
);

interface ITradulabLayoutProps {
  children?: JSX.Element | string;
}

const TradulabLayout: React.FC<ITradulabLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.navContainer}>
      <NavBarContainer />
      <Box className={classes.mainContent}>{children}</Box>
      <div className={classes.footerContent}>footer</div>
    </Box>
  );
};

export default TradulabLayout;
