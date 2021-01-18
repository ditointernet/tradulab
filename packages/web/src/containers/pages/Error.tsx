import React from 'react';
import { RouteProps } from 'react-router-dom';

interface ErrorProps extends RouteProps {
  location: {
    state: { message?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}

const Error: React.FC<ErrorProps> = ({ location }) => {
  if (location && location.state) return <p> {location.state.message}</p>;
  return <p>Internal Error</p>;
};

export default Error;
