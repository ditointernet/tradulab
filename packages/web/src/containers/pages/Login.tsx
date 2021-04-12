import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router';
import { gql, useLazyQuery } from '@apollo/client';
import Joi from '@hapi/joi';

import { LoginForm, Loading, Dashboard, TradulabTitle } from '../../components';

const LOGIN = gql`
  query loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const [handleLogin, { loading, data, error }] = useLazyQuery(LOGIN);

  const navigate = useNavigate();

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
    const passwordSchema = Joi.string().messages({
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

  const handleRegister = () => navigate('/register', { replace: true });

  if (loading) return <Loading />;

  if (data && !error) {
    localStorage.setItem('token', data?.login?.token);
  }

  return (
    <>
      {!!error && <Navigate to="../error" replace={true} />}
      {!error && data?.login?.token && <Navigate to="../home" replace={true} />}
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
    </>
  );
};

export default Login;
