import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@utils/google-services/ga';
import { GTM_ID, setupDataLayer } from '@utils/google-services/gtm';
import { initialize } from '@utils/lexer';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    return { ...page };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <>
          {/* Google Tag Manager */}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          {/* End Google Tag Manager */}
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script async src="https://tag.lexer.io/lxt.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: setupDataLayer(),
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: initialize(),
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: process.browser && sendEvent('pageViewed', document.location.pathname),
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,130299,142753);`,
            }}
          />
        </>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
