import React, { useState, useEffect } from 'react';

import TabSwitcher from '@components/common/TabSwitcher';
import SocialAuthentication from '@components/Authentication/SocialAuthentication';
import FormAuthentication from '@components/Authentication/FormAuthentication';
import { ScrollableContainer } from './style';
import ForgotPass from './ForgotPass';
import ResetPassWord from './ResetPassWord';

const Login = ({ closeWidget, title }) => {
  const [active, setActive] = useState(title);
  const [forgotPass, setForgotPass] = useState(false);

  const handleChageForgotPassword = () => {
    setForgotPass(true);
  };

  const handleGoBack = () => {
    setForgotPass(false);
  };

  useEffect(() => {
    if (!active) {
      setActive('Login');
    }
  }, [active]);

  return (
    <>
      {!forgotPass && (
        <TabSwitcher
          leftLabel="Login"
          rightLabel="Register"
          active={active}
          activeCallback={setActive}
          shouldSetInitialFocus
        />
      )}

      <ScrollableContainer>
        {!forgotPass && <SocialAuthentication afterSubmit={closeWidget} />}
        {!forgotPass ? (
          <FormAuthentication
            afterSubmit={closeWidget}
            formTitle={`${active} with your email:`}
            submitButtonTitle={active}
            onClick={handleChageForgotPassword}
          />
        ) : (
          <ForgotPass
            afterSubmit={closeWidget}
            formTitle="Forgot passWord"
            submitButtonTitle={active}
            onClick={handleGoBack}
          />
          // <ResetPassWord />
        )}
      </ScrollableContainer>
    </>
  );
};

export default Login;
