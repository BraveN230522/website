import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import BookHotels from '@components/BookHotelPage';

const BookHotelsPage = () => {
  const router = useRouter();
  const { fromDate, toDate, qualifiers, query, hotelSearchCityId } = router.query;

  useEffect(() => {
    setTimeout(() => {
      window.lxt('track', 'hotels_interested_in', '{{Lexer - Hotels Viewed}}');
    }, 1000);
  }, []);

  return (
    <BookHotels
      qualifiers={qualifiers}
      query={query}
      hotelSearchCityId={hotelSearchCityId}
      fromDate={fromDate}
      toDate={toDate}
    />
  );
};

export default BookHotelsPage;
