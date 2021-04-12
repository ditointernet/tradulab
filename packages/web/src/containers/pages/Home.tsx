import React from 'react';

import { TradulabHeader, ProfileCard } from '../../components';

const Home: React.FC = () => {
  // Vindo do estado global
  const userInfos = [
    {
      username: 'Julio Cezar Taveira Araujo',
      city: 'Belo Horizonte',
      age: '31',
      imageSrc:
        'https://i.pinimg.com/originals/b5/dc/a9/b5dca9fac1361023498d6cb66e4d8b13.jpg',
    },
  ];

  return (
    <TradulabHeader>
      <ProfileCard
        username={userInfos[0].username}
        city={userInfos[0].city}
        age={userInfos[0].age}
        imageSrc={userInfos[0].imageSrc}
      />
    </TradulabHeader>
  );
};

export default Home;
