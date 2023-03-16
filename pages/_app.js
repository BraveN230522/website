/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { ErrorInfo } from 'react';
import NextApp, { Container, DefaultAppIProps, NextAppContext } from 'next/app';
import Error from 'next/error';
import { IBugsnagNextAppContext, withBugsnagNextApp, IBugsnagProps } from 'next-with-bugsnag';
import compose from 'recompose/compose';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from 'emotion-theming';
import { globalStyles } from '@utils/styles/global';
import theme from '@utils/styles/theme';
import Page from '@components/Page';
import { AuthenticationStateProvider } from '@components/Authentication/useAuthentication';
import '@brainhubeu/react-carousel/lib/style.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-phone-input-2/lib/style.css';
import StripeProvider from '@utils/providers/StripeProvider';
import GoogleServicesProvider from '@utils/google-services';
import { sendEvent } from '@utils/google-services/gtm';
import { CreateNewCart } from '@components/common/CreateNewCart';
import { withApollo } from '../src/lib/apollo';

const cache = createCache({});

class App extends NextApp {
  static async getInitialProps(props) {
    const { Component, ctx } = props;

    let pageProps = {};
    let errorCode;

    if (Component.getInitialProps) {
      try {
        pageProps = await Component.getInitialProps(ctx);
      } catch (error) {
        ctx.bugsnag.notify(error, {
          user,
        });
        errorCode = 500;
      }
    }

    return {
      pageProps,
      errorCode,
    };
  }

  componentDidCatch(error, info) {
    this.props.bugsnag.notify(error, {});

    super.componentDidCatch(error, info);
  }

  componentWillUnmount() {
    sessionStorage.setItem('cartSession', JSON.stringify({ cart: 0 }));
  }

  componentDidMount() {
    setTimeout(() => {
      window.lxt('track', 'pages_viewed', '{{Lexer - Pages Viewed}}');
    }, 1000);
  }

  render() {
    const { Component, pageProps, errorCode } = this.props;
    process.browser &&
      !document.referrer.indexOf(document.location.origin) &&
      sendEvent('referrerURL', {
        detail: {
          url: document.referrer,
        },
      });
    if (errorCode) {
      return <Error statusCode={errorCode} />;
    }
    return (
      <GoogleServicesProvider>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            {globalStyles}

            <StripeProvider>
              <AuthenticationStateProvider>
                <Page>
                  <CreateNewCart />
                  <Component {...pageProps} />
                </Page>
              </AuthenticationStateProvider>
            </StripeProvider>
          </ThemeProvider>
        </CacheProvider>
      </GoogleServicesProvider>
    );
  }
}

// export default withApollo({ ssr: true })(App);
export default compose(
  withBugsnagNextApp({
    apiKey: 'f33dfac01b0fb3217eed5ba81001bd2e',
    appVersion: '1.0.0',
    releaseStage: 'staging',
  }),
  withApollo({ ssr: true })
)(App);
