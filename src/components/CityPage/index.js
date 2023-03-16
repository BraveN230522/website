import React, { useState, useEffect } from 'react';
import { adopt } from 'react-adopt';
import Subscribe from '@components/common/Subscribe';
import LocalAdvice from '@components/common/LocalAdvice';
import { useDateQuery } from '@utils/hooks/useSearchQuery';

import OtherEvents from '@components/common/OtherEvents/';
import { NearbyEventsByCityQuery } from '@components/common/OtherEvents/queries';

import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import { sendEvent } from '@utils/google-services/gtm';
import { CustomHeader, HeroWithSpacing, CityVenues, SubTitle, CustomFeaturedTickets, CityCalendar } from './styles';
import { mockLocal, mockAdvice } from './mocks';

import { CityQuery } from './queries';

import setupData from './data';
import ContentCarousel from '../common/ContentCarousel';
import TruncateText from '../common/TruncateText';
import LeagueTicketsByCity from './LeagueTicketsByCity';
import HotelByCity from './HotelByCity';

const Data = adopt({
  cityData: ({ render, cityId }) => <CityQuery cityId={cityId}>{render}</CityQuery>,
  eventsNearCity: ({ render, cityId }) => (
    <NearbyEventsByCityQuery cityId={typeof cityId === 'string' ? parseInt(cityId) : cityId}>
      {render}
    </NearbyEventsByCityQuery>
  ),
});

const City = ({ cityId, fromDate, toDate }) => {
  const handleDateQuery = useDateQuery({
    fromDate,
    id: cityId,
    toDate,
    pageName: 'city',
  });

  const [filterByCategory, setCategory] = useState('ALL');

  useEffect(() => {
    document.head.insertAdjacentHTML('beforeend', `<style>body{overflow-x:hidden}</style>`);
    return () => {
      document.head.insertAdjacentHTML('beforeend', ``);
    };
  }, []);

  const filterVenuesWithImage = cityData => {
    const venues = cityData?.venues;
    const cityName = cityData?.city?.cityName;
    return venues
      .filter(venue => venue && venue.venueImage != null)
      .map(venue => {
        return (
          venue && {
            id: venue.venueId,
            img: venue.venueImage,
            name: venue.venueName,
            navToPath: formatSlugSegments(LINK_ABSOLUTE, cityName, venue?.venueName),
          }
        );
      });
  };

  return (
    <Data cityId={cityId} fromDate={fromDate}>
      {({ cityData, eventsNearCity }) => {
        // console.log('CITY DATA', cityData);
        useEffect(() => {
          process.browser &&
            sendEvent('cityViewed', {
              detail: {
                name: cityData?.city?.cityName,
                id: cityData?.city?.cityId,
              },
            });
        });

        const parsedVenues =
          cityData &&
          cityData?.venues &&
          cityData.venues.length &&
          cityData.venues.length > 0 &&
          filterVenuesWithImage(cityData);
        const intCityId = parseInt(cityId, 10);
        const { events, eventsByVenue, categories, pathFor, headerData } = setupData({
          data: {
            ...cityData,
          },
          filterByCategory,
          filterByFromDate: fromDate,
          filterByToDate: toDate,
        });
        return (
          <>
            <CustomHeader light carouselItems={[headerData]}>
              {activeItem => (
                <HeroWithSpacing direction="center" title={activeItem.title}>
                  <CityCalendar
                    onChangeDateCallback={handleDateQuery}
                    lightMode
                    initialDates={{
                      startDate: fromDate || null,
                      endDate: toDate || null,
                    }}
                  />
                  <SubTitle>
                    <TruncateText>
                      {cityData?.city?.cityOverview === ''
                        ? `Available Sports Tickets and information for ${cityData?.city?.cityName}`
                        : activeItem.description}
                    </TruncateText>
                  </SubTitle>
                </HeroWithSpacing>
              )}
            </CustomHeader>
            <CustomFeaturedTickets
              title={`Get tickets to upcoming sporting events in ${cityData?.city?.cityName}`}
              events={events}
              eventsByVenue={eventsByVenue}
              categories={categories}
              currentCategory={filterByCategory}
              setCategory={setCategory}
              hasFilter
              fromDate={fromDate}
              toDate={toDate}
              hasGrid
              hasView
              pathFor={pathFor}
            />
            <LeagueTicketsByCity title="Book tickets by Leagues" cityId={intCityId} />
            {parsedVenues && <CityVenues title={`${cityData?.city?.cityName} Venues`} data={parsedVenues} />}
            <OtherEvents
              data={eventsNearCity.nearbyCities}
              cityName={cityData?.city?.cityName}
              title={`Other events near ${cityData?.city?.cityName}`}
            />
            {/* Adding this section here at client's request (removed from Team Page - 10/09/2020 */}
            <HotelByCity title="Popular hotels" cityId={intCityId} />
            <LocalAdvice
              tips={mockLocal.tips}
              local={cityData?.city?.cityName}
              adviceImage={mockLocal.adviceImage}
              cardData={mockAdvice}
              interestId={intCityId}
              interestType="city"
            />
            {cityId && <ContentCarousel interestId={intCityId} interestType="city" />}
            <Subscribe />
          </>
        );
      }}
    </Data>
  );
};

export default City;
