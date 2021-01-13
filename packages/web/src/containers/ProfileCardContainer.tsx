import React from 'react';

import ProfileCard from '../components/ProfileCard';

const ProfileCardContainer: React.FC = () => {
  const userInfos = {
    username: 'Julio Cezar Taveira Araujo',
    city: 'Belo Horizonte',
    age: '31',
    imageSrc: "https://i.pinimg.com/originals/b5/dc/a9/b5dca9fac1361023498d6cb66e4d8b13.jpg",
  };

  return (
    <ProfileCard
      username={userInfos.username}
      city={userInfos.city}
      age={userInfos.age}
      imageSrc={userInfos.imageSrc}
    />
  );
};

export default ProfileCardContainer;
