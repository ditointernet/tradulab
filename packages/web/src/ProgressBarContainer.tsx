import React from 'react';

import ProgressBar from './ProgressBar';

const ProgressBarContainer: React.FC = () => {
  const file = {
    approvalProgress: 10,
    translateProgress: 30,
  }

  return (
    <ProgressBar
      approvalPercentage={file.approvalProgress}
      translatePercentage={file.translateProgress}
    />
  );
};

export default ProgressBarContainer;
