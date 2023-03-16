import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { adopt } from 'react-adopt';
import moment from 'moment';
import { useDateQuery } from '@utils/hooks/useSearchQuery';
import Router, { useRouter } from 'next/router';

import { NearbyEventsByCityQuery, NearbyEventsByHotelQuery } from '@components/common/OtherEvents/queries';
import { CityQuery } from '@components/CityPage/queries';

import OtherEvents from '@components/common/OtherEvents';
import Subscribe from '@components/common/Subscribe';
import { sendEvent } from '@utils/google-services/gtm';
import console from '@utils/console';
import { GET_HOTEL_PRODUCT_BY_ID } from '@graphql/queries/hotel';
import { SEARCH_PRODUCTS } from '@graphql/queries/search';

import DisplayHeader from './DisplayHeader';
import DisplayMap from './DisplayMap';
import DisplayCarousel from './DisplayCarousel';
import Rooms from './Rooms';
import { HotelDisplayQuery, HotelProductQuery, SingleHotelQuery } from './queries';

import {
  HotelHeader,
  HotelSection,
  HotelSplitContainer,
  HotelFeaturesCustom,
  TopGuestsCustom,
  HotelDisplayChooseRoom,
  HotelChooseRoom,
} from './styles';

import { mockOffers, mockTopGuests, mockEventsMap } from './mocks';
import { useRef } from 'react';

const defaultDate = new Date().toISOString();

const Data = adopt({
  cityData: ({ render, query }) => <CityQuery cityId={query}>{render}</CityQuery>,
  eventsNearHotel: ({ render, hotelID }) => (
    <NearbyEventsByHotelQuery hotelId={`${hotelID}`}>{render}</NearbyEventsByHotelQuery>
  ),
  hotelData: ({ render, from, to, query, qualifiers, hotelID }) => (
    <HotelDisplayQuery query={`${query}`} from={from} to={to} qualifiers={qualifiers} hotelID={`${hotelID}`}>
      {render}
    </HotelDisplayQuery>
  ),
  singleHotelData: ({ render, hotelID, qualifiers, from, to }) => (
    <SingleHotelQuery hotelId={hotelID} qualifiers={qualifiers} startDate={from} endDate={to}>
      {render}
    </SingleHotelQuery>
  ),
  hotelProductData: ({ render, hotelID, qualifiers, from, to }) => (
    <HotelProductQuery
      hotelId={hotelID}
      qualifiers={qualifiers}
      startDate={moment(from).format('YYYY-MM-DD')}
      endDate={moment(to).format('YYYY-MM-DD')}
    >
      {render}
    </HotelProductQuery>
  ),
});

const selectAdultOptions = Array.from({ length: 6 }, (v, index) => ({
  label: index,
  value: `${index}A`,
}));

const selectChildrenOptions = Array.from({ length: 4 }, (v, index) => ({
  label: index,
  value: `${index}C`,
}));

const selectChildAgeOptions = Array.from({ length: 17 }, (v, index) => ({
  label: index + 1,
  value: index + 1,
}));

