import React from 'react';
import { useRouter } from 'next/router';

const ExperiencePage = () => {
  const router = useRouter();
  const { id, fromDate, toDate } = router.query;
  console.log(id);
  console.log(router.query);

  return (
    <div>
      Experience {id}, dates: {fromDate} to {toDate || 'onwards'}
    </div>
  );
};

export default ExperiencePage;
