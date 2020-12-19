import React from "react";

import { BrowserRouter as Router, RouteProps } from "react-router-dom";

export default function LayoutRouter(props: RouteProps) {
  return (
    <Router>
      <p>TRADULAB :)</p>
      {props.children}
    </Router>
  );
}
