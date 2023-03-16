import React from 'react';
import moment from 'moment';
import Card from '@components/common/Card';
import { adopt } from 'react-adopt';
import { OtherEventsSection } from './styles';
import { EventsNearbyCityQuery } from '../queries';

const EventData = adopt({
  eventsData: ({ render, cityId }) => {
    if (cityId) return <EventsNearbyCityQuery cityId={cityId}>{render}</EventsNearbyCityQuery>;
    return [];
  },
});

const OtherEvents = ({ title, cityId }) => (
  <EventData cityId={cityId}>
    {({ eventsData }) => {
      if (!eventsData || !eventsData.length) return null;
      return (
        <OtherEventsSection grid columns={5} centered title={title}>
          {eventsData.map((item, index) => (
            <Card
              key={index}
              variantButton="primary"
              card={{
                title: item.eventName,
                local: `${item.venue?.venueName}`,
                date: moment(item.eventDateTime).format('DD MMM YYYY'),
                price: item.fromPrice?.amount,
                image: item.eventImage,
              }}
            />
          ))}
        </OtherEventsSection>
      );
    }}
  </EventData>
);

export default OtherEvents;
