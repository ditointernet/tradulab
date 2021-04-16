import React from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const OTHER_MIDDLEWARE = gql`
  query roleMiddleware {
    me {
      id
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
  const navigate = useNavigate();
  const { data, error, loading } = useQuery(OTHER_MIDDLEWARE);

  if (loading) return <p>Loading...</p>;

  // Salvar mensagem de erro no estado global
  if (error) {
    navigate('/error');
    return null;
  }

  if (data.me.username !== props.role) {
    navigate('/error');
    return null;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default RoleMiddleware;
