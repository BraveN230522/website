import React from 'react';
import moment from 'moment';
import Card from '@components/common/Card';
import Router from 'next/router';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import { OtherEventsSection } from './styles';

const OtherEvents = ({ data, title, cityName, hotelName }) => {
  const dataResults = (data && [...data]) || [];
  const parsedEvents =
    dataResults &&
    dataResults.length &&
    dataResults.slice(-5).map(event => {
      return {
        id: event.eventID,
        title: event.eventName,
        venueName: event?.venue.venueName,
        eventName: event?.eventName,
        local: event.venue.venueAddress,
        date: moment(event.eventDateTime).format('DD MMM YYYY'),
        price: (event && event.fromPrice && event.fromPrice.amount) || '',
        image:
          event.eventImage ||
          'https://news.wagertalk.com/wp-content/uploads/2018/10/nba-new-york-knicks-at-miami-heat.jpg',
      };
    });
  const eventsToMap = parsedEvents || [];
  const gridColumns = eventsToMap.length > 1 ? 5 : 1;
  return (
    <OtherEventsSection grid columns={gridColumns} centered title={title}>
      {eventsToMap.length === 0 && <span>There are currently no events near {cityName || hotelName}</span>}
      {eventsToMap.map(item => (
        <Card
          key={`otherevent-${item.id}`}
          variantButton="primary"
          onActionButtonClick={() =>
            Router.push({
              pathname: formatSlugSegments(
                LINK_ABSOLUTE,
                cityName,
                item?.venueName,
                'event',
                item.id,
                item.eventName,
                'tickets'
              ),
            })
          }
          card={{
            title: item.title,
            local: item.local,
            date: item.date,
            price: item.price,
            image: item.image,
          }}
        />
      ))}
    </OtherEventsSection>
  );
};

export default OtherEvents;
