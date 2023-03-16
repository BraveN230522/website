import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from '@components/Loader';

import { GET_EVENTS } from '@graphql/queries/events';
import { GET_TOP_CITIES } from '@graphql/queries/cities';

const EventsQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    const msg = `Error loading sports`;
    // here set global error state (with useContext or return a toast notification or other error component
    return <div>{msg}</div>;
  }

  if (!data.allExperiences) {
    data.allExperiences = [];
  }

  if (!data.allPopularEvents) {
    data.allPopularEvents = [];
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  return children({
    ...data,
  });
};

const TopCitiesQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_TOP_CITIES);

  if (loading) {
    // return <div>Loading...</div>;
    return null;
  }

  if (error) {
    const msg = `Error loading cities`;
    // here set global error state (with useContext or return a toast notification or other error component
    return <div>{msg}</div>;
  }

  if (!data.topCities) {
    data.topCities = [];
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  return children(data.topCities);
};

export { EventsQuery, TopCitiesQuery };
