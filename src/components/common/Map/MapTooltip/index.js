import React, { useCallback } from 'react';
import Router from 'next/router';
import moment from 'moment';

import {
  StyledTooltip,
  TooltipContentWrapper,
  Headline,
  VenueName,
  VenueAddress,
  MoreEvents,
  NavigationLink,
  SvgNavigation,
} from './styles';

const MapTooltip = ({
  id,
  dateTime,
  fromDate,
  toDate,
  headline,
  venueId,
  venueName,
  venueAddress,
  otherEventsCount,
  hideLink,
}) => {
  const query = {
    // default to today's date
    fromDate: moment(fromDate || new Date()).format('YYYY-MM-DD'),
    // default to null
    toDate: toDate && moment(new Date()).format('YYYY-MM-DD'),
  };

  const pushEventRoute = useCallback(() => {
    Router.push({
      pathname: `/event/${id}`,
    });
  }, [id]);

  const pushVenueRoute = useCallback(() => {
    Router.push({
      pathname: `/venue/${venueId}`,
      query,
    });
  }, [id]);

  return (
    <StyledTooltip
      id={id}
      aria-haspopup="true"
      type="light"
      effect="solid"
      delayHide={500}
      delayShow={500}
      delayUpdate={500}
    >
      <TooltipContentWrapper>
        <Headline onClick={pushEventRoute}>{headline}</Headline>
        <VenueName>{venueName}</VenueName>
        <VenueAddress>{venueAddress}</VenueAddress>
        {Boolean(dateTime) && <VenueAddress>{moment(Number(dateTime)).format('DD MMM YYYY')}</VenueAddress>}

        {otherEventsCount > 0 && (
          <MoreEvents onClick={pushVenueRoute}>
            See {otherEventsCount} more {otherEventsCount === 1 ? 'event' : 'events'}
          </MoreEvents>
        )}
        {!hideLink && (
          <NavigationLink onClick={pushEventRoute}>
            <SvgNavigation />
          </NavigationLink>
        )}
      </TooltipContentWrapper>
    </StyledTooltip>
  );
};

export default MapTooltip;
