import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function TradulabRouter({
  Component,
  middlewares = [],
  path,
  Parent = null,
  ...rest
}: {
  Component: any;
  middlewares: any;
  Parent: any;
  path: any;
}) {
  const Middlewares = [...middlewares];
  const current = Middlewares.shift();

  if (current)
    return current(Middlewares, {
      Component,
      path,
      Parent,
      ...rest,
    });

  if (Parent)
    return (
      <Parent>
        <Route
          {...rest}
          exact
          path={path}
          render={(props) => <Component {...props} />}
        />
      </Parent>
    );

  return (
    <Route
      {...rest}
      exact
      path={path}
      render={(props) => <Component {...props} />}
    />
  );
}
