import React, { useContext } from 'react';

import UserContext from '@utils/userContext';

import Home from '@components/HomePage';

export default () => {
  const { state: user } = useContext(UserContext);
  return <Home user={user} />;
};
