import React from 'react';
import { adopt } from 'react-adopt';

import Offers from '@components/common/Offers';
import { HotelQuery } from './hotel-query';
import { HotelSection } from '../../HotelsPage/styles';

const HotelData = adopt({
  data: ({ render, cityId }) => <HotelQuery cityId={cityId}>{render}</HotelQuery>,
});

// TODO integrate this into api when client fixes /popularHotels endpoint
const BookHotelSection = ({ className, title, hideOnMobile, hideMoreOnMobile, cityId }) => {
  if (!cityId) return null;
  return (
    <HotelData cityId={cityId}>
      {({ data }) => {
        let hidePrice = false;
        const hotels =
          data &&
          data.length &&
          data.map(hotel => {
            if (!hotel.fromPrice) hidePrice = true;
            return {
              hotelID: hotel.hotelID,
              fromPrice: `${hotel.fromPrice?.amount || ''} ${hotel.fromPrice?.currencyId || ''}`,
              hotelName: hotel.hotelName,
              venueAddress: hotel.bestEventDescription,
              hotelImage: hotel.hotelImage,
              promoBanner: hotel.promoBanner,
            };
          });
        return (
          <Offers
            title={title}
            data={hotels}
            className={className}
            hideOnMobile={hideOnMobile}
            hideMoreOnMobile={hideMoreOnMobile}
            hidePrice={hidePrice}
          />
        );
      }}
    </HotelData>
  );
};

export default BookHotelSection;
