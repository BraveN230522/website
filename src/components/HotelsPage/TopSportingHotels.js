import React from 'react';
import { adopt } from 'react-adopt';
import TopSportingHotelsQuery from './queries';
import { HotelSection } from './styles';

const Data = adopt({
  data: ({ render }) => <TopSportingHotelsQuery>{render}</TopSportingHotelsQuery>,
});

const TopSportingHotels = ({ title }) => {
  return (
    <Data>
      {({ data }) => {
        const hotels =
          data &&
          data.map(hotel => {
            return {
              hotelID: hotel.hotelID,
              fromPrice: `${hotel.fromPrice.amount || ''} ${hotel.fromPrice.currencyId || ''}`,
              hotelName: hotel.hotelName,
              venueAddress: hotel.bestEventDescription,
              hotelImage: hotel.hotelImage,
              promoBanner: hotel.promoBanner,
            };
          });
        return <HotelSection title={title} data={hotels} />;
      }}
    </Data>
  );
};

export default TopSportingHotels;
