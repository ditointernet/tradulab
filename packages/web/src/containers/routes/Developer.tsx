import React from "react";
import { Developer as DeveloperPage } from "../pages";
import { AuthMiddleware, RoleMiddleware } from "./middlewares";

interface IDeveloper {
  path: string;
}

const Developer: React.FC<IDeveloper> = (props) => {
  return (
    <AuthMiddleware redirect={props.path}>
      <RoleMiddleware role="Anderson Bolivar">
        <DeveloperPage />
      </RoleMiddleware>
    </AuthMiddleware>
  );
};

export default Developer;
