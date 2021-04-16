import React from 'react';

import { Developer } from '../../pages';

interface IDeveloper {
  path: string;
}

const DeveloperRouter: React.FC<IDeveloper> = (props) => <Developer />;

export default DeveloperRouter;
