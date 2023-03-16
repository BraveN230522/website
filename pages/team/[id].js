import React from 'react';
import { useRouter } from 'next/router';

import Team from '@components/TeamPage';

const TeamPage = () => {
  const router = useRouter();
  const { id, fromDate, toDate, cityName, cityId } = router.query;

  return <Team teamName={id} cityName={cityName} cityId={cityId} fromDate={fromDate} toDate={toDate} />;
};

export default TeamPage;
