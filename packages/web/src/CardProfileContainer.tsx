import React from 'react';

import CardProfile from './CardProfile';

const CardProfileContainer: React.FC = () => {
  const usernameInfos = [{
    username: 'Julio Cezar Taveira Araujo',
    city: 'Belo Horizonte',
    age: '31',
  }]

  return (
    <CardProfile
      username={usernameInfos[0].username}
      city={usernameInfos[0].city}
      age={usernameInfos[0].age}
    />
  );
};

export default CardProfileContainer;
