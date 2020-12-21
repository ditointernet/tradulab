import React from 'react';

import NavBar from '../components/NavBar';

const NavBarContainer = () => {
  const username = 'Julio Cezar';

  return (
    <NavBar
      onClick={() => console.log('clicou no usuario')}
      {...{ username }}
    />
  );
};

export default NavBarContainer;
