<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { gql, useQuery } from "@apollo/client";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";
import { LoginContainer } from "../containers";
// import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
// Tipagem da Função
const Login: React.FC = () => {
  return (
    <Grid className="Page">
      <LoginContainer />
=======
import React, { useEffect, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> Clean Files
import { gql, useLazyQuery } from "@apollo/client";
import { Redirect, useHistory, RouteProps } from "react-router-dom";
import { LoginForm } from "../../components";
import TradulabBackground from "../../images/tradulab-background.png";
import { makeStyles } from "@material-ui/core/styles";
import { BLUE_700, BLACK_800 } from "../../constants/colors";
import Grid from "@material-ui/core/Grid";
import Joi from "@hapi/joi";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${TradulabBackground})`,
    display: "flex",
    flexFlow: "column wrap",
    height: "100%",
    padding: "2% 30% 2% 10%",
    "@media (max-width: 800px)": {
      padding: "2% 20% 2% 10%",
    },
    "@media (max-width: 500px)": {
      padding: "2%",
    },
  },
  title: {
    backgroundColor: BLACK_800,
    borderRadius: "100px",
    color: "white",
    fontFamily: "Open Sans",
    fontSize: "100%",
    textAlign: "center",
    "& span": {
      color: BLUE_700,
    },
    "@media (max-width: 500px)": {
      textAlign: "center",
    },
  },
}));

const LOGIN = gql`
  query loginUser($email: String!, $password: String!) {
    login(payload: { email: $email, password: $password }) {
      token
      nickname
      username
      email
      id
    }
  }
`;

interface LoginProps extends RouteProps {
  location: {
    state: { path?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}

const Login: React.FC<LoginProps> = ({ location }) => {
  const [email, setEmail] = useState({ value: "", error: "" });

  const [password, setPassword] = useState({ value: "", error: "" });

  const [handleLogin, { loading, data, error }] = useLazyQuery(LOGIN);

  const classes = useStyles();

  const history = useHistory();

  const handleEmail = (value: string) => {
    const emailSchema = Joi.string()
      .regex(/\S+@\S+\.\S+/)
      .messages({
        "string.pattern.base": "Email must be in a format <name>@<domain>",
        "string.empty": "Email is not allowed to be empty",
      });

    const { error } = emailSchema.validate(value);

    if (!error) {
      setEmail({ value, error: "" });
    } else {
      setEmail({ value, error: error.message });
    }
  };

  const handlePassword = (value: string) => {
    const passwordSchema = Joi.string()
      .pattern(/^.*(.*\d){6,}/)
      .messages({
        "string.empty": "Password is not allowed to be empty",
        "string.pattern.base": "Password must contain at least 6 numbers",
      });

    const { error } = passwordSchema.validate(value);

    if (!error) {
      setPassword({ value, error: "" });
    } else {
      setPassword({ value, error: error.message });
    }
  };

  const handleRegister = () => {
    history.push("./register");
  };

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <Redirect
        to={{ pathname: "/error", state: { message: error.message } }}
      />
    );

  if (data && !error) {
    localStorage.setItem("token", data.login.token);
    if (location.state.path) return <Redirect to={location.state.path} />;

    return <Redirect to="./" />;
  }

  return (
    <Grid className={classes.root}>
      <h1 className={classes.title}>
        Tradu<span>lab</span>
      </h1>
      <LoginForm
        email={email}
        password={password}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
>>>>>>> login
    </Grid>
  );
<<<<<<< HEAD

  // // Quando for trocar o usuário para testar o OtherMiddleware lembre-se de apagar o token no localStorage
  // const BOLIVAR = { email: "bolivar@dito.com.br", password: "123456" };

  // const MIGUEL = { email: "miguel@dito.com.br", password: "123456" };

  // const { data, error, loading } = useQuery(LOGIN, {
  //   variables: BOLIVAR,
  // });

  // if (loading) return <p>Loading...</p>;

  // if (error)
  //   return (
  //     <Redirect
  //       to={{ pathname: "/error", state: { message: error.message } }}
  //     />
  //   );

  // if (data && !error) localStorage.setItem("token", data.login.token);
  // console.log("Login Data:", data);
  // // Salvar os dados do usuário no estado

  // if (props.location.state.path)
  //   return <Redirect to={props.location.state.path} />;

  // return <Redirect to="/" />;
=======
import { Redirect, RouteProps } from "react-router-dom";

interface LoginProps extends RouteProps {
  location: {
    state: { path?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}
// Tipagem da Função
const Login: React.FC<LoginProps> = ({ location }) => {
  const LOGIN = gql`
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

  // Quando for trocar o usuário para testar o OtherMiddleware lembre-se de apagar o token no localStorage
  const BOLIVAR = { email: "bolivar@dito.com.br", password: "123456" };

  const MIGUEL = { email: "miguel@dito.com.br", password: "123456" };

  const { data, error, loading } = useQuery(LOGIN, {
    variables: MIGUEL,
  });

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <Redirect
        to={{ pathname: "/error", state: { message: error.message } }}
      />
    );

  if (data && !error) localStorage.setItem("token", data.login.token);
  console.log("Login Data:", data);
  // Salvar os dados do usuário no estado

  if (location.state && location.state.path)
    return <Redirect to={location.state.path} />;

  return <Redirect to="/" />;
>>>>>>> Types
=======
>>>>>>> Clean Files
};

export default Login;
