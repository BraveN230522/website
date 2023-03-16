import React, { useRef, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../MapMarker';

import { MapContainer } from './styles';
import addYourLocationButton from './customControls';

const getMapCenter = venues => {
  const eventsCenter =
    venues &&
    venues.length &&
    venues.reduce(
      (accumulator, currentValue) => {
        return {
          lat: currentValue.venue.coOrdinates.latitude + accumulator.lat,
          lng: currentValue.venue.coOrdinates.longitude + accumulator.lng,
        };
      },
      { lat: 0, lng: 0 }
    );
  return (
    (eventsCenter && {
      lat: eventsCenter?.lat / Object.keys(venues).length || 0,
      lng: eventsCenter?.lng / Object.keys(venues).length || 0,
    }) || { lat: 0, lng: 0 }
  );
};

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"

  return {
    fullscreenControl: false,
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_BOTTOM,
      style: maps.ZoomControlStyle.SMALL,
    },
  };
}

const getVenuesWithEventsAndCoordinates = events => {
  const mappedVenues = Object.keys(events).map(_ => {
    const {
      eventId,
      headline,
      venueId,
      venue: { coOrdinates, venueName, venueAddress },
    } = events[_][0];
    return (
      coOrdinates.latitude !== 0 &&
      coOrdinates.longitude !== 0 && {
        eventId,
        headline,
        venueId,
        venue: { coOrdinates, venueName, venueAddress },
      }
    );
  });
  return mappedVenues && mappedVenues.length && mappedVenues.filter(item => item); // only items that are not falsey
};

const MapView = ({ className, zoom, fromDate, toDate, events, venues }) => {
  const mapRef = useRef();

  if (venues) {
    const hotelCoordinates = {
      lat: venues.hotel[0]?.venue?.coOrdinates?.latitude,
      lng: venues.hotel[0]?.venue?.coOrdinates?.longitude,
    };
    const [center, setCenter] = useState(hotelCoordinates);
    useEffect(() => {
      setCenter(hotelCoordinates);
    }, [venues]);
    // console.info(
    //   'MAP PARAMETERS',
    //   `[key:${process.env.GOOGLE_MAPS_API_KEY}] [zoom:${zoom}] [center:${center}] [options:${createMapOptions}]`,
    //   center
    // );
    return (
      <MapContainer className={className}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GOOGLE_MAPS_API_KEY,
          }}
          zoom={zoom}
          center={center}
          options={createMapOptions}
          onGoogleApiLoaded={({ map, maps }) => {
            mapRef.current = map;

            addYourLocationButton(map, maps);
          }}
          yesIWantToUseGoogleMapApiInternals
        >
          {Object.keys(venues).map(item => {
            const venue = venues[item][0].venue;
            // if (venue === 'hotel') return null;
            // if (venue !== '401') return null;
            // console.info('VENUE', venue);
            return (
              venue.coOrdinates?.latitude !== 0 &&
              venue.coOrdinates?.longitude !== 0 && (
                <MapMarker
                  fromDate={null}
                  toDate={null}
                  key={venue.venueId}
                  dateTime={null}
                  lat={venue.coOrdinates?.latitude}
                  lng={venue.coOrdinates?.longitude}
                  id={`${venue.venueId}`}
                  headline={venue.headline}
                  venueId={item === 'hotel' ? undefined : venue.venueId}
                  venueName={item === 'hotel' ? undefined : venue.venueName}
                  venueAddress={item === 'hotel' ? undefined : venue.venueAddress}
                  hotelId={item === 'hotel' ? venue.venueId : undefined}
                  hotelName={item === 'hotel' ? venue.venueName : undefined}
                  hotelAddress={item === 'hotel' ? venue.venueAddress : undefined}
                  otherEventsCount={0}
                />
              )
            );
          })}
        </GoogleMapReact>
      </MapContainer>
    );
  }

  const venuesWithEvents = getVenuesWithEventsAndCoordinates(events);
  const [center, setCenter] = useState(getMapCenter(venuesWithEvents));

  useEffect(() => {
    setCenter(getMapCenter(venuesWithEvents));
  }, [events]);
  return (
    <MapContainer className={className}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAPS_API_KEY,
        }}
        zoom={zoom}
        center={center}
        options={createMapOptions}
        onGoogleApiLoaded={({ map, maps }) => {
          mapRef.current = map;

          addYourLocationButton(map, maps);
        }}
        yesIWantToUseGoogleMapApiInternals
      >
        {Object.keys(events).map(_ => {
          const {
            eventId,
            headline,
            dateTime,
            venueId,
            venue: { coOrdinates, venueName, venueAddress },
          } = events[_][0];

          return (
            coOrdinates.latitude !== 0 &&
            coOrdinates.longitude !== 0 && (
              <MapMarker
                fromDate={fromDate}
                toDate={toDate}
                key={eventId}
                dateTime={dateTime}
                lat={coOrdinates.latitude}
                lng={coOrdinates.longitude}
                id={`${eventId}`}
                headline={headline}
                venueId={venueId}
                venueName={venueName}
                venueAddress={venueAddress}
                otherEventsCount={events[_].length - 1}
              />
            )
          );
        })}
      </GoogleMapReact>
    </MapContainer>
  );
};

MapView.defaultProps = {
  zoom: 11,
};

export default MapView;
