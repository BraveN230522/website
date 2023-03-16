import React from 'react';

import MapTooltip from '../MapTooltip';

import { MarkerStyle, SvgMarker, HotelMarker } from './styles';

const MapMarker = ({
  id,
  fromDate,
  dateTime,
  toDate,
  headline,
  venueId,
  venueName,
  venueAddress,
  otherEventsCount,
  hotelId,
  hotelName,
  hotelAddress,
}) => {
  return (
    <>
      <MarkerStyle data-tip data-for={id}>
        {hotelId ? <HotelMarker size={45} /> : <SvgMarker size={45} />}
      </MarkerStyle>
      <MapTooltip
        id={id}
        dateTime={dateTime}
        fromDate={fromDate}
        toDate={toDate}
        headline={headline}
        venueId={venueId || hotelId}
        venueName={venueName || hotelName}
        venueAddress={venueAddress || hotelAddress}
        otherEventsCount={otherEventsCount}
        hideLink={hotelId !== undefined}
      />
    </>
  );
};

export default MapMarker;
