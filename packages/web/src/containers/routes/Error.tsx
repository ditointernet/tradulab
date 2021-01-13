import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Error } from '../pages';

interface IError extends RouteProps {
  location: {
    state: { message?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}

const ErrorRouter: React.FC<IError> = (props) => {
  return <Error {...props} />;
};

export default ErrorRouter;
