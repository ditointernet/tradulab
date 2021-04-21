import { RouteProps, useParams } from 'react-router';
import { LinearProgress } from '@material-ui/core';

import AsyncConditionalRoute from './AsyncConditionalRoute';
import { gql, useQuery } from '@apollo/client';
import { useRef } from 'react';

export const MY_ROLE_QUERY = gql`
  query web_myRole($projectId: ID!) {
    myRole(projectId: $projectId) {
      role
    }
  }
`;

export type MyRoleResult = { myRole: null | { role: string } };

export enum ROLES {
  CONTRIBUTOR = 'contributor',
  DEVELOPER = 'developer',
  MANAGER = 'manager',
  OWNER = 'owner',
  PROOFREADER = 'proofreader',
  // VIEWER = 'viewer',
}

export const ROLES_LIST = [
  ROLES.OWNER,
  ROLES.MANAGER,
  ROLES.DEVELOPER,
  ROLES.PROOFREADER,
  ROLES.CONTRIBUTOR,
  // ROLES.VIEWER,
];

type MinimumRoleRouteProps = RouteProps & { minimumRole: ROLES };

type PromiseCallbacks = {
  promise: Promise<boolean>;
  resolve?: (value: boolean | PromiseLike<boolean>) => void;
  reject?: (value: boolean | PromiseLike<boolean>) => void;
};

const MinimumRoleRoute: React.FC<MinimumRoleRouteProps> = ({
  minimumRole,
  ...props
}) => {
  const minimumRoleIndex = ROLES_LIST.indexOf(minimumRole);

  const { projectId } = useParams();
  const promise = useRef<PromiseCallbacks>({
    promise: new Promise<boolean>(() => null),
  });

  useQuery<MyRoleResult>(MY_ROLE_QUERY, {
    variables: { projectId },
    onError: () => {
      if (promise.current && promise.current.reject) {
        promise.current.reject(false);
      }
    },
    onCompleted: (data) => {
      if (promise.current && promise.current.resolve) {
        const currentRoleIndex = ROLES_LIST.indexOf(data.myRole?.role as ROLES);

        if (currentRoleIndex !== -1 && currentRoleIndex <= minimumRoleIndex) {
          promise.current.resolve(true);
        } else {
          promise.current.resolve(false);
        }
      }
    },
  });

  promise.current.promise = new Promise<boolean>((resolve, reject) => {
    promise.current.resolve = resolve;
    promise.current.reject = reject;
  });

  return (
    <AsyncConditionalRoute
      redirect="/projects"
      condition={() => promise.current.promise}
      fallback={<LinearProgress color="secondary" />}
      {...props}
    />
  );
};

export default MinimumRoleRoute;
