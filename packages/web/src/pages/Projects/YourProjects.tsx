import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import ProjectsList from '../../components/ProjectsList';

const PROJECTS_QUERY = gql`
  query web_listMyProjects {
    listMyProjects {
      edges {
        node {
          role
          createdAt
          project {
            id
            name
            private
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

type PageInfo = {
  hasNextPage: boolean;
  startAfter: string | null;
};

type ProjectRoleConnection = {
  edges: Array<{ node: ProjectRole }>;
  pageInfo: PageInfo;
};

export type ProjectRole = {
  role: string;
  createdAt: string;
  project: {
    id: string;
    name: string;
    private: boolean;
  };
};

type ProjectsResult = {
  listMyProjects: ProjectRoleConnection;
};

const YourProjectsPage: React.FC = () => {
  const { loading, error, data } = useQuery<ProjectsResult>(PROJECTS_QUERY);
  const [filter, setFilter] = useState<string>('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  const projectRoles =
    data?.listMyProjects.edges
      .filter((role) =>
        new RegExp(escapeRegex(filter), 'ig').test(role.node.project.name)
      )
      .map((node) => node.node) ?? [];

  return (
    <ProjectsList
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

export default YourProjectsPage;
