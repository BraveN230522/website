import React from 'react';
import { useRouter } from 'next/router';

import Venue from '@components/VenuePage';

const VenuePage = () => {
  const router = useRouter();
  const { id, fromDate, toDate } = router.query;

  return <Venue venueId={id} fromDate={fromDate} toDate={toDate} />;
};

export default VenuePage;
