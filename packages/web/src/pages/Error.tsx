import React, { ReactElement } from "react";
import { Route, RouteProps } from "react-router-dom";
import Login from "../pages/Login";

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
