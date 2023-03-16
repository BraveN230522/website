import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import HotelDisplay from '@components/HotelDisplay';

const HotelDisplayPage = () => {
  const router = useRouter();
  const { fromDate, toDate, id, query, qualifiers } = router.query;

  useEffect(() => {
    setTimeout(() => {
      window.lxt('track', 'hotels_interested_in', '{{Lexer - Hotels Viewed}}');
    }, 1000);
  }, []);

  return <HotelDisplay id={id} qualifiers={qualifiers} query={query} fromDate={fromDate} toDate={toDate} />;
};

export default HotelDisplayPage;
