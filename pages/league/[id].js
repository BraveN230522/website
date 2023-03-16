import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import League from '@components/LeaguePage';

const LeaguePage = () => {
  const router = useRouter();
  const { id, fromDate, toDate, cityId, cityName } = router.query;

  useEffect(() => {
    setTimeout(() => {
      window.lxt('track', 'leagues_interested_in', '{{Lexer - Leagues Viewed}}');
    }, 1000);
  }, []);

  return <League leagueId={id} cityId={cityId} cityName={cityName} fromDate={fromDate} toDate={toDate} />;
};

export default LeaguePage;
