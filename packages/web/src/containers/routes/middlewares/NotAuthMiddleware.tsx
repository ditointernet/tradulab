import React from "react";
import { Redirect } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import TradulabRouter from "../TradulabRouter";
import { MiddlewareProps } from "../types";
import { string } from "@hapi/joi";
import { ReadStream } from "fs";

const NotAuthMiddleware: React.FC<MiddlewareProps> = ({
  middlewares,
  ...rest
}) => {
  const TOKEN = localStorage.getItem("token");

  if (TOKEN)
    return (
      <Redirect
        to={
          rest.path && typeof rest.path === "string" ? rest.path : rest.path[0]
        }
      />
    );

  return <TradulabRouter {...rest} middlewares={middlewares} />;
};

export default NotAuthMiddleware;
