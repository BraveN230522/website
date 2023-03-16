import React from 'react';
import { useRouter } from 'next/router';

import VenueTips from '../../../src/components/VenuePage/VenueTipsPage';

const VenueTipsPage = () => {
  const router = useRouter();
  const { id, fromDate, toDate } = router.query;

  return <VenueTips venueId={id} fromDate={fromDate} toDate={toDate} />;
};

export default VenueTipsPage;
