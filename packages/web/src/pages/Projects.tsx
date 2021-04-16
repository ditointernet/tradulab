import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import ProjectsList from '../components/ProjectsList';

const PROJECTS_QUERY = gql`
  query web_listProjects {
    listProjects {
      role
      createdAt
      project {
        id
        slug
        name
        private
      }
    }
  }
`;

export type ProjectRole = {
  role: string;
  createdAt: string;
  project: {
    id: string;
    slug: string;
    name: string;
    private: boolean;
  };
};

type ProjectsResult = {
  listProjects: ProjectRole[];
};

const Projects: React.FC = () => {
  const { loading, error, data } = useQuery<ProjectsResult>(PROJECTS_QUERY);
  const [filter, setFilter] = useState<string>('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  const projectRoles =
    data?.listProjects.filter((role) =>
      new RegExp(escapeRegex(filter), 'ig').test(role.project.name)
    ) ?? [];

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
  return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export default Projects;
