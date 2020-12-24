import React from "react";
import { RouteProps } from "react-router-dom";

const Developer: React.FC<RouteProps> = () => {
  return <p>Only Developers or higher roles can see it</p>;
};

export default Developer;