const HotelDisplay = ({ fromDate, toDate, qualifiers = '1A0C', query = '', id, hotelSearchCityId }) => {
  const router = useRouter();
  const urlQueryParam = router.query;
  const searchObj = {
    hotelId: urlQueryParam.id,
    qualifiers: urlQueryParam.qualifiers,
    startDate: urlQueryParam.fromDate,
    endDate: urlQueryParam.toDate,
    query: urlQueryParam.query,
    hotelSearchCityId: urlQueryParam.hotelSearchCityId,
  };

  const [adult, setAdult] = useState(qualifiers.slice(0, 2));
  const [children, setChildren] = useState(qualifiers.slice(2, 4));
  const [childAges, setChildAges] = useState(qualifiers.slice(5));
  const [queryCityId, setQueryCityId] = useState(query || 22);
  const [enableHotelSearch, setEnableHotelSearch] = useState(true);
  // const [startDate, setStartDate] = useState(fromDate);
  // const [endDate, setEndDate] = useState(toDate);
  const [convertedPricesHolder, setConvertedPricesHolder] = useState();
  // console.log({ enableHotelSearch, id, qualifiers, startDate, endDate });
  useEffect(() => {
    setEnableHotelSearch(true);
  }, [fromDate]);

  const dateRef = useRef({
    startDate: fromDate,
    endDate: toDate,
  });

  // console.log('WIll call the GET_HOTEL_PRODUCT_BY_I with ID:');
  // console.log(id);
  const { loading, error, data } = useQuery(GET_HOTEL_PRODUCT_BY_ID, {
    variables: { hotelId: id, qualifiers, startDate: dateRef.current.startDate, endDate: dateRef.current.startDate },
  });

  const { loading: loadingSearch, error: errorSearch, data: dataSearch } = useQuery(SEARCH_PRODUCTS, {
    variables: {
      hotelID: searchObj.hotelId,
      from: searchObj.startDate,
      to: searchObj.endDate,
      qualifiers: searchObj.qualifiers,
      limit: 2,
      offset: '0',
      query: searchObj.query,
      vendor: 'hb',
    },
  });

  // const handleSearch = (shouldRefreshPage = true) => {
  //   // console.log('================================ Data from QUERY GET_HOTEL_PRODUCT_BY_ID:');
  //   // console.log(data);
  //   if (shouldRefreshPage) {
  //     if (data && data.rooms) {
  //       setConvertedPricesHolder(data.rooms);
  //       setEnableHotelSearch(false);
  //     }
  //   }
  // };

  const setDates = (startDateString, endDateString) => {
    dateRef.current = {
      startDate: startDateString,
      endDate: endDateString,
    };
    // setStartDate(startDateString);
    // setEndDate(endDateString);
  };

  const handleDateQuery = () => {};

  const handleSearch = () => {
    // to retain parameters from history.pushState, use Router.push with current params

    handleDateQuery();
    setTimeout(() => {
      const qualifiers = parseInt(children) === 0 ? `${adult}${children}` : `${adult}${children}-${childAges}`;
      const data = {
        pathname: `/hotels/${id}`,
        query: {
          fromDate: dateRef.current.startDate,
          toDate: dateRef.current.endDate,
          query: queryCityId,
          qualifiers,
          hotelSearchCityId,
        },
      };
      Router.push(data);
      setEnableHotelSearch(false);
    }, 300);
  };

  const handleFiltersChange = (newQualifiers, loadData = false) => {
    const params = document.location.search.substr(1).split('&');
    setEnableHotelSearch(false);
    params.forEach(param => {
      if (param.split('=')[0] === 'fromDate' && param.split('=')[1] !== '') setEnableHotelSearch(true);
    });
    if (loadData)
      Router.push({
        pathname: `/hotels/${id}`,
        query: {
          fromDate: dateRef.current.startDate,
          toDate: dateRef.current.endDate,
          query: queryCityId,
          qualifiers: newQualifiers,
          hotelSearchCityId,
        },
      });
    else
      history.pushState(
        {},
        '',
        `?fromDate=${dateRef.current.startDate}&toDate=${dateRef.current.endDate}&query=${query}&qualifiers=${newQualifiers}`
      );
  };

  const handleAdultChange = e => {
    const defaultAdult = '0A';
    const newValue = e.target.value || defaultAdult;

    setAdult(newValue);
    if (childAges !== '') handleFiltersChange(`${newValue + children}-${childAges}`);
    else handleFiltersChange(newValue + children);
  };

  const handleChildrenChange = e => {
    const defaultChildren = '0C';
    const newValue = e.target.value || defaultChildren;

    // ensure child ages reflects the change
    const childCount = parseInt(e.target.value);
    const ages = childAges === '' ? [] : childAges.split('-').slice(0, childCount);
    if (ages.length < childCount) {
      while (ages.length < childCount) ages.push('0');
    }
    setChildAges(ages.join('-'));

    setChildren(newValue);
    if (ages.length > 0) handleFiltersChange(`${adult + newValue}-${ages.join('-')}`);
    else handleFiltersChange(adult + newValue);
  };

  const handleChildAgeChange = e => {
    const element = e.target;
    const ages = childAges.split('-');
    const childIndex = element.getAttribute('data-index');
    ages[childIndex] = element.value;
    const agesNewValue = ages.join('-');
    setChildAges(agesNewValue);
    if (ages.length > 0) handleFiltersChange(`${adult + children}-${agesNewValue}`);
    else handleFiltersChange(adult + children);
  };

  return (
    <Data
      from={fromDate?.trim() || defaultDate}
      to={toDate?.trim() || defaultDate}
      hotelID={id}
      query={urlQueryParam.query || queryCityId}
      qualifiers={qualifiers}
    >
      {({
        cityData,
        eventsNearHotel,
        hotelData: { hotelDisplay },
        singleHotelData: { singleHotelData },
        hotelProductData: { hotelProductData },
      }) => {
        if (singleHotelData && singleHotelData?.nearestCityId !== query) setQueryCityId(singleHotelData?.nearestCityId);
        let hotelProduct = hotelProductData?.hotelProductById ? hotelProductData?.hotelProductById[0] : undefined;
        if (!hotelProduct) hotelProduct = { status: 'ERROR', message: 'Loading...', matches: 0 };

        if (hotelDisplay && hotelDisplay.loading) {
          return null;
          // return <p>Loading...</p>;
        }

        process.browser &&
          sendEvent('hotelViewed', {
            detail: {
              id,
              name: singleHotelData?.hotelName,
              address: singleHotelData?.address,
              nearestCityId: singleHotelData?.nearestCityId,
            },
          });

        const stadiumsMapData = {
          hotel: [
            {
              venue: {
                coOrdinates: singleHotelData?.geoCoordinates,
                venueId: singleHotelData?.hotelID,
                venueName: singleHotelData?.hotelName,
                venueAddress: singleHotelData?.address,
              },
            },
          ],
        };
        cityData?.venues?.forEach((venue, i) => {
          // do not include venues with invalid coordinates
          if (venue?.coOrdinates?.latitude === 0 || venue?.coOrdinates?.longitude === 0) {
            console.warn(
              `Invalid venue coordinates for ${venue.venueName} - ${venue.city.cityName}:${cityData.city.cityId} (${venue.venueId}): lat:${venue?.coOrdinates?.latitude} long:${venue?.coOrdinates?.longitude}`
            );
            return;
          }
          stadiumsMapData[venue.venueId] = [
            {
              headline: venue.venueName,
              // leagueid: event.league?.leagueName,
              // priceFrom: event.fromPrice?.amount,
              venue,
              venueid: venue.venueId,
            },
          ];
        });

        const hotelHead =
          hotelDisplay && hotelDisplay.matches !== 0
            ? {
                title: hotelDisplay.name,
                description: hotelDisplay.venueDetails.address.address1,
                resume: hotelDisplay.description,
                // header image always comes from hotelData
                imageURL: singleHotelData?.headlineImage,
                mobileImageURL: singleHotelData?.headlineImage,
                bed: hotelDisplay.price.annotation,
                price: hotelDisplay.price.amount,
                images: hotelDisplay.venueDetails.images,
                ticks: hotelDisplay.venueDetails.ticks,
                amenities: singleHotelData?.amenities,
                rating: singleHotelData?.rating,
              }
            : // generic version:
              {
                title: singleHotelData?.hotelName || '',
                description: singleHotelData?.address,
                resume: singleHotelData?.overview,
                imageURL: singleHotelData?.headlineImage,
                mobileImageURL: singleHotelData?.headlineImage,
                variants: [],
                images: singleHotelData?.images?.map(url => {
                  return { url, caption: '' };
                }),
                ticks: [],
                amenities: singleHotelData?.amenities,
                rating: singleHotelData?.rating,
              };

        const hasMatches = hotelProduct.matches !== 0;

        const rooms = hotelProduct && hasMatches ? hotelProduct.variants : [];

        const hotelNameForTitles =
          hotelHead.title.split(' ')[0].toLowerCase() === 'the'
            ? hotelHead.title.replace(hotelHead.title.split(' ')[0], '')
            : hotelHead.title;

        // pass search based variant data to activeItem
        hotelHead.variants = hasMatches ? hotelProduct.variants : [];

        const bookNowClick = () => {
          // scroll down to room selection
          document.querySelector('#hotelRooms').scrollIntoView();
        };

        if (
          (childAges !== '' &&
            childAges.split('-').length > 0 &&
            childAges.split('-').filter(age => age === '0').length > 0) ||
          adult === '0A'
        )
          setEnableHotelSearch(false);
        console.log({ hotelProduct, rooms });
        return (
          <>
            <HotelHeader light carouselItems={[hotelHead]} hasUser>
              {activeItem => (
                <DisplayHeader
                  activeItem={activeItem}
                  fromDate={fromDate}
                  toDate={toDate}
                  selectAdult={adult}
                  selectChildren={children}
                  handleAdultChange={handleAdultChange}
                  handleChildrenChange={handleChildrenChange}
                  handleDateChange={handleDateQuery}
                  searchMatches={hasMatches}
                  selectAdultOptions={selectAdultOptions}
                  selectChildrenOptions={selectChildrenOptions}
                  selectChildAgeOptions={selectChildAgeOptions}
                  childAges={childAges}
                  handleChildAgeChange={handleChildAgeChange}
                  enableHotelSearch={enableHotelSearch}
                  handleSearch={handleSearch}
                  setDates={setDates}
                  dateRef={dateRef}
                />
              )}
            </HotelHeader>
            <DisplayCarousel data={hotelHead.images} />
            <HotelSplitContainer>
              <DisplayMap venues={stadiumsMapData} title="Distance from Stadiums" />
              {hotelProduct.status === 'ERROR' ? (
                <Rooms
                  message={hotelProduct.message}
                  title="Your results"
                  handleAdultChange={handleAdultChange}
                  handleChildrenChange={handleChildrenChange}
                  handleDateQuery={handleDateQuery}
                  fromDate={fromDate}
                  toDate={toDate}
                  selectAdult={adult}
                  selectChildren={children}
                  searchMatches={hasMatches}
                  selectAdultOptions={selectAdultOptions}
                  selectChildrenOptions={selectChildrenOptions}
                  selectChildAgeOptions={selectChildAgeOptions}
                  childAges={childAges}
                  handleChildAgeChange={handleChildAgeChange}
                  qualifiers={qualifiers}
                  handleSearch={handleSearch}
                  enableHotelSearch={enableHotelSearch}
                />
              ) : (
                <Rooms
                  rooms={rooms}
                  title="Your results"
                  hotelId={hotelProduct.id}
                  handleAdultChange={handleAdultChange}
                  handleChildrenChange={handleChildrenChange}
                  handleDateQuery={handleDateQuery}
                  fromDate={fromDate}
                  toDate={toDate}
                  selectAdult={adult}
                  selectChildren={children}
                  searchMatches={hasMatches}
                  selectAdultOptions={selectAdultOptions}
                  selectChildrenOptions={selectChildrenOptions}
                  selectChildAgeOptions={selectChildAgeOptions}
                  childAges={childAges}
                  handleChildAgeChange={handleChildAgeChange}
                  qualifiers={qualifiers}
                  handleSearch={handleSearch}
                  enableHotelSearch={enableHotelSearch}
                />
              )}
            </HotelSplitContainer>
            <HotelFeaturesCustom amenities={hotelHead.amenities} title="Hotel Features" />
            {/* <TopGuestsCustom guests={mockTopGuests} title="Top Guest Reviews" /> */}
            <HotelDisplayChooseRoom>
              <HotelChooseRoom onClick={bookNowClick}>Choose your Room</HotelChooseRoom>
            </HotelDisplayChooseRoom>
            {/* <NewsHotelsCarousel items={mockCarousel} /> */}
            {/* swiam-134 <HotelSection data={mockOffers} title={`Hotels near The ${cityData.name}`} /> */}
            <OtherEvents
              title={`Upcoming Events near The ${hotelNameForTitles}`}
              data={eventsNearHotel.nearbyEvents}
              hotelName={hotelNameForTitles}
            />
            <Subscribe />
          </>
        );
      }}
    </Data>
  );
};

export default HotelDisplay;
