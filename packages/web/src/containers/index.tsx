<<<<<<< HEAD
<<<<<<< HEAD
export { default as TradulabLayout } from './TradulabLayout';
export { default as NavBarContainer } from './NavBarContainer';
export { default as ProfileCardContainer } from './ProfileCardContainer';
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Error, Login } from "./pages";
import { Developer, Home, Projects } from "./routes";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Error, Developer, Projects } from './routes';
>>>>>>> Router Update

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Error} exact path="/error" />
      <Route component={Developer} path="/dev" />
      <Route component={Projects} path="/projects" />
      <Route component={Home} exact path="/" />
    </Switch>
  </Router>
);

<<<<<<< HEAD
export default Pages;
>>>>>>> Clean Architeture
=======
export default Routes;
>>>>>>> Change name: Pages -> Routes
