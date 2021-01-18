import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthMiddleware, RoleMiddleware } from './middlewares';
import { ProjectDetails, Projects } from '../pages';

interface IProjects {
  path: string;
}

const ProjectsRouter: React.FC<IProjects> = ({ path }) => {
  return (
    <AuthMiddleware redirect={path}>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <RoleMiddleware role="Miguel">
          <Route exact path="/projects/details" component={ProjectDetails} />
        </RoleMiddleware>
      </Switch>
    </AuthMiddleware>
  );
};

export default ProjectsRouter;
