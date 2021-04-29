import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import ProjectsList from '../../components/ProjectsList';
import { escapeRegex } from '../../helpers';
import CreateProjectDialogContainer from '../../containers/Dialogs/CreateProject';
import { Connnection } from '../../types';

const PROJECTS_QUERY = gql`
  query web_listMyProjects {
    listMyProjects {
      edges {
        node {
          id
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

export type ProjectRole = {
  id: string;
  role: string;
  createdAt: string;
  project: {
    id: string;
    name: string;
    private: boolean;
  };
};

type ProjectsResult = {
  listMyProjects: Connnection<ProjectRole>;
};

const YourProjectsPage: React.FC = () => {
  const { loading, error, data } = useQuery<ProjectsResult>(PROJECTS_QUERY);
  const [isCreatingProject, setProjectCreationDialogState] = useState<boolean>(
    false
  );
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
    <>
      <CreateProjectDialogContainer
        isOpen={isCreatingProject}
        closeModal={() => setProjectCreationDialogState(false)}
      />
      <ProjectsList
        {...{
          isLoading: loading,
          apolloError: error,
          onSearchChange,
          rows: projectRoles,
          openProjectCreation: () => setProjectCreationDialogState(true),
        }}
      />
    </>
  );
};

export default YourProjectsPage;
