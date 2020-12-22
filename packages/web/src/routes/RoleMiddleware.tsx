import React from "react";
import TradulabRouter from "./TradulabRouter";
import { MiddlewareProps } from "./types";
import { Redirect } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const OTHER_MIDDLEWARE = gql`
  query other {
    me {
      _id
      nickname
      username
    }
  }
`;

// Esta função representa as futuras lógicas que serão executadas entre páginas, por exemplo, para o usuário entrar na página
// de Desenvolvimento ele tem que ter a role developer ou maior, esta lógica ficaria num middleware como este
const RoleMiddleware: React.FC<MiddlewareProps> = ({
  middlewares,
  ...rest
}) => {
  const { data, error, loading } = useQuery(OTHER_MIDDLEWARE);

  if (loading) return <p>Loading...</p>;

  // Salvar mensagem de erro no estado global
  if (error)
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { message: error.message },
        }}
      />
    );

  if (data.me.username !== "Anderson Bolivar")
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { message: "Você não é o Bolivar" },
        }}
      />
    );

  return <TradulabRouter {...rest} middlewares={middlewares} />;
};

export default RoleMiddleware;
