import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/home" render={() => <Home />} />
        <Route path="/projects" render={() => <Projects />} />
      </Switch>
    </Router>
  );
}
