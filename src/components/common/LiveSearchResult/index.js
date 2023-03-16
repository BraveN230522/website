import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { SEARCH_BY_TERM } from '@graphql/queries/search';
import { useLazyQuery } from '@apollo/react-hooks';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import navigateIcon from '@svg/next.svg';
import { adopt } from 'react-adopt';
import { sendEvent } from '@utils/google-services/gtm';
import console from '@utils/console';
import { EventDetailsQuery } from '../../EventPage/queries';
import {
  Wrapper,
  List,
  Header,
  ItemLink,
  Loading,
  Error,
  NotFound,
  ItemIcon,
  NavigationIcon,
  Item,
  TextSearchError,
} from './styles';
import HighlightFactory from './HighlightFactory';

const EventData = adopt({
  eventData: ({ render, eventId }) => <EventDetailsQuery eventId={eventId}>{render}</EventDetailsQuery>,
});

const LiveSearchResult = ({ className, searchedTerm, open, onSelectResult, entity, hotels }) => {
  const [getResults, { loading, error, data }] = useLazyQuery(SEARCH_BY_TERM);
  useEffect(() => {
    if (searchedTerm && searchedTerm.length >= 3) {
      getResults({
        variables: { searchedTerm, useHotelIDs: !!hotels },
      });
    }
  }, [searchedTerm, getResults]);

  if (!open || !searchedTerm || searchedTerm.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <Content
        className={className}
        searchedTerm={searchedTerm}
        loading={loading}
        error={error}
        data={data}
        onSelectResult={onSelectResult}
        entity={entity}
      />
    </Wrapper>
  );
};

const Content = ({ className, searchedTerm, loading, error, data, onSelectResult, entity }) => {
  if (loading) {
    return <Loading>Searching...</Loading>;
  }

  if (error) {
    console.warn('error loading search results', error);
    return <Error>Something went wrong. Try again latter.</Error>;
  }

  const resultData = get(data, 'searchByTerm', []);

  // track search results
  if (data !== undefined) {
    process.browser &&
      sendEvent('searchResults', {
        searchData: {
          detail: {
            searchTerm: searchedTerm,
            results: data,
          },
        },
      });
  }

  const mapper = {
    city: resultData?.filter(_ => _.type === 'CITY') || [],
    venue: resultData?.filter(_ => _.type === 'VENUE') || [],
    event: resultData?.filter(_ => _.type === 'EVENT') || [],
    experience: resultData?.filter(_ => _.type === 'EXPERIENCE') || [],
    team: resultData?.filter(_ => _.type === 'TEAM') || [],
    league: resultData?.filter(_ => _.type === 'LEAGUE') || [],
  };

  if (
    [...mapper.team, ...mapper.city, ...mapper.venue, ...mapper.event, ...mapper.experience, ...mapper.league]
      .length === 0
  ) {
    return (
      <NotFound>
        <span>
          No result found for:<TextSearchError>{searchedTerm}</TextSearchError> Please try another search or contact our
          team with your query.
        </span>
      </NotFound>
    );
  }

  if (entity) {
    return (
      <ResultType
        className={className}
        data={mapper[entity]}
        path={entity}
        canNavigate={false}
        searchedTerm={searchedTerm}
        onSelectResult={onSelectResult}
      />
    );
  }

  return (
    <>
      <ResultType data={mapper.team} type="teams" canNavigate path="team" searchedTerm={searchedTerm} />
      <ResultType
        data={mapper.city}
        type="cities"
        path="city"
        canNavigate={false}
        searchedTerm={searchedTerm}
        onSelectResult={onSelectResult}
      />
      <ResultType
        data={mapper.venue}
        type="venues"
        path="venue"
        canNavigate={false}
        searchedTerm={searchedTerm}
        onSelectResult={onSelectResult}
      />
      <ResultType data={mapper.event} type="events" path="event" canNavigate searchedTerm={searchedTerm} />
      <ResultType
        data={mapper.experience}
        type="experiences"
        canNavigate
        path="experience"
        searchedTerm={searchedTerm}
      />
      <ResultType data={mapper.league} type="leagues" canNavigate path="league" searchedTerm={searchedTerm} />
    </>
  );
};

const ResultType = ({ className, data, type, searchedTerm, path, canNavigate, onSelectResult }) => {
  const [numberOfVisibleData, setNumberOfVisibleData] = useState(3);

  if (data.length === 0) {
    return null;
  }

  return (
    <List className={className}>
      {type && <Header>{type.toUpperCase()}</Header>}
      <HighlightItems
        data={data.slice(0, numberOfVisibleData)}
        searchedTerm={searchedTerm}
        path={path}
        canNavigate={canNavigate}
        onSelectResult={onSelectResult}
      />
      {type && data.length > numberOfVisibleData && (
        <SeeAll name={type.toLowerCase()} onClick={() => setNumberOfVisibleData(data.length + 1)} />
      )}
    </List>
  );
};

const HighlightItems = ({ data, searchedTerm, path, canNavigate, onSelectResult }) => {
  if (canNavigate) {
    return data.map(({ resultID, resultText, type, subType, date, venue }) => {
      let link = formatSlugSegments(LINK_ABSOLUTE, path, resultID);
      if (type === 'TEAM') link = formatSlugSegments(LINK_ABSOLUTE, path, resultText);
      if (type === 'EVENT') {
        return (
          <EventData eventId={resultID}>
            {({ eventData }) => {
              if (!eventData) return null;
              link = formatSlugSegments(
                LINK_ABSOLUTE,
                eventData.cityData?.city?.cityName,
                eventData.venue?.venueName,
                'event',
                resultID,
                resultText
              );
              const data = eventData;
              return (
                <ItemLink
                  key={resultID}
                  href={link}
                  date={date}
                  venue={venue}
                  onClick={() => {
                    const data = {
                      resultText,
                      type,
                      subType,
                    };
                    process.browser &&
                      sendEvent('selectSearchResult', {
                        searchData: {
                          detail: data,
                        },
                      });
                    onSelectResult(data);
                  }}
                >
                  <ItemIcon name={subType} alt="" />
                  <HighlightFactory sentence={resultText} searchedTerm={searchedTerm} />
                  <NavigationIcon src={navigateIcon} alt="see details" />
                </ItemLink>
              );
            }}
          </EventData>
        );
      }
      return (
        <ItemLink
          key={resultID}
          href={link}
          date={date}
          venue={venue}
          onClick={() => {
            const data = {
              resultText,
              type,
              subType,
            };
            process.browser &&
              sendEvent('selectSearchResult', {
                searchData: {
                  detail: data,
                },
              });
            onSelectResult(data);
          }}
        >
          <ItemIcon name={subType} alt="" />
          <HighlightFactory sentence={resultText} searchedTerm={searchedTerm} />
          <NavigationIcon src={navigateIcon} alt="see details" />
        </ItemLink>
      );
    });
  }

  return data.map(({ resultID, resultText, type, subType, hotelSearchCityId }) => (
    <Item
      key={resultID}
      onClick={() => {
        const data = {
          resultText,
          type,
          subType,
          hotelSearchCityId,
        };
        process.browser &&
          sendEvent('selectSearchResult', {
            searchData: {
              detail: data,
            },
          });
        onSelectResult(resultText, `/${path}/${resultID}`, data);
      }}
    >
      <ItemIcon name={subType} alt="" />
      <HighlightFactory sentence={resultText} searchedTerm={searchedTerm} />
    </Item>
  ));
};

const SeeAll = ({ name, onClick }) => (
  <Item onClick={onClick}>
    <span className="see-all">See all {name}</span>
  </Item>
);

export default LiveSearchResult;
