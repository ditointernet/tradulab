import { Navigate, Route, RouteProps } from 'react-router';

interface ConditionalRouteProps extends RouteProps {
  redirect: string;
  condition: () => boolean;
}

const ConditionalRoute: React.FC<ConditionalRouteProps> = ({
  redirect,
  condition,
  ...props
}) => {
  if (!condition()) {
    return <Navigate to={redirect} replace={true} />;
  }

  return <Route {...props} />;
};

export default ConditionalRoute;
