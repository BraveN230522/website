import React, { useState, useCallback } from 'react';
import Router from 'next/router';
import moment from 'moment';
import { adopt } from 'react-adopt';

import TabMenu from '@components/common/TabMenu';
import Card from '@components/common/Card';

import { sendEvent } from '@utils/google-services/gtm';

import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import { TabMenuContainer, TabMenuWrapper, EventCardContainer, EventText, TopCities } from './styles';
import { EventsQuery, TopCitiesQuery } from './queries';

const EventsData = adopt({
  tabs: ({ render }) => <EventsQuery>{render}</EventsQuery>,
  topCities: ({ render }) => <TopCitiesQuery>{render}</TopCitiesQuery>,
});

const formatCardData = (data, limit) => () => {
  const goToEvent = useCallback((id, cityName, venueName, eventName) => {
    if (!id) {
      return;
    }

    sendEvent('featuredClick', {
      featured: {
        detail: {
          id,
          cityName,
          venueName,
          name: eventName,
        },
      },
    });

    Router.push({
      pathname: formatSlugSegments(LINK_ABSOLUTE, cityName, venueName, 'event', id, eventName, 'tickets'),
    });
  }, []);

  if (!data.length) return <EventText>There's no events available for this category at this moment</EventText>;

  let cities = [];
  if (!limit) {
    cities = data.map(city => ({
      id: `icon-${city.cityId}`,
      img: city.imageURL,
      name: city.cityName,
      href: formatSlugSegments(LINK_ABSOLUTE, city.cityName),
    }));
  }
  return limit ? (
    <EventCardContainer>
      {Array.from(data)
        .slice(0, limit)
        .map(({ venue, eventID, eventName, eventDateTime, eventImage, league, fromPrice: { amount } }) => (
          <Card
            key={eventID}
            dark
            card={{
              title: eventName,
              local: `${venue.city.cityName}, ${venue.city.country.countryName}`,
              date: moment(eventDateTime).format('DD MMM YYYY'),
              price: amount,
              // TODO eventImage is returning null, change for eventImage later
              image: eventImage || venue?.venueImage || league?.cardImageURL || league?.sport?.sportIconURL,
            }}
            onActionButtonClick={() => goToEvent(eventID, venue?.city?.cityName, venue?.venueName, eventName)}
          />
        ))}
    </EventCardContainer>
  ) : (
    <TopCities cards={cities} />
  );
};

const EventsSection = ({ className }) => {
  const [limits, setLimit] = useState({
    popular: 10,
    experiences: 10,
  });

  const handleMoreClick = (key, data) => () => {
    if (limits[key] > data.length) return;

    setLimit({
      ...limits,
      [key]: limits[key] + 10,
    });
  };

  const formatTabMenu = ({ allPopularEvents, allExperiences }, topCities) => {
    return [
      {
        name: 'Featured',
        handleMoreClick: handleMoreClick('popular', allPopularEvents),
        // TODO: Remove the slice when pagination is done on FE
        renderContent: formatCardData(allPopularEvents, limits.popular),
      },
      {
        name: 'Top Cities',
        renderContent: formatCardData(topCities),
      },
      // {
      //   name: 'Experiences',
      //   handleMoreClick: handleMoreClick('experiences', allExperiences),
      //   renderContent: formatCardData(allExperiences, limits.experiences),
      // },
    ];
  };

  return (
    <EventsData>
      {({ tabs, topCities }) => {
        return (
          <TabMenuWrapper className={className}>
            <TabMenuContainer>
              <TabMenu items={formatTabMenu(tabs, topCities)} />
            </TabMenuContainer>
          </TabMenuWrapper>
        );
      }}
    </EventsData>
  );
};

export default EventsSection;
