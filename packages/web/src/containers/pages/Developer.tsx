import React from "react";
import { RouteProps } from "react-router-dom";
import { TradulabHeader } from "../../components/layout";

const Developer: React.FC<RouteProps> = () => {
  return (
    <TradulabHeader>
      <p>Only Developers or higher roles can see it</p>
    </TradulabHeader>
  );
};

export default Developer;
