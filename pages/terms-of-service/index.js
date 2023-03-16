import React, { useEffect } from 'react';
import TermsOfService from '@components/TermsOfServicePage';

const TermsOfServicePage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.lxt('track', 'searched_for', '{{Lexer - Terms Searched}}');
    }, 1000);
  }, []);

  return <TermsOfService />;
};

export default TermsOfServicePage;
