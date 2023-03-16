import React from 'react';
import { useRouter } from 'next/router';
import PageRouter from './router';

const Page = () => {
  const router = useRouter();
  const { citySlug, fromDate, toDate } = router.query;
  return <PageRouter slug={citySlug} fromDate={fromDate} toDate={toDate} />;
};

export default Page;
