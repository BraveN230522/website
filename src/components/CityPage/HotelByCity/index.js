import React from 'react';
import { adopt } from 'react-adopt';

import Offers from '@components/common/Offers';
import HotelByCityQuery from './query';

const HotelData = adopt({
  data: ({ render, cityId }) => <HotelByCityQuery cityId={cityId}>{render}</HotelByCityQuery>,
});

const HotelByCity = ({ className, title, hideOnMobile, hideMoreOnMobile, cityId }) => {
  return (
    <HotelData cityId={cityId}>
      {({ data }) => {
        const hotels =
          data &&
          data.length > 0 &&
          data.map(hotel => {
            return {
              hotelID: hotel.hotelID,
              fromPrice: `${hotel?.fromPrice?.amount || ''} ${hotel?.fromPrice?.currencyId || ''}`,
              hotelName: hotel?.hotelName,
              venueAddress: hotel?.bestEventDescription,
              hotelImage: hotel?.hotelImage,
              promoBanner: hotel?.promoBanner,
            };
          });
        return (
          <Offers
            title={title}
            data={hotels}
            className={className}
            hideOnMobile={hideOnMobile}
            hideMoreOnMobile={hideMoreOnMobile}
            hidePrice
          />
        );
      }}
    </HotelData>
  );
};

export default HotelByCity;
