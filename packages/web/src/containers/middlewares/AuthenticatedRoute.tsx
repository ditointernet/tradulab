import { RouteProps } from 'react-router';

import ConditionalRoute from './ConditionalRoute';

const AuthenticatedRoute: React.FC<RouteProps> = (props) => {
  function checkIfAuthenticated() {
    return !!localStorage.getItem('token');
  }

  return (
    <ConditionalRoute
      redirect="/auth/login"
      condition={checkIfAuthenticated}
      {...props}
    />
  );
};

export default AuthenticatedRoute;
