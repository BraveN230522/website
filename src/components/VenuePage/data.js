import { get } from 'lodash';
import { filterByDate } from '../../utils/filters';

const setupData = ({ data, filterByCategory, filterByFromDate, filterByToDate }) => {
  const events =
    (data?.events &&
      get(data, 'events', []).map(event => ({
        ...event,
        photoURL: data.venueImage,
        venueName: data.venueName,
        venueAddress: data.venueAddress,
      }))) ||
    [];

  const categories = events.reduce(
    (acc, event) => ({
      ...acc,
      [event.leagueId]: event.leagueId,
    }),
    {}
  );

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
      local: 'venueName',
      date: 'dateTimeStamp',
      price: 'priceFrom',
      image: 'photoURL',
    },
    headerData: {
      title: data?.venue?.venueName,
      location: data?.venue?.venueAddress,
      description: data?.venue?.venueOverview,
      imageURL: data?.venue?.venueImage,
      mobileImageURL: data?.venue?.venueImage,
    },
  };
};

export default setupData;
