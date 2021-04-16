import React from 'react';

import { Home } from '../../pages';

interface IHome {
  path: string;
}

const HomeRouter: React.FC<IHome> = ({ path }) => {
  return <Home />;
};

export default HomeRouter;
