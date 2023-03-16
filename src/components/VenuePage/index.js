import React, { useCallback, useState, useEffect } from 'react';
import Router from 'next/router';
import moment from 'moment';
import { adopt } from 'react-adopt';

import FeaturedTickets from '@components/common/FeaturedTickets';
import Subscribe from '@components/common/Subscribe';
import LocalAdvice from '@components/common/LocalAdvice';

import HeaderSection from '@components/VenuePage/Header';
import { sendEvent } from '@utils/google-services/gtm';
import { VenueQuery } from './queries';

import { mockLocal, mockAdvice } from './mocks';

import setupData from './data';
import ContentCarousel from '../common/ContentCarousel';
import VenueImportantInformation from './VenueImportantInformation';
import HotelByCity from '../CityPage/HotelByCity';

const Data = adopt({
  data: ({ render, venueId, fromDate }) => (
    <VenueQuery venueId={venueId} fromDate={fromDate}>
      {render}
    </VenueQuery>
  ),
});

const Venue = ({ venueId, fromDate, toDate }) => {
  const [filterByCategory, setCategory] = useState('ALL');
  const handleChangeDates = useCallback(
    (startDate, endDate) => {
      // avoid inconsistent state if there's no start date
      if (!startDate) {
        return;
      }
      const startDateString = startDate ? moment(startDate).format('YYYY-MM-DD') : null;
      const endDateString = endDate ? moment(endDate).format('YYYY-MM-DD') : null;

      // avoid re-render if dates haven't changed
      if (startDateString === fromDate && (endDateString || '') === toDate) {
        return;
      }

      Router.push(
        {
          pathname: `/venue/[venueId]`,
          query: {
            fromDate: startDateString,
            toDate: endDateString,
          },
        },
        {
          pathname: `/venue/${venueId}`,
          query: {
            fromDate: startDateString,
            toDate: endDateString,
          },
        }
      );
    },
    [fromDate, toDate]
  );
  return (
    <Data venueId={venueId} fromDate={fromDate}>
      {({ data }) => {
        const { events, categories, pathFor, headerData } = setupData({
          data,
          filterByCategory,
          filterByToDate: toDate,
          filterByFromDate: fromDate,
        });
        const venueName = data?.venue?.venueName;
        const cityName = data?.venue?.city?.cityName;
        const cityId = data?.venue?.city?.cityId;
        if (!headerData || !cityId) return null;

        useEffect(() => {
          process.browser &&
            sendEvent('venueViewed', {
              venueData: {
                detail: {
                  id: venueId,
                  name: venueName,
                },
              },
            });
        });

        return (
          <>
            <HeaderSection
              fromDate={fromDate}
              toDate={toDate}
              data={headerData}
              handleChangeDates={handleChangeDates}
            />
            <FeaturedTickets
              title={`Get tickets to ${data?.venue?.venueName}`}
              events={events}
              categories={categories}
              currentCategory={filterByCategory}
              setCategory={setCategory}
              hasFilter
              hasView
              pathFor={pathFor}
              isDarkTheme
            />
            <HotelByCity title="Book hotels nearby" cityId={parseInt(cityId, 10)} />
            <VenueImportantInformation venueId={venueId} venueName={venueName} />
            <LocalAdvice
              tips={mockLocal.tips}
              local={data?.venue?.venueName}
              adviceImage={mockLocal.adviceImage}
              cardData={mockAdvice}
              interestId={parseInt(venueId, 10)}
              interestType="venue"
              cityName={cityName}
              venueName={venueName}
            />
            {venueId && <ContentCarousel interestId={parseInt(venueId, 10)} interestType="venue" />}
            {/* <LeagueNews interestId={parsedLeagueId} interestType="league" /> */}
            {/* <Partnership /> */}
            <Subscribe />
          </>
        );
      }}
    </Data>
  );
};

export default Venue;
