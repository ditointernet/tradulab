import React from "react";
import { gql, useQuery } from "@apollo/client";

export default function Login() {
  const LOGIN = gql`
    query login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;

  const { data: dataLogin, error } = useQuery(LOGIN, {
    variables: { email: "bolivar@dito.com.br", password: "123456" },
  });

  if (dataLogin && !error) localStorage.setItem("token", dataLogin.login.token);

  return <p>Login</p>;
}
