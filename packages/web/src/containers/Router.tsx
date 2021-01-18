import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Login, Error, Developer, Projects } from './routes';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Error} exact path="/error" />
      <Route component={Developer} path="/dev" />
      <Route component={Projects} path="/projects" />
      <Route component={Home} exact path="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
