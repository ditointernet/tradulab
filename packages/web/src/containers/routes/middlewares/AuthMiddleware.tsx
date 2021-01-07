import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      _id
      nickname
      username
    }
  }
`;

const AuthMiddleware = (props: any) => {
  const history = useHistory();
  const { error, loading } = useQuery(IS_LOGGED_IN);
  const TOKEN = localStorage.getItem("token");

  if (loading) return <p>Loading...</p>;

  if (error || !TOKEN) {
    history.push("/login", { redirect: props.redirect });
    return null;
  }

  return props.children;
};

export default AuthMiddleware;
