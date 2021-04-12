import React from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      id
      username
    }
  }
`;

interface IAuthMiddleware {
  redirect: string;
}

const AuthMiddleware: React.FC<IAuthMiddleware> = (props) => {
  const navigate = useNavigate();
  const { error, loading } = useQuery(IS_LOGGED_IN);
  const TOKEN = localStorage.getItem('token');

  if (loading) return <p>Loading...</p>;

  if (error || !TOKEN) {
    navigate('/login');
    return null;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default AuthMiddleware;
