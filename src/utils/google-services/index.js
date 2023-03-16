import { Router } from 'next/router';
import { useEffect } from 'react';
import { GTMPageView } from './gtm';
import * as gtag from './ga';

const GoogleServicesProvider = ({ children }) => {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
      GTMPageView(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return children;
};

export default GoogleServicesProvider;
