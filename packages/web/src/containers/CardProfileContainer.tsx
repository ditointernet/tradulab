import React from 'react';

import CardProfile from '../components/CardProfile';

const CardProfileContainer: React.FC = () => {
  const userInfos = [{
    username: 'Julio Cezar Taveira Araujo',
    city: 'Belo Horizonte',
    age: '31',
    imageSrc: "https://i.pinimg.com/originals/b5/dc/a9/b5dca9fac1361023498d6cb66e4d8b13.jpg",
  }]

  return (
    <CardProfile
      username={userInfos[0].username}
      city={userInfos[0].city}
      age={userInfos[0].age}
      imageSrc={userInfos[0].imageSrc}
    />
  );
};

export default CardProfileContainer;
