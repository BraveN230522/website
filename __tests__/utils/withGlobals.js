/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { globalStyles } from '@utils/styles/global';
import theme from '@utils/styles/theme';
import { UserReducerProvider } from '@utils/userContext';

import { AuthenticationStateProvider } from '@components/Authentication/useAuthentication';

const withGlobals = ({ children }) => (
  <ThemeProvider theme={theme}>
    {globalStyles}
    <AuthenticationStateProvider>
      <UserReducerProvider>{children}</UserReducerProvider>
    </AuthenticationStateProvider>
  </ThemeProvider>
);

export default withGlobals;
