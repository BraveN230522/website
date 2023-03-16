import React from 'react';
import { adopt } from 'react-adopt';

import Offers from '@components/common/Offers';
import { HotelQuery } from './hotel-query';

const HotelData = adopt({
  data: ({ render }) => <HotelQuery>{render}</HotelQuery>,
});

const BookHotelSection = ({ className, title, hideOnMobile, hideMoreOnMobile, showNearbyVenue }) => {
  return (
    <HotelData>
      {({ data }) => {
        const hotels =
          data &&
          data.length > 0 &&
          data.map(hotel => {
            return {
              hotelID: hotel.hotelID,
              fromPrice: `${hotel.fromPrice.amount || ''} ${hotel.fromPrice.currencyId || ''}`,
              hotelName: hotel.hotelName,
              venueAddress: hotel.bestEventDescription,
              hotelImage: hotel.hotelImage,
              promoBanner: hotel.promoBanner,
              nearbyVenueName: showNearbyVenue ? `Near ${hotel.nearbyVenue.venueName}` : '',
            };
          });
        return (
          <Offers
            title={title}
            data={hotels}
            className={className}
            hideOnMobile={hideOnMobile}
            hideMoreOnMobile={hideMoreOnMobile}
          />
        );
      }}
    </HotelData>
  );
};

export default BookHotelSection;
