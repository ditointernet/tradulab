import React from "react";
import { RouteProps } from "react-router-dom";

export interface MiddlewareProps {
  Component: React.FC<RouteProps>;
  Parent: React.FC<RouteProps> | null;
  middlewares: React.FC<MiddlewareProps>[];
  path: string | string[] | undefined;
  rest: RouteProps;
}
