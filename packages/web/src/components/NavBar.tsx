import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Theme,
  createStyles,
  Menu,
  MenuItem
} from '@material-ui/core';
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
    },
    menu: {
      "& .MuiPaper-root": {
        border: "1px solid white",
        backgroundColor: '#59AB6C',
        color: 'white',
      }
    }
  })
);

interface INavBarProps {
  username: string;
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
  menuAnchorEl: HTMLElement | null;
  openMenu: boolean;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavBar: React.FC<INavBarProps> = ({
  username,
  handleMenu,
  menuAnchorEl,
  openMenu,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Tradulab
        </Typography>
        <Button color="inherit" onClick={handleMenu}>
          <AccountCircle />
          <Typography variant="body2" className={classes.username}>
            {username}
          </Typography>
          <ArrowDropDown />
        </Button>
        <Menu
          className={classes.menu}
          id="menu-appbar"
          elevation={0}
          getContentAnchorEl={null}
          anchorEl={menuAnchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openMenu}
          onClose={handleClose}
        >
          <MenuItem id="config" onClick={handleClose}>
            <Typography variant="body1">
              Configurações
            </Typography>
          </MenuItem>
          <MenuItem id="logout" onClick={handleClose}>
            <Typography variant="body1">
              Sair
            </Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
