/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect } from 'react';
import { adopt } from 'react-adopt';

import { sendEvent } from '@utils/google-services/gtm';
import HeaderSection from './HeaderSection';
import SeatSelection from './SeatSelection';
import ServiceGuarantees from './ServiceGuarantees';

import { ProductDataQuery, EventDetailsQuery } from './queries';
import CartContext from '../../utils/cartContext';
import setupData from './data';
import NoTicketsAvailable from './NewEvents/NoTicketsAvailable';
import UserContext from '../../utils/userContext';

const Data = adopt({
  productData: ({ render, eventId, cartId }) => (
    <ProductDataQuery eventId={eventId} cartId={cartId}>
      {render}
    </ProductDataQuery>
  ),
  eventData: ({ render, eventId }) => <EventDetailsQuery eventId={eventId}>{render}</EventDetailsQuery>,
});

const EventPage = ({ eventId }) => {
  const { state: cart } = useContext(CartContext);
  const cartId = cart && cart.id;

  if (!eventId) return null;

  const { state: user } = useContext(UserContext);
  const isLoggedIn = user.userToken !== undefined;
  if (!isLoggedIn && typeof window !== 'undefined') {
    // only show for production event IDS:
    const validIds = ['194595', '194596', '194597', '194598', '194599'];
    if (validIds.includes(eventId)) {
      (function(d, u, ac) {
        const s = d.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://a.omappapi.com/app/js/api.min.js';
        s.async = true;
        s.dataset.user = u;
        s.dataset.campaign = ac;
        d.getElementsByTagName('head')[0].appendChild(s);
      })(document, 130299, 'adeavikazkvaxrbbtlvy');
    }
  }

  return (
    <Data eventId={eventId} cartId={cartId}>
      {({ productData, eventData }) => {
        const { productId, headerData } = setupData({
          productData,
          eventData,
        });

        useEffect(() => {
          document.head.insertAdjacentHTML('beforeend', `<style>body{overflow-x:hidden}</style>`);
          return () => {
            document.head.insertAdjacentHTML('beforeend', ``);
          };
        }, []);

        productData.featuredEvent = eventData?.moreEventData?.featuredEvent;
        productData.featuredData = eventData?.moreEventData?.featuredData;
        productData.eventTicketingUrl = eventData?.moreEventData?.eventTicketingUrl;
        productData.venue = eventData?.venue;
        productData.fromPrice = eventData?.moreEventData?.fromPrice;

        useEffect(() => {
          process.browser &&
            sendEvent('eventViewed', {
              eventData: {
                detail: {
                  eventName: eventData.headline,
                  eventLocation: eventData.venue?.venueName,
                  eventLeague: eventData.league?.leagueName,
                  eventDate: eventData.dateTime,
                  eventCity: undefined,
                  eventCountry: undefined,
                  eventId,
                },
              },
            });
        }, []);

        return (
          <>
            <HeaderSection headerData={headerData} />
            {productId ? (
              <SeatSelection eventId={eventId} event={productData} />
            ) : (
              productData?.status?.toUpperCase() === 'ERROR' && <NoTicketsAvailable message={productData?.message} />
            )}
            <ServiceGuarantees />
          </>
        );
      }}
    </Data>
  );
};

export default EventPage;
