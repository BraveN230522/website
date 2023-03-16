import { GA_TRACKING_ID } from '@utils/google-services/ga';

export const GTM_ID = process.env.GTM_ID;

export const setupDataLayer = () => `
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());

  gtag('config', '${GA_TRACKING_ID}', {
    page_path: window.location.pathname,
  });
`;

export const GTMPageView = url => {
  const pageEvent = {
    event: 'pageview',
    page: url,
  };

  window && window.dataLayer && window.dataLayer.push(pageEvent);

  return pageEvent;
};

export const sendEvent = (eventName, eventData) => {
  if (!window.dataLayer || !window.dataLayer.push) throw new Error('Data layer was not loaded yet');

  window.dataLayer.push({
    ...eventData,
    event: eventName,
  });
};
