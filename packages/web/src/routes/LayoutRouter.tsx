import React from "react";

import { BrowserRouter as Router, RouteProps } from "react-router-dom";

const LayoutRouter: React.FC<RouteProps> = (props) => {
  return (
    <Router>
      <p>TRADULAB :)</p>
      {props.children}
    </Router>
  );
};

export default LayoutRouter;
