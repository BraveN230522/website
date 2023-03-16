import React, { useEffect, ReactDOM } from 'react';
import Router from 'next/router';
import moment from 'moment';
import { adopt } from 'react-adopt';

import { filterByDate } from '@utils/filters';
import { useDateQuery } from '@utils/hooks/useSearchQuery';
import Subscribe from '@components/common/Subscribe';
import Calendar from '@components/common/Form/Calendar';
import LocationPinOutline from '@svg/location-pin-outline.svg';
import LocalAdvice from '@components/common/LocalAdvice';
import { sendEvent } from '@utils/google-services/gtm';
import ContentCarousel from '../common/ContentCarousel';

import { LeagueQuery, DashboardQuery, CarouselQuery } from './queries';

import {
  HeroWithSpacing,
  CalendarContent,
  SelectWhereTo,
  SubTitle,
  LeagueFeaturedTickets,
  LeagueHeader,
} from './styles';

import { mockPathFor } from './mocks';
import LeagueTeams from './LeagueTeams';
import TruncateText from '../common/TruncateText';
import { mockAdvice, mockLocal } from '../CityPage/mocks';

const Data = adopt({
  leagueInfo: ({ render, leagueId }) => <LeagueQuery leagueId={leagueId}>{render}</LeagueQuery>,
  dashboard: ({ render, leagueId }) => (
    <DashboardQuery interestType="league" interestId={leagueId}>
      {render}
    </DashboardQuery>
  ),
  carousel: ({ render, leagueId }) => <CarouselQuery interestType="league" interestId={leagueId}>
      {render}
    </CarouselQuery>,
});

const getLeagueEvents = (fromDate, toDate, events = [], leagueCityId) => {
  const cityEvents = events
    .filter(({ cityId }) => !leagueCityId || parseInt(leagueCityId, 10) === cityId)
    .sort((a, b) => a.dateTime - b.dateTime);
  const startDateString = fromDate ? moment(fromDate).format('YYYY-MM-DD') : null;
  const endDateString = toDate ? moment(toDate).format('YYYY-MM-DD') : null;
  return filterByDate(startDateString, endDateString, cityEvents, 'dateTime');
};

const League = ({ leagueId, fromDate, toDate, cityId, cityName, user }) => {
  const handleDateQuery = useDateQuery({
    fromDate,
    id: leagueId,
    toDate,
    pageName: 'league',
    concat: {
      cityId,
      cityName,
    },
  });
  const parsedLeagueId = (leagueId && parseInt(leagueId, 10)) || 0;
  const isLoggedIn = user?.userToken !== undefined;

  const handleCitySelected = (cityUrl, value) => {
    if (!value && !cityName) return;

    Router.push({
      pathname: `/league/${leagueId}`,
      query: {
        fromDate,
        toDate,
        cityName: value,
        cityId: cityUrl.split('city/')[1],
      },
    });
  };

  const renderCarousel = (parsedLeagueId, carousel) => {
    if (parsedLeagueId) {
      return <ContentCarousel interestId={parsedLeagueId} interestType="league" interestData={carousel} />;
    }

    return <></>;
  };

  return (
    <Data leagueId={parsedLeagueId}>
      {({ leagueInfo, dashboard, carousel }) => {

        const parsedLeague = leagueInfo && {
          title: leagueInfo?.leagueName || '',
          description: leagueInfo?.leagueDescription || '',
          imageURL: leagueInfo?.photoURL || '',
          mobileImageURL: leagueInfo?.photoURL || '',
          adviceImage: leagueInfo?.cardImageURL || '',
          local: leagueInfo?.local || '',
          tips: leagueInfo?.tips || [],
        };

        useEffect(() => {
          process.browser &&
            sendEvent('leagueViewed', {
              detail: {
                id: leagueId,
                name: leagueInfo.leagueName,
              },
            });
        });

        if (!isLoggedIn && typeof window !== 'undefined') {
          // only show for cricket NOTE IDs may differ between stages so the abbreviation needs to be the key
          if (leagueInfo?.leagueAbbreviation == 'CRICKET') {
            (function(d, u, ac) {
              const s = d.createElement('script');
              s.type = 'text/javascript';
              s.src = 'https://a.omappapi.com/app/js/api.min.js';
              s.async = true;
              s.dataset.user = u;
              s.dataset.campaign = ac;
              d.getElementsByTagName('head')[0].appendChild(s);
            })(document, 130299, 'adeavikazkvaxrbbtlvy');
          }
        }

        return (
          <>
            <LeagueHeader dark carouselItems={[parsedLeague]} withMenu>
              {activeItem => (
                <HeroWithSpacing direction="center" title={`${activeItem?.title || ''} Tickets`}>
                  <CalendarContent>
                    {/* TODO refactor this so that it does not use router.push causing a page refresh
                        Con be easily done with a useState hook
                    */}
                    <SelectWhereTo
                      getCityId={handleCitySelected}
                      entity="city"
                      icon={LocationPinOutline}
                      defaultValue={cityName}
                      placeholder="City"
                    />
                    <Calendar
                      onChangeDateCallback={handleDateQuery}
                      lightMode
                      initialDates={{
                        startDate: fromDate || null,
                        endDate: toDate || null,
                      }}
                    />
                  </CalendarContent>
                  <SubTitle>
                    <TruncateText>{activeItem?.description}</TruncateText>
                  </SubTitle>
                </HeroWithSpacing>
              )}
            </LeagueHeader>
            <LeagueFeaturedTickets
              title={`Get tickets to ${leagueInfo?.leagueAbbreviation || ''} games`}
              events={getLeagueEvents(fromDate, toDate, leagueInfo?.events, cityId)}
              isDarkTheme
              pathFor={mockPathFor}
            />
            <LeagueTeams
              leagueId={parsedLeagueId}
              leagueName={leagueInfo?.leagueAbbreviation}
              fallbackImageUrl={leagueInfo?.photoURL}
            />
            <LocalAdvice
              tips={parsedLeague?.tips}
              local={leagueInfo?.leagueAbbreviation}
              adviceImage={mockLocal?.adviceImage}
              cardData={mockAdvice}
              interestId={parseInt(leagueId, 10)}
              interestType="league"
              interestData={dashboard}
            />
            {renderCarousel(parsedLeagueId, carousel)}
            <Subscribe />
          </>
        );
      }}
    </Data>
  );
};

export default League;
