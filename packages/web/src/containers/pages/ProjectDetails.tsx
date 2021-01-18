import React from 'react';
import { RouteProps } from 'react-router-dom';

import TradulabHeader from '../../components/TradulabHeader';

const ProjectDetails: React.FC<RouteProps> = () => {
  return (
    <TradulabHeader>
      <p>Projects Details</p>
    </TradulabHeader>
  );
};

export default ProjectDetails;
