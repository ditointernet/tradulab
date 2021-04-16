import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams();

  return (
    <p>
      Projects Details for: {projectId} <Link to="./roles">members</Link>
    </p>
  );
};

export default ProjectDetailsPage;
