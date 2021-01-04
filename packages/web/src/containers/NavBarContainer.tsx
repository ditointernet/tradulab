import React from 'react';

import NavBar from '../components/NavBar';

const NavBarContainer = () => {
  const username = 'Julio Cezar';
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(menuAnchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  }

  const handleClick = (event: any) => {
    const { id } = event.target;
    if (id === "config") {
      setMenuAnchorEl(null);
      console.log('entrar em config')
    }
    if (id === "logout") {
      setMenuAnchorEl(null);
      console.log('sair');
    }
    setMenuAnchorEl(null);
  };


  return (
    <NavBar
      {...{ username, handleMenu, handleClick, openMenu, menuAnchorEl, handleCloseMenu }}
    />
  );
};

export default NavBarContainer;
