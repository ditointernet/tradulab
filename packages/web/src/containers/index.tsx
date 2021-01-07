<<<<<<< HEAD
export { default as TradulabLayout } from './TradulabLayout';
export { default as NavBarContainer } from './NavBarContainer';
export { default as ProfileCardContainer } from './ProfileCardContainer';
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Error, Login } from "./pages";
import { Developer, Home, Projects } from "./routes";

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route component={Error} exact path="/error" />
      <Route component={Login} exact path="/login" />
      <Route
        path="/dev"
        render={({ location }) => <Developer path={location.pathname} />}
      />
      <Route
        path="/projects"
        render={({ location }) => <Projects path={location.pathname} />}
      />
      <Route
        exact
        path="/"
        render={({ location }) => <Home path={location.pathname} />}
      />
    </Switch>
  </Router>
);

<<<<<<< HEAD
export default Pages;
>>>>>>> Clean Architeture
=======
export default Routes;
>>>>>>> Change name: Pages -> Routes
