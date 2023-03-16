import React from 'react';
import { useRouter } from 'next/router';

import Event from '@components/EventPage';

const EventPage = () => {
  const router = useRouter();
  const { id, fromDate, toDate } = router.query;

  return <Event eventId={id} fromDate={fromDate} toDate={toDate} />;
};

export default EventPage;
