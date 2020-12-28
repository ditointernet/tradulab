import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { MiddlewareProps } from "./types";
import { LoginProps } from "../../containers/pages/Login";

export default function TradulabRouter({
  Component,
  Parent = null,
  middlewares = [],
  path,
  ...rest
}: {
  Component: React.FC<RouteProps> | React.FC<LoginProps>;
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
        <Route {...rest} exact path={path} component={Component} />
      </Parent>
    );

  return <Route {...rest} exact path={path} component={Component} />;
}
