import React from "react";
import { Redirect } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import TradulabRouter from "./TradulabRouter";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      _id
      nickname
      username
    }
  }
`;

export default function AuthMiddleware(middlewares: any, rest: any) {
  const { error, loading } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;

  const TOKEN = localStorage.getItem("token");

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
}
