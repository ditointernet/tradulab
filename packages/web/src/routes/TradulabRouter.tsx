import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function TradulabRouter({
  component: Component,
  middlewares = [],
  path,
  BaseComponent = null,
  ...rest
}: {
  component: any;
  middlewares: any;
  BaseComponent: any;
  path: any;
}) {
  const Middlewares = [...middlewares];
  const current = Middlewares.shift();

  if (middlewares.length > 1)
    return current(Middlewares, {
      component: Component,
      path,
      BaseComponent,
      ...rest,
    });

  if (middlewares.length === 1)
    return current([], { component: Component, path, BaseComponent, ...rest });

  if (BaseComponent)
    return (
      <BaseComponent>
        <Route
          {...rest}
          exact
          path={path}
          render={(props) => <Component {...props} />}
        />
      </BaseComponent>
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
