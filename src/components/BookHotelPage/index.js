import React, { useState } from 'react';

import Subscribe from '@components/common/Subscribe';
import SearchHotel from '@components/common/SearchHotel';
import { adopt } from 'react-adopt';
import { BIG_EVENTS, CLOSE_TO_GAME } from '@components/common/HotelsSuggestions/hotel-query';
import { CityQuery, CityDetailsQuery } from '@components/CityPage/queries';
import setupData from '@components/CityPage/data';
import BookHotelSection from '@components/common/BookHotel';
import { HotelsSearchQuery } from './queries';

import {
  HeroWithSpacing,
  HotelSection,
  SubTitle,
  LoadingContent,
  HotelHeader,
  HotelFeaturedTickets,
  HotelsSuggestionSection,
} from './styles';

import { mockHotel } from './mocks';

const defaultDate = new Date().toISOString();
const filterCategories = {
  'Type of Place': item => {
    return item.selectedVariant;
  },
  'Up to $150': item => {
    return item.fromPrice.amount > 150;
  },
  Facilities: item => {
    return Object.keys(item.facilities).some(key => item.facilities[key] && item.facilities[key].length);
  },
  Amenities: item => {
    return item.amenities?.length;
  },
};
const filterRooms = {
  Beds: (item, qtd) => {
    return item.variants?.filter(({ type }) => type === 'Beds').length === qtd;
  },
  Bedrooms: (item, qtd) => {
    return item.variants?.filter(({ type }) => type === 'ROOM').length === qtd;
  },
  Bathrooms: (item, qtd) => {
    return item.variants?.filter(({ type }) => type === 'Bathrooms').length === qtd;
  },
};

const Data = adopt({
  hotelsData: ({ render, from, to, query, qualifiers }) => (
    <HotelsSearchQuery query={query} from={from} to={to} qualifiers={qualifiers}>
      {render}
    </HotelsSearchQuery>
  ),
});
const CityData = adopt({
  cityData: ({ render, query, cityId }) => <CityQuery cityId={cityId}>{render}</CityQuery>,
  cityDetails: ({ render, query, from, cityId }) => (
    <CityDetailsQuery cityId={cityId} fromDate={from}>
      {render}
    </CityDetailsQuery>
  ),
});

const formatHotelOffers = (data, { fromDate, query, toDate, qualifiers }) => {
  return data?.map(({ id, name, hotelID, url, price, venueDetails: { address, facilities }, variants }) => ({
    hotelName: name,
    id,
    link: `/hotels/${hotelID}?fromDate=${fromDate}&toDate=${toDate}&query=${query}&qualifiers=${qualifiers}`,
    hotelImage: url,
    hotelID,
    venueAddress: `${address.address1} ${address.city} ${address.state}`,
    facilities,
    variants,
    fromPrice: price?.amount || 'N/A',
  }));
};

const BookHotels = ({ fromDate, query = '22', hotelSearchCityId, toDate, qualifiers = '1A0C' }) => {
  const [cityId, setCityId] = useState(query);

  return (
    <Data
      from={fromDate?.trim() || defaultDate}
      to={toDate?.trim() || defaultDate}
      query={hotelSearchCityId}
      qualifiers={qualifiers}
    >
      {({ hotelsData, cityData, cityDetails }) => {
        return (
          <CityData cityId={cityId}>
            {({ cityData, cityDetails }) => {
              const cityEvents = cityData.events;
              const { events, eventsByVenue, pathFor } = setupData({
                data: {
                  ...cityData,
                  ...cityDetails,
                },
                filterByCategory: 'ALL',
                filterByToDate: toDate,
              });
              // filter events to match data range
              if (cityEvents) cityEvents.filter(event => event.dateTime > fromDate && event.dateTime < toDate);
              console.log('hotelsData', hotelsData);
              return (
                <>
                  <HotelHeader light carouselItems={[mockHotel]} hasUser>
                    {activeItem => (
                      <HeroWithSpacing direction="center" title={activeItem.title}>
                        <SubTitle>{activeItem.description}</SubTitle>
                        <SearchHotel fromDate={fromDate} toDate={toDate} setParentCityId={setCityId} />
                      </HeroWithSpacing>
                    )}
                  </HotelHeader>

                  {hotelsData?.searchProducts?.loading ? (
                    <LoadingContent>Loading hotels</LoadingContent>
                  ) : (
                    <HotelSection
                      data={formatHotelOffers(hotelsData?.searchProducts, {
                        fromDate,
                        query,
                        toDate,
                        qualifiers,
                        cityId,
                      })}
                      filterCategories={filterCategories}
                      filterRooms={filterRooms}
                      hasFilter={false}
                      hasGrid
                    />
                  )}

                  <HotelsSuggestionSection type={BIG_EVENTS} />

                  <HotelsSuggestionSection type={CLOSE_TO_GAME} />

                  {cityData && cityData.city && cityData.city.cityName && (
                    <HotelFeaturedTickets
                      hasGrid
                      title={`Events happening during your time in ${cityData.city.cityName}`}
                      events={cityEvents.slice(0, 4)}
                      pathFor={pathFor}
                      eventsByVenue={eventsByVenue}
                      currentCategory="ALL"
                    />
                  )}

                  <Subscribe />
                </>
              );
            }}
          </CityData>
        );
      }}
    </Data>
  );
};

export default BookHotels;
