import React from "react";
import { Redirect } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import TradulabRouter from "../TradulabRouter";
import { MiddlewareProps } from "../types";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      _id
      nickname
      username
    }
  }
`;

const AuthMiddleware: React.FC<MiddlewareProps> = ({
  middlewares,
  ...rest
}) => {
  const { error, loading } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;

  const TOKEN = localStorage.getItem("token");
  console.log("AuthMiddleware");
  console.log("Error", error?.message);
  console.log("TOOKEN", TOKEN);
  if (error || !TOKEN)
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { path: rest.path },
        }}
      />
    );

  return <TradulabRouter {...rest} middlewares={middlewares} />;
};

export default AuthMiddleware;
