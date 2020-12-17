import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function LayoutRouter(props: any) {
  return (
    <Router>
      <p>Tradulab :)</p>
      {props.children}
    </Router>
  );
}
