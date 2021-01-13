import React from 'react';
import { RouteProps } from 'react-router-dom';
import { NotAuthMiddleware } from './middlewares';
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
  return (
    <NotAuthMiddleware>
      <Login {...props} />
    </NotAuthMiddleware>
  );
};

export default LoginRouter;
