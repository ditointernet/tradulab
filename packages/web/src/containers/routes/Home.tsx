import React from 'react';

import { Home } from '../pages';
import { AuthMiddleware } from './middlewares';

interface IHome {
  path: string;
}

const HomeRouter: React.FC<IHome> = ({ path }) => {
  return (
    <AuthMiddleware redirect={path}>
      <Home />
    </AuthMiddleware>
  );
};

export default HomeRouter;
