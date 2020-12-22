import React from "react";
import { RouteProps } from "react-router-dom";

export interface MiddlewareProps {
  middlewares: React.FC<MiddlewareProps>[];
  Component: React.FC<RouteProps>;
  Parent: React.FC<RouteProps> | null;
  path: string | string[] | undefined;
  rest: RouteProps;
}
