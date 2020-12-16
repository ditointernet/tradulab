import React from 'react'

import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import { AccountCircle, ArrowDropDown } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#59AB6C',
    },
    title: {
      flexGrow: 1,
    },
    arrowDropDown: {
      marginLeft: theme.spacing(1),
    },
  })
);

interface INavBarProps {
  username: string;
}

const NavBar: React.FC<INavBarProps> = ({
  username,
}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Tradulab
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AccountCircle />
        </IconButton>
        <Button color="inherit" onClick={() => console.log('teste')}>
          {username}
          <ArrowDropDown className={classes.arrowDropDown} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
