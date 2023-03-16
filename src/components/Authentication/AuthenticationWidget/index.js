import React, { useEffect, useContext } from 'react';

import UserContext from '@utils/userContext';
import { Facebook } from '../SocialAuthentication/facebook';
import { AuthenticationWrapper, ScrollableContainer } from './style';

import Logout from './Logout';
import Login from './Login';

const AuthenticationWidget = ({ closeWidget, title }) => {
  const { state: user, dispatch: userDispatch } = useContext(UserContext);
  const isLogged = Boolean(user.id);

  const handleLogoutClick = () => userDispatch({ type: 'logout' });

  return (
    <AuthenticationWrapper logged={isLogged} data-testid="authentication-widget-component">
      {isLogged ? (
        <Logout username={user.username} onLogoutClick={handleLogoutClick} />
      ) : (
        <Login closeWidget={closeWidget} title={title} />
      )}
    </AuthenticationWrapper>
  );
};

export default AuthenticationWidget;
