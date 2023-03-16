import React, { useState } from 'react';

import { SubmitWrapper, SubmitButton, UserName, WrapperButton } from '../FormAuthentication/style';

const Logout = ({ username, onLogoutClick }) => {
  const [confirmLogout, setConfirmLogout] = useState(true);

  return (
    <SubmitWrapper>
      {confirmLogout ? (
        <UserName>You are logged in as {username}!</UserName>
      ) : (
        <UserName>Do you want to log out?</UserName>
      )}
      {confirmLogout ? (
        <SubmitButton variant="primary" onClick={() => setConfirmLogout(false)}>
          Logout
        </SubmitButton>
      ) : (
        <WrapperButton>
          <SubmitButton variant="primary" onClick={onLogoutClick}>
            Confirm
          </SubmitButton>
          <SubmitButton variant="primary" onClick={() => setConfirmLogout(true)}>
            Cancel
          </SubmitButton>
        </WrapperButton>
      )}
    </SubmitWrapper>
  );
};

export default Logout;
