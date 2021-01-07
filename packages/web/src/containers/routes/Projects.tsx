import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthMiddleware, RoleMiddleware } from "./middlewares";
import { ProjectsDetails, ProjectsLists } from "../pages";

interface IProjects {
  path: string;
}

const Projects: React.FC<IProjects> = ({ path }) => {
  return (
    <AuthMiddleware redirect={path}>
      <Switch>
        <Route exact path="/projects" component={ProjectsLists} />
        <RoleMiddleware role="Miguel">
          <Route exact path="/projects/details" component={ProjectsDetails} />
        </RoleMiddleware>
      </Switch>
    </AuthMiddleware>
  );
};

export default Projects;
