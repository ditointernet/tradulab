import React, { ReactElement } from "react";
import Login from "../pages/Login";

export default function Erros({ message }: { message: String }): ReactElement {
  const NOT_LOGGED_USER = "You must be logged in.";

  switch (message) {
    case NOT_LOGGED_USER:
      return <Login />;
    default:
      return <p>{message}</p>;
  }
}
