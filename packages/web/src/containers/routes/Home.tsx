import React from "react";
import { Home as HomePage } from "../pages";
import { AuthMiddleware } from "./middlewares";

interface IHome {
  path: string;
}

const Home: React.FC<IHome> = ({ path }) => {
  return (
    <AuthMiddleware redirect={path}>
      <HomePage />
    </AuthMiddleware>
  );
};

export default Home;
