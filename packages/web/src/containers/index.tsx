<<<<<<< HEAD
export { default as TradulabLayout } from './TradulabLayout';
export { default as NavBarContainer } from './NavBarContainer';
export { default as ProfileCardContainer } from './ProfileCardContainer';
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Developer, Error, Home, Login, Projects, Register } from "./pages";
import {
  TradulabRouter,
  AuthMiddleware,
  RoleMiddleware,
  NotAuthMiddleware,
} from "./routes";
import { TradulabHeader } from "../components";

const Pages: React.FC = () => (
  <Router>
    <Switch>
      <Route component={Error} exact path="/error" />
      <TradulabRouter
        Component={Login}
        middlewares={[NotAuthMiddleware]}
        path="/login"
      />
      <TradulabRouter
        Component={Register}
        middlewares={[NotAuthMiddleware]}
        path="/register"
      />
      <TradulabRouter
        Component={Developer}
        Parent={TradulabHeader}
        middlewares={[AuthMiddleware, RoleMiddleware]}
        path="/dev"
      />
      <TradulabRouter
        Component={Projects}
        middlewares={[AuthMiddleware]}
        path="/projects"
      />
      <TradulabRouter
        Component={Home}
        Parent={TradulabHeader}
        middlewares={[AuthMiddleware]}
        path="/"
      />
    </Switch>
  </Router>
);

export default Pages;
>>>>>>> Clean Architeture
