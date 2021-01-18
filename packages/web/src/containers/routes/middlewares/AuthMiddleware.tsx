import React from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      _id
      nickname
      username
    }
  }
`;

interface IAuthMiddleware {
  redirect: string;
}

const AuthMiddleware: React.FC<IAuthMiddleware> = (props) => {
  const history = useHistory();
  const { error, loading } = useQuery(IS_LOGGED_IN);
  const TOKEN = localStorage.getItem('token');

  if (loading) return <p>Loading...</p>;

  if (error || !TOKEN) {
    history.push('/login', { redirect: props.redirect });
    return null;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default AuthMiddleware;
