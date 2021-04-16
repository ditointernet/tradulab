import { useEffect, useState } from 'react';
import { Navigate, Route, RouteProps } from 'react-router';

interface ConditionalRouteProps extends RouteProps {
  redirect: string;
  fallback: React.ReactNode;
  condition: () => Promise<boolean>;
}

type AsyncConditionalRouteState = {
  isLoading: boolean;
  canRender: boolean;
};

const AsyncConditionalRoute: React.FC<ConditionalRouteProps> = ({
  redirect,
  fallback,
  condition,
  ...props
}) => {
  const [
    { isLoading, canRender },
    setState,
  ] = useState<AsyncConditionalRouteState>({
    isLoading: true,
    canRender: false,
  });

  useEffect(() => {
    condition()
      .then((canRender) => setState({ isLoading: false, canRender }))
      .catch(() => setState({ isLoading: false, canRender: false }));
  }, [condition]);

  if (isLoading) {
    return <>{fallback}</>;
  }

  if (!isLoading && !canRender) {
    return <Navigate to={redirect} replace={true} />;
  }

  return <Route {...props} />;
};

export default AsyncConditionalRoute;
