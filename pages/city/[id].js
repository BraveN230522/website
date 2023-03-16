import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import City from '@components/CityPage';

const CityPage = () => {
  const router = useRouter();
  const { id, fromDate, toDate } = router.query;

  useEffect(() => {
    setTimeout(() => {
      window.lxt('track', 'cities_interested_in', '{{Lexer - Cities Viewed}}');
    }, 1000);
  }, []);

  return <City cityId={id} fromDate={fromDate} toDate={toDate} />;
};

export default CityPage;
