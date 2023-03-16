import React from 'react';
import { useRouter } from 'next/router';
import PageRouter from '../router';

const Page = () => {
  const router = useRouter();
  const { venueSlug, fromDate, toDate } = router.query;
  return <PageRouter slug={venueSlug} fromDate={fromDate} toDate={toDate} />;
};

export default Page;
