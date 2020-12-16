import React from 'react';

import NavBar from '../components/NavBar';

const NavBarContainer = () => {
  const username = 'Julio Cezar';
  return (
    <NavBar {...{ username }} />
  );
};

export default NavBarContainer;
