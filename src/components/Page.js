import React from 'react';
import Head from 'next/head';

import { UserReducerProvider } from '@utils/userContext';
import { CartProvider } from '@utils/cartContext';

import { useAuthentication } from '@components/Authentication/useAuthentication';
import AuthenticationWidget from '@components/Authentication/AuthenticationWidget';
import Modal from '@components/common/Modal';

import { useRouter } from 'next/router';
import { getPageMetaForRoute } from '@utils/routes';
import Footer from './Layout/footer';

const Page = ({ title, description, children }) => {
  const { shouldRequireAuthenticatedAccess, verifyAuthenticationControl } = useAuthentication();

  const router = useRouter();
  const pageMeta = getPageMetaForRoute(router);

  return (
    <UserReducerProvider>
      <CartProvider>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <meta name="description" content={pageMeta ? pageMeta.description : description} />
          <meta name="facebook-domain-verification" content="khzvesqfvsftqebvwhczwor912fixu" />
          <title>{pageMeta ? pageMeta.title : title}</title>
        </Head>

        {children}

        <Footer />

        <Modal isInitiallyOpened={shouldRequireAuthenticatedAccess} onClosing={verifyAuthenticationControl}>
          {onClose => <AuthenticationWidget closeWidget={onClose} />}
        </Modal>
      </CartProvider>
    </UserReducerProvider>
  );
};

Page.defaultProps = {
  title: 'Sports Tickets & Fan Travel Tips | Sports Where I Am',
  description:
    'Sports Where I Am is a sport travel service offering fully guaranteed tickets & fan travel tips across  65,000 sporting events across 240+ cities world-wide',
};

export default Page;
