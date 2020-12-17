import React, { ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";

export default function Error(props: any): ReactElement {
  return <p> {props.location.state.message}</p>;
}
