import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { MiddlewareProps } from "./types";

export default function TradulabRouter({
  Component,
  Parent = null,
  middlewares = [],
  path,
  ...rest
}: {
  Component: React.FC<RouteProps>;
  Parent?: React.FC<RouteProps> | null;
  middlewares?: React.FC<MiddlewareProps>[];
  path: string | string[] | undefined;
}) {
  const Middlewares = [...middlewares];
  const current = Middlewares.shift();

  if (current)
    return current({
      Component,
      Parent,
      middlewares: Middlewares,
      path,
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
