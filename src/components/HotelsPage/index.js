import React from 'react';

import { useDateQuery } from '@utils/hooks/useSearchQuery';
import SearchHotel from '@components/common/SearchHotel';
import Subscribe from '@components/common/Subscribe';
import { HeroWithSpacing, SubTitle, HotelHeader } from './styles';

import { mockHotel } from './mocks';
import ContentCarousel from '../common/ContentCarousel';
import TopSportingHotels from './TopSportingHotels';
import PopularSportingCities from './PopularSportingCities';

const Hotels = ({ fromDate, toDate }) => {
  const handleDateQuery = useDateQuery({
    fromDate,
    toDate,
    pageName: 'hotels/search',
  });

  return (
    <>
      <HotelHeader light carouselItems={[mockHotel]} hasUser>
        {activeItem => (
          <HeroWithSpacing direction="center" title={activeItem.title}>
            <SubTitle>{activeItem.description}</SubTitle>
            <SearchHotel fromDate={fromDate} handleDateQuery={handleDateQuery} toDate={toDate} />
          </HeroWithSpacing>
        )}
      </HotelHeader>

      <TopSportingHotels title="Best Hotels for Big Sporting Events" />

      <PopularSportingCities title="Hotels for the Most Popular Sports Cities" />

      {/* swiam-123 <HotelSection title="Hotels Close to the Game" data={mockOffers} /> */}

      <ContentCarousel interestId={0} interestType="homepage" />

      {/* swiam-125 <HotelSection title="Top Hotel Deals near Major Sports Venues" data={mockOffers} /> */}

      <Subscribe />
    </>
  );
};

export default Hotels;
