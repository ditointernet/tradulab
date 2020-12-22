import React from "react";

import { Route, RouteProps } from "react-router-dom";
import { MiddlewareProps } from "./types";

export default function TradulabRouter({
  Component,
  middlewares = [],
  path,
  Parent = null,
  ...rest
}: {
  Component: React.FC<RouteProps>;
  middlewares?: React.FC<MiddlewareProps>[];
  Parent?: React.FC<RouteProps> | null;
  path: string | string[] | undefined;
}) {
  const Middlewares = [...middlewares];
  const current = Middlewares.shift();

  if (current)
    return current({
      middlewares: Middlewares,
      Component,
      path,
      Parent,
      rest,
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
