import React, { ReactElement } from "react";
import Login from "../pages/Login";

export default function Erros(props: any): ReactElement {
  const NOT_LOGGED_USER = "You must be logged in.";
  console.log("props", props);
  switch (props.message) {
    case NOT_LOGGED_USER:
      return <Login />;
    default:
      return <p>{props.message}</p>;
  }
}
