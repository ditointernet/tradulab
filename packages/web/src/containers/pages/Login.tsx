import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { RouteProps, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

interface LoginProps extends RouteProps {
  location: {
    state: { redirect?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}
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

const Login: React.FC<LoginProps> = (props) => {
  const history = useHistory();
  const [handleLogin, { loading, data, error }] = useLazyQuery(LOGIN);

  // Quando for trocar o usuário para testar o OtherMiddleware lembre-se de apagar o token no localStorage
  const BOLIVAR = { email: 'bolivar@dito.com.br', password: '123456' };

  const MIGUEL = { email: 'miguel@dito.com.br', password: '123456' };

  if (loading) return <p>Loading...</p>;

  if (error) {
    history.push('/error', { message: error.message });
  }

  if (data && !error) {
    localStorage.setItem('token', data.login.token);
    console.log(props.location);
    history.push(props.location?.state?.redirect || '/');
  }

  return (
    <div>
      <button
        onClick={() =>
          handleLogin({
            variables: MIGUEL,
          })
        }
      >
        Login Miguel
      </button>
      <button
        onClick={() =>
          handleLogin({
            variables: BOLIVAR,
          })
        }
      >
        Login Bolivar
      </button>
    </div>
  );
};

export default Login;
