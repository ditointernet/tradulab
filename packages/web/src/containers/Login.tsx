import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { Redirect, useHistory, RouteProps } from 'react-router-dom';
import { LoginForm } from '../components';
import TradulabBackground from '../images/tradulab-background.png';
import { makeStyles } from '@material-ui/core/styles';
import { BLUE_700, BLACK_800 } from '../constants/colors';
import Grid from '@material-ui/core/Grid';
import Joi from '@hapi/joi';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${TradulabBackground})`,
    display: 'flex',
    flexFlow: 'column wrap',
    height: '100%',
    padding: '2% 30% 2% 10%',
    '@media (max-width: 800px)': {
      padding: '2% 20% 2% 10%',
    },
    '@media (max-width: 500px)': {
      padding: '2%',
    },
  },
  title: {
    backgroundColor: BLACK_800,
    borderRadius: '100px',
    color: 'white',
    fontFamily: 'Open Sans',
    fontSize: '100%',
    textAlign: 'center',
    '& span': {
      color: BLUE_700,
    },
    '@media (max-width: 500px)': {
      textAlign: 'center',
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

const Login: React.FC<any> = ({ location }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const [password, setPassword] = useState({ value: '', error: '' });

  const [handleLogin, { loading, data, error }] = useLazyQuery(LOGIN);

  const classes = useStyles();

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
    history.push('./register');
  };

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <Redirect
        to={{ pathname: '/error', state: { message: error.message } }}
      />
    );

  if (data && !error) {
    localStorage.setItem('token', data.login.token);
    if (location.state.path) return <Redirect to={location.state.path} />;

    return <Redirect to="./" />;
  }

  return (
    <Grid className={classes.root}>
      <Typography className={classes.title}>
        Tradu<span>lab</span>
      </Typography>
      <LoginForm
        email={email}
        password={password}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
    </Grid>
  );
};

export default Login;
