import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthMiddleware, RoleMiddleware } from './middlewares';
import { ProjectDetails, Projects } from '../pages';

interface IProjects {
  path: string;
}

const ProjectsRouter: React.FC<IProjects> = ({ path }) => {
  return (
    <AuthMiddleware redirect={path}>
      <Routes>
        <Route path="/projects">
          <Projects />
        </Route>
        <RoleMiddleware role="Miguel">
          <Route path="/projects/details">
            <ProjectDetails />
          </Route>
        </RoleMiddleware>
      </Routes>
    </AuthMiddleware>
  );
};

export default ProjectsRouter;
