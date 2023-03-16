import React, { useContext, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { LOGIN_WITH_FACEBOOK, LOGIN_WITH_GOOGLE } from '@graphql/queries/login';
import UserContext from '@utils/userContext';
import facebookLogo from '@svg/facebook.svg';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import linkedInLogo from '@svg/linkedin.svg';

import googleLogo from '@svg/google.svg';
import GoogleLogin from 'react-google-login';
// import { FacebookLogout } from './facebook';
import console from '@utils/console';

import { FACEBOOK_APP_ID, GOOGLE_APP_ID } from './constants';
import { SocialSection, SectionTitle, Social, StyledSocialButton, GmailButton } from './style';

const SocialAuthentication = ({ afterSubmit, isFacebookLoggedIn }) => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const [socialNotification, setSocialNotification] = useState();

  useEffect(() => {
    console.error(`ERROR RETURNED FROM FACEBOOK LOGIN API: ${socialNotification}`);
  }, [socialNotification]);

  const [loginWithFacebook, { loading }] = useLazyQuery(LOGIN_WITH_FACEBOOK, {
    onCompleted: ({ loginWithFacebook }) => {
      userDispatch({
        type: 'login',
        data: { ...loginWithFacebook, id: loginWithFacebook.wpid || loginWithFacebook.id },
      });
      afterSubmit();
    },
    onError: error => console.error('error', error),
    fetchPolicy: 'no-cache',
  });

  const [loginWithGoogle] = useLazyQuery(LOGIN_WITH_GOOGLE, {
    onCompleted: loginData => {
      console.log(loginData);
      // userDispatch({
      //   type: 'login',
      //   data: { ...loginData, id: loginData.wpid || loginData.id },
      // });
      // afterSubmit();
    },
    onError: error => console.error('error', error),
    fetchPolicy: 'no-cache',
  });

  const handleGmailResponse = ({ profileObj: { email }, tokenId }) => {
    loginWithGoogle({
      variables: {
        email,
        idToken: tokenId,
      },
    });
  };

  const handleFacebookLogin = args => {
    const { profile, token, provider } = args;
    console.log(token.accessToken);

    if (profile.email && token) {
      loginWithFacebook({
        variables: {
          email: profile.email,
          accessToken: token.accessToken,
        },
      });
    } else {
      console.log(`${provider} login invalid - email:${profile.email} token:${token}`);
      handleSocialLoginFailure(
        new Error(
          `${provider} login invalid - ${!profile.email ? 'email not returned by login' : ''} ${
            !token ? 'token not returned by login' : ''
          }`
        )
      );
    }
  };

  const handleSocialLoginFailure = err => {
    // console.error(err);
    setSocialNotification(`Error: ${err.message}`);
  };

  return (
    <SocialSection data-testid="social-authentication-component">
      {/* {socialNotification && <SectionTitle>{socialNotification}</SectionTitle>} */}
      <Social>
        {isFacebookLoggedIn && <FacebookLogout />}
        {!isFacebookLoggedIn && (
          <StyledSocialButton
            provider="facebook"
            appId={FACEBOOK_APP_ID}
            onLoginSuccess={handleFacebookLogin}
            onLoginFailure={handleSocialLoginFailure}
            scope="email, public_profile"
          >
            <img src={facebookLogo} alt="Login with Facebook" />
            Login with Facebook
          </StyledSocialButton>
        )}

        {/* <GoogleLogin
          clientId={GOOGLE_APP_ID}
          onSuccess={handleGmailResponse}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <GmailButton onClick={renderProps.onClick}>
              <img src={googleLogo} alt="continue with Google" />
              Google
            </GmailButton>
          )}
        /> */}

        {/* <StyledSocialButton
          provider="linkedin"
          appId={''}
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          <img src={linkedInLogo} alt="continue with LinkedIn" />
          LinkedIn
        </StyledSocialButton> */}
      </Social>
    </SocialSection>
  );
};

export default SocialAuthentication;
