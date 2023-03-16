import React from 'react';
import { useRouter } from 'next/router';

import ThankYou from '@components/ThankYouPage';

const ThankYouPage = () => {
  const router = useRouter();
  const { id, email, fullName, eventId, eventIdItems, cartData } = router.query;

  return <ThankYou bookingId={id} email={email} fullName={fullName} eventId={eventId} />;
};

export default ThankYouPage;
