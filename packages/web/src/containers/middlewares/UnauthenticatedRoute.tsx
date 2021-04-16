import { RouteProps } from 'react-router';

import ConditionalRoute from './ConditionalRoute';

const UnauthenticatedRoute: React.FC<RouteProps> = (props) => {
  function checkIfUnauthenticated() {
    return !localStorage.getItem('token');
  }

  return (
    <ConditionalRoute
      redirect="/projects"
      condition={checkIfUnauthenticated}
      {...props}
    />
  );
};

export default UnauthenticatedRoute;
