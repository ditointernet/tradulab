import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import RolesList from '../../components/RolesList';
import { escapeRegex } from '../../helpers';
import InviteUserDialogContainer from '../../containers/Dialogs/InviteUser';
import { Connnection } from '../../types';
import RemoveRoleDialogContainer from '../../containers/Dialogs/RemoveRole';
import UpdateRoleContainer from '../../containers/Dialogs/UpdateRole';

const PROJECTS_QUERY = gql`
  query web_projectUsers($projectId: ID!) {
    projectUsers(projectId: $projectId) {
      edges {
        node {
          role
          createdAt
          user {
            id
            displayName
          }
        }
      }
      pageInfo {
        hasNextPage
        startAfter
      }
    }
  }
`;

export type UserRole = {
  role: string;
  createdAt: string;
  user: {
    id: string;
    displayName: string;
  };
};

type ProjectsResult = {
  projectUsers: Connnection<UserRole>;
};

const ProjectRolesPage: React.FC = () => {
  const { projectId } = useParams();
  const { loading, error, data } = useQuery<ProjectsResult>(PROJECTS_QUERY, {
    variables: { projectId },
  });
  const [isInviting, setInvitingState] = useState<boolean>(false);
  const [isRemoving, setRemovingState] = useState<boolean>(false);
  const [isUpdating, setUpdatingState] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [filter, setFilter] = useState<string>('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  const projectRoles =
    data?.projectUsers.edges
      .filter((role) =>
        new RegExp(escapeRegex(filter), 'ig').test(role.node.user.displayName)
      )
      .map((node) => node.node) ?? [];

  return (
    <>
      <InviteUserDialogContainer
        isOpen={isInviting}
        closeModal={() => setInvitingState(false)}
      />
      {!!selectedRole && (
        <>
          <RemoveRoleDialogContainer
            userRole={selectedRole}
            isOpen={isRemoving}
            closeModal={() => {
              setRemovingState(false);
              setSelectedRole(null);
            }}
          />
          <UpdateRoleContainer
            userRole={selectedRole}
            isOpen={isUpdating}
            closeModal={() => {
              setUpdatingState(false);
              setSelectedRole(null);
            }}
          />
        </>
      )}
      <RolesList
        {...{
          isLoading: loading,
          apolloError: error,
          onSearchChange,
          rows: projectRoles,
          openUserInviteModal: () => setInvitingState(true),
          openRemoveRoleModal: (role) => {
            setRemovingState(true);
            setSelectedRole(role);
            return true;
          },
          openUpdateRoleModal: (role) => {
            setUpdatingState(true);
            setSelectedRole(role);
            return true;
          },
        }}
      />
    </>
  );
};

export default ProjectRolesPage;
