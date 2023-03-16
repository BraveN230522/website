import React, { useState } from 'react';
import PropTypes from 'prop-types';
import console from '@utils/console';
import { FACEBOOK_APP_ID, GOOGLE_APP_ID } from './constants';
import { StyledSocialButton } from './style';

export class FacebookLogout extends React.Component {
  static propTypes = {
    callback: PropTypes.func,
  };

  click = () => FB.logout();

  render() {
    return (
      <StyledSocialButton onClick={this.click}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA0LjIxNDg0VjE5Ljc4MTJDMjEgMjAuMzE2NCAyMC41NTQgMjAuNzQ2MSAyMC4wMDc2IDIwLjc0NjFIMTUuNDE5MlYxMy45NzI3SDE3Ljc1NzZMMTguMTA3MSAxMS4zMzJIMTUuNDE1MlY5LjY0NDUzQzE1LjQxNTIgOC44Nzg5MSAxNS42MzIxIDguMzU5MzggMTYuNzYxMiA4LjM1OTM4SDE4LjE5OTZWNS45OTYwOUMxNy45NTA0IDUuOTY0ODQgMTcuMDk4NyA1Ljg5MDYyIDE2LjEwMjIgNS44OTA2MkMxNC4wMjkgNS44OTA2MiAxMi42MDY3IDcuMTIxMDkgMTIuNjA2NyA5LjM4MjgxVjExLjMzMkgxMC4yNjAzVjEzLjk3MjdIMTIuNjA2N1YyMC43NUgzLjk5MjQxQzMuNDQ1OTggMjAuNzUgMyAyMC4zMTY0IDMgMTkuNzg1MlY0LjIxNDg0QzMgMy42ODM1OSAzLjQ0NTk4IDMuMjUgMy45OTI0MSAzLjI1SDIwLjAwMzZDMjAuNTU0IDMuMjUgMjEgMy42ODM1OSAyMSA0LjIxNDg0WiIgZmlsbD0iIzI4OTFGRiIvPgogICAgPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPgogICAgICAgIDxwYXRoIGQ9Ik0yMSA0LjIxNDg0VjE5Ljc4MTJDMjEgMjAuMzE2NCAyMC41NTQgMjAuNzQ2MSAyMC4wMDc2IDIwLjc0NjFIMTUuNDE5MlYxMy45NzI3SDE3Ljc1NzZMMTguMTA3MSAxMS4zMzJIMTUuNDE1MlY5LjY0NDUzQzE1LjQxNTIgOC44Nzg5MSAxNS42MzIxIDguMzU5MzggMTYuNzYxMiA4LjM1OTM4SDE4LjE5OTZWNS45OTYwOUMxNy45NTA0IDUuOTY0ODQgMTcuMDk4NyA1Ljg5MDYyIDE2LjEwMjIgNS44OTA2MkMxNC4wMjkgNS44OTA2MiAxMi42MDY3IDcuMTIxMDkgMTIuNjA2NyA5LjM4MjgxVjExLjMzMkgxMC4yNjAzVjEzLjk3MjdIMTIuNjA2N1YyMC43NUgzLjk5MjQxQzMuNDQ1OTggMjAuNzUgMyAyMC4zMTY0IDMgMTkuNzg1MlY0LjIxNDg0QzMgMy42ODM1OSAzLjQ0NTk4IDMuMjUgMy45OTI0MSAzLjI1SDIwLjAwMzZDMjAuNTU0IDMuMjUgMjEgMy42ODM1OSAyMSA0LjIxNDg0WiIgZmlsbD0id2hpdGUiLz4KICAgIDwvbWFzaz4KICAgIDxnIG1hc2s9InVybCgjbWFzazApIj4KICAgIDwvZz4KPC9zdmc+Cg=="
          alt="Logout from Facebook"
        />
        Logout
      </StyledSocialButton>
    );
  }
}

const Facebook = {
  initialised: false,
  init: () => {
    if (!window.FB) {
      // Load the SDK asynchronously
      (function(d, s, id) {
        let js;
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
    const [isFacebookLoggedIn, setFacebookLoggedIn] = useState();
    const facebookSDK = () =>
      new Promise((resolve, reject) => {
        if (window.FB) {
          window.FB.Event.subscribe('auth.statusChange', function(response) {
            console.log('FB STATUS CHANGE', response);
            if (response.status === 'connected') setFacebookLoggedIn(true);
            else setFacebookLoggedIn(false);
          });
          window.FB.init({ version: `v14.0`, appId: FACEBOOK_APP_ID, cookie: true, xfbml: true });
          resolve();
        } else setTimeout(facebookSDK, 200);
      });
    const initFacebook = async () => {
      await facebookSDK();
    };
    initFacebook();
    return [isFacebookLoggedIn, setFacebookLoggedIn];
  },
};

export { Facebook };
