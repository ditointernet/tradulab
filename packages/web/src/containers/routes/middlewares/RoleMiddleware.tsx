import React from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const OTHER_MIDDLEWARE = gql`
  query roleMiddleware {
    me {
      _id
      nickname
      username
    }
  }
`;

interface IRoleMiddleware {
  role: string;
}

// Esta função representa as futuras lógicas que serão executadas entre páginas, por exemplo, para o usuário entrar na página
// de Desenvolvimento ele tem que ter a role developer ou maior, esta lógica ficaria num middleware como este
const RoleMiddleware: React.FC<IRoleMiddleware> = (props) => {
  const history = useHistory();
  const { data, error, loading } = useQuery(OTHER_MIDDLEWARE);

  if (loading) return <p>Loading...</p>;

  // Salvar mensagem de erro no estado global
  if (error) {
    history.push('/error', { message: error.message });
    return null;
  }

  if (data.me.username !== props.role) {
    history.push('/error', { message: `Você não é o ${props.role}` });
    return null;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default RoleMiddleware;
