import React, { useState } from 'react';
import { RouteProps, useHistory } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';
import Joi from '@hapi/joi';

import { LoginForm, Loading, Dashboard, TradulabTitle } from '../../components';

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

interface ILogin extends RouteProps {
  location: {
    state: { redirect?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}

const Login: React.FC<ILogin> = ({ location }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const [password, setPassword] = useState({ value: '', error: '' });

  const [handleLogin, { loading, data, error }] = useLazyQuery(LOGIN);

  const history = useHistory();

  const handleEmail = (value: string) => {
    const emailSchema = Joi.string()
      .regex(/\S+@\S+\.\S+/)
      .messages({
        'string.pattern.base': 'Email must be in a format <name>@<domain>',
        'string.empty': 'Email is not allowed to be empty',
      });

    const { error } = emailSchema.validate(value);

    if (!error) {
      setEmail({ value, error: '' });
    } else {
      setEmail({ value, error: error.message });
    }
  };

  const handlePassword = (value: string) => {
    const passwordSchema = Joi.string()
      .pattern(/^.*(.*\d){6,}/)
      .messages({
        'string.empty': 'Password is not allowed to be empty',
        'string.pattern.base': 'Password must contain at least 6 numbers',
      });

    const { error } = passwordSchema.validate(value);

    if (!error) {
      setPassword({ value, error: '' });
    } else {
      setPassword({ value, error: error.message });
    }
  };

  const handleRegister = () => {
    history.push('/register');
  };

  if (loading) return <Loading />;

  if (error) {
    history.push('/error');
    return null;
  }

  if (data && !error) {
    localStorage.setItem('token', data.login.token);
    if (location.state.redirect) {
      history.push(location.state.redirect);
    } else {
      history.push('/');
    }
    return null;
  }

  return (
    <Dashboard>
      <TradulabTitle />
      <LoginForm
        email={email}
        password={password}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
    </Dashboard>
  );
};

export default Login;
