import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Event from '@components/EventPage';

const EventPage = () => {
  const router = useRouter();
  const { id, fromDate, toDate } = router.query;

  useEffect(() => {
    setTimeout(() => {
      window.lxt('track', 'cities_interested_in', '{{Lexer - Event City Viewed}}');
      window.lxt('track', 'countries_interested_in', '{{Lexer - Event CountriesViewed}}');
      window.lxt('track', 'leagues_interested_in', '{{Lexer - Event LeagueViewed}}');
      window.lxt('track', 'venues_interested_in', '{{Lexer - Event VenuesViewed}}');
      window.lxt('track', 'events_interested_in', '{{Lexer - Events Viewed}}');
    }, 1000);
  }, []);

  return <Event eventId={id} fromDate={fromDate} toDate={toDate} />;
};

export default EventPage;
