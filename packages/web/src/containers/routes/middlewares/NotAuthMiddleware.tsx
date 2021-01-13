import React from 'react';
import { useHistory } from 'react-router-dom';

interface INotAuthMiddleware {
  children: React.ReactChild;
}

const NotAuthMiddleware: React.FC<INotAuthMiddleware> = (props) => {
  const history = useHistory();
  const TOKEN = localStorage.getItem('token');

  if (TOKEN) {
    history.push('/');
    return null;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default NotAuthMiddleware;
