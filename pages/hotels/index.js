import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Hotels from '@components/HotelsPage';

const HotelsPage = () => {
  const router = useRouter();
  const { fromDate, toDate } = router.query;

  useEffect(() => {
    setTimeout(() => {
      window.lxt('track', 'hotels_interested_in', '{{Lexer - Hotels Viewed}}');
    }, 1000);
  }, []);

  return <Hotels fromDate={fromDate} toDate={toDate} />;
};

export default HotelsPage;
