import React from 'react';
import { RouteProps } from 'react-router-dom';

import { Login } from '../pages';

interface ILogin extends RouteProps {
  location: {
    state: { redirect?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}

const LoginRouter: React.FC<ILogin> = (props) => {
  return <Login {...props} />;
};

export default LoginRouter;
