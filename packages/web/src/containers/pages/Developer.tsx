import React from 'react';
import { TradulabHeader } from '../../components';

const Developer: React.FC = () => {
  return (
    <TradulabHeader>
      <p>Only Developers or higher roles can see it</p>
    </TradulabHeader>
  );
};

export default Developer;
