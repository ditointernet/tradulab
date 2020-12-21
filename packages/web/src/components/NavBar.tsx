import React from 'react'

import { AppBar, Toolbar, Typography, Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import { AccountCircle, ArrowDropDown } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#59AB6C',
    },
    title: {
      flexGrow: 1,
    },
    username: {
      margin: theme.spacing(0, 1, 0, 1)
    }
  })
);

interface INavBarProps {
  username: string;
  onClick: () => void;
}

const NavBar: React.FC<INavBarProps> = ({
  username,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Tradulab
        </Typography>
        <Button color="inherit" onClick={onClick}>
          <AccountCircle />
          <Typography variant="body2" className={classes.username}>
            {username}
          </Typography>
          <ArrowDropDown />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
