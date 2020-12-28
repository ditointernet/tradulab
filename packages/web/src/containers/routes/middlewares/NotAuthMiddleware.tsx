import React from "react";
import { Redirect } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import TradulabRouter from "../TradulabRouter";
import { MiddlewareProps } from "../types";
import { string } from "@hapi/joi";
import { ReadStream } from "fs";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      _id
      nickname
      username
    }
  }
`;

const NotAuthMiddleware: React.FC<MiddlewareProps> = ({
  middlewares,
  ...rest
}) => {
  const { error, loading } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Loading...</p>;

  const TOKEN = localStorage.getItem("token");

  if (!error || TOKEN) return <Redirect to="./" />;

  return <TradulabRouter {...rest} middlewares={middlewares} />;
};

export default NotAuthMiddleware;
