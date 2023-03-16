import { get } from 'lodash';

import CityFallbackBackground from '@images/city-bg.png';
import CityMobileFallbackBackground from '@images/city-background-mobile.png';

import console from '@utils/console';
import { mockLocal } from './mocks';
import { filterByDate } from '../../utils/filters';

const setupData = ({ data, filterByCategory, filterByFromDate, filterByToDate }) => {
  const events = get(data, 'events', []);
  console.log('\n\n\n ==== EVENTS ====');
  console.log(events);
  const categories =
    (events &&
      events.length > 1 &&
      events.reduce(
        (acc, event) => ({
          ...acc,
          [event.leagueId]: event.leagueId,
        }),
        {}
      )) ||
    [];

  const filteredEventsByLeague = events.filter(
    event => event.leagueId === filterByCategory || filterByCategory === 'ALL'
  );

  const timestampFrom = new Date(filterByFromDate).getTime();
  const timestampTo = new Date(filterByToDate).getTime();
  const filteredEventsByDate = filterByDate(timestampFrom, timestampTo, filteredEventsByLeague, 'dateTime');
  filteredEventsByDate.sort((a, b) => a.dateTime - b.dateTime);

  const eventsByVenue = filteredEventsByDate.reduce((accumulator, currentValue) => {
    const existentVenueEvents = accumulator[currentValue.venueId];
    return {
      ...accumulator,
      [currentValue.venueId]: existentVenueEvents ? [...existentVenueEvents, currentValue] : [currentValue],
    };
  }, {});

  return {
    events: filteredEventsByDate,
    eventsByVenue,
    categories,
    pathFor: {
      title: 'headline',
      local: 'venue.venueName',
      date: 'dateTimeStamp',
      price: 'priceFrom',
      image: 'event.eventImage',
    },
    headerData: {
      title: `${data?.city?.cityName || ''} Sports Tickets`,
      location: null,
      description: data?.city?.cityOverview || mockLocal.description, // TODO: API needs to return city description
      imageURL: data?.city?.imageURL || CityFallbackBackground,
      mobileImageURL: data?.city?.imageURL || CityMobileFallbackBackground,
    },
  };
};

export default setupData;
