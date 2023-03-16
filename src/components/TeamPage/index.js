import React from 'react';
import { adopt } from 'react-adopt';
import Router from 'next/router';

import { useDateQuery } from '@utils/hooks/useSearchQuery';

import LocalAdvice from '@components/common/LocalAdvice';
import BookHotelSection from '@components/common/BookHotel';
import Subscribe from '@components/common/Subscribe';
import Calendar from '@components/common/Form/Calendar';
import { filterByDate } from '@utils/filters';

import TeamBg from '@images/city-bg.png';
import TeamMobileBg from '@images/city-background-mobile.png';
import LocationPinOutline from '@svg/location-pin-outline.svg';
import moment from 'moment';
import ObjectIdByNameQuery from '@graphql/queries/common';
import { mockLocal, mockAdvice } from './mocks';

import { HeroWithSpacing, CalendarContent, SubTitle, TeamHeader, SelectWhereTo, TeamFeaturedTickets } from './styles';
import { TeamQuery } from './queries';
import LeagueTeams from '../LeaguePage/LeagueTeams';
import TruncateText from '../common/TruncateText';
import ContentCarousel from '../common/ContentCarousel';

const pathFor = {
  title: 'headline',
  local: 'venue.venueName',
  date: 'dateTimeStamp',
  price: 'priceFrom',
  image: 'sportIcon',
};

const TeamData = adopt({
  teamIdData: ({ render, teamName }) => <ObjectIdByNameQuery name={teamName}>{render}</ObjectIdByNameQuery>,
});
const Data = adopt({
  teamInfo: ({ render, teamId }) => <TeamQuery teamId={teamId}>{render}</TeamQuery>,
});

// unfortunently we can not reuse the function because league page has
// cityId in cammel case and here we have cityid in lower case
// it might be an error on the API as well
const getTeamEvents = (fromDate, toDate, events = [], teamCityId) => {
  events.sort((a, b) => a - b);
  const cityEvents = events.filter(({ cityId }) => !teamCityId || teamCityId == cityId);
  const startDateString = fromDate ? moment(fromDate).format('DD MMM YYYY') : null;
  const endDateString = toDate ? moment(toDate).format('DD MMM YYYY') : null;
  return filterByDate(startDateString, endDateString, cityEvents, 'dateTime');
};

const Team = ({ teamName, fromDate, toDate, cityId, cityName }) => {
  let teamId;
  let intTeamId;
  const handleDateQuery = useDateQuery({
    fromDate,
    id: teamId,
    toDate,
    pageName: `team/${teamName}`,
    concat: {
      cityId,
      cityName,
    },
  });

  const handleCitySelected = (cityUrl, value) => {
    if (!value && !cityName) return;
    Router.push({
      pathname: `/team/${teamName}`,
      query: {
        fromDate,
        toDate,
        cityName: value,
        cityId: cityUrl.split('city/')[1],
      },
    });
  };

  return (
    <TeamData teamName={teamName}>
      {({ teamIdData }) => {
        teamId = teamIdData?.data?.id;
        if (!teamId) return null;
        intTeamId = parseInt(teamId, 10);
        return (
          <Data teamId={intTeamId}>
            {({ teamInfo }) => {
              // eslint-disable-next-line prettier/prettier
              const primaryLeague =
                teamInfo?.primaryLeague === null
                  ? (teamInfo?.leagues?.length && teamInfo?.leagues[0]) || teamInfo?.primaryLeague
                  : teamInfo?.primaryLeague;
              const parsedTeam = teamInfo && {
                title: teamInfo?.teamName || '',
                description: teamInfo?.teamDescription || '',
                imageURL: teamInfo?.photoURL || TeamBg,
                mobileImageURL: teamInfo?.photoURL || TeamMobileBg,
                adviceImage: teamInfo?.cardImageURL || TeamBg,
              };

              return (
                <>
                  <TeamHeader dark carouselItems={[parsedTeam]} withMenu>
                    {activeItem => (
                      <HeroWithSpacing direction="center" title={`${activeItem.title} Tickets`}>
                        <CalendarContent>
                          <SelectWhereTo
                            getCityId={handleCitySelected}
                            entity="city"
                            defaultValue={cityName}
                            icon={LocationPinOutline}
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
                          <TruncateText>{activeItem.description}</TruncateText>
                        </SubTitle>
                      </HeroWithSpacing>
                    )}
                  </TeamHeader>
                  <TeamFeaturedTickets
                    title={`Get tickets to ${teamInfo?.teamName} games`}
                    events={getTeamEvents(fromDate, toDate, teamInfo?.events, cityId)}
                    pathFor={pathFor}
                    isDarkTheme
                  />
                  {/* <TeamPopularPlayers title="Popular New York Knicks Players" data={mockPlayers} /> */}
                  <LocalAdvice
                    tips={mockLocal.tips}
                    local={teamInfo?.teamName || ''}
                    adviceImage={mockLocal.adviceImage}
                    cardData={mockAdvice}
                    interestId={intTeamId}
                    interestType="team"
                  />
                  {primaryLeague && (
                    <LeagueTeams
                      leagueId={parseInt(primaryLeague?.leagueId, 10)}
                      leagueName={primaryLeague?.leagueAbbreviation}
                      fallbackImageUrl={primaryLeague?.photoURL}
                    />
                  )}
                  {intTeamId && <ContentCarousel interestId={intTeamId} interestType="team" />}
                  {/* Client advised to remove this section for now - 10/09/2020 */}
                  {/* <BookHotelSection title={`Book hotels near the next ${teamInfo?.teamName} game`} /> */}
                  <Subscribe />
                </>
              );
            }}
          </Data>
        );
      }}
    </TeamData>
  );
};

export default Team;
