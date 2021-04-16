import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import RolesList from '../../components/RolesList';

const PROJECTS_QUERY = gql`
  query web_projectUsers($projectId: ID!) {
    projectUsers(projectId: $projectId) {
      role
      createdAt
      user {
        id
        displayName
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
  projectUsers: UserRole[];
};

const ProjectRolesPage: React.FC = () => {
  const { projectId } = useParams();
  const { loading, error, data } = useQuery<ProjectsResult>(PROJECTS_QUERY, {
    variables: { projectId },
  });
  const [filter, setFilter] = useState<string>('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  const projectRoles =
    data?.projectUsers.filter((role) =>
      new RegExp(escapeRegex(filter), 'ig').test(role.user.displayName)
    ) ?? [];

  return (
    <RolesList
      {...{
        isLoading: loading,
        apolloError: error,
        onSearchChange,
        rows: projectRoles,
      }}
    />
  );
};

function escapeRegex(input: string) {
  return input.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export default ProjectRolesPage;
