import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

import { LoginForm } from "../components";

const LOGIN_SCHEMA = gql`
  query userBolivar($email: String!, $password: String!) {
    login(payload: { email: $email, password: $password }) {
      token
      nickname
      username
      email
      id
    }
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState({ value: "", error: true });

  const [password, setPassword] = useState({ value: "", error: true });

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default Login;
