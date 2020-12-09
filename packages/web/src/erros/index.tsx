import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

export default function Erros({ message }) {
  const NOT_LOGGED_USER = "You must be logged in.";

  switch (message) {
    case NOT_LOGGED_USER:
      return <Login />;
    default:
      return <h1>{message}</h1>;
  }
}
