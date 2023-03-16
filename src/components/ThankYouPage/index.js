import React, { Fragment, useContext, useEffect } from 'react';
import { adopt } from 'react-adopt';

import Subscribe from '@components/common/Subscribe';

import CartContext from '@utils/cartContext';
import { CREATE_CART_ID } from '@graphql/queries/cart';
import { useLazyQuery } from '@apollo/react-hooks';
import console from '@utils/console';
import { mockLocal, mockAdvice } from './mocks';

import HeaderSection from './HeaderSection';
import BookHotelSection from './BookHotelSection';
import MerchandiseSection from './MerchandiseSection';
import OtherEvents from './OtherEvents';
import LocalAdviceSection from './LocalAdviceSection';
import { BookingQuery, EventQuery } from './queries';

import setupData from './data';
import ContentCarousel from '../common/ContentCarousel';

const Data = adopt({
  bookingData: ({ render, bookingId, email, fullName, cartId, currency }) => (
    <BookingQuery bookingId={bookingId} email={email} fullName={fullName} cartId={cartId} currency={currency}>
      {render}
    </BookingQuery>
  ),
  eventData: ({ render, eventId }) => (eventId === false ? null : <EventQuery eventId={eventId}>{render}</EventQuery>),
});

const handleError = err => {
  console.error('ERROR CLEARING CART', err);
};

const ThankYou = ({ bookingId, email, fullName, eventId }) => {
  const { state: cart, dispatch } = useContext(CartContext);
  const currency = cart.displayCurrency || 'AUD';

  const [createCartId, { loading: loadingCartCreation }] = useLazyQuery(CREATE_CART_ID, {
    onCompleted: ({ createCartId }) => {
      dispatch({ type: 'set-cart-cookie', data: createCartId });
      // clear qualifiers from localStorage
      localStorage.removeItem('qualifiers');
    },
    onError: handleError,
  });

  useEffect(() => {
    if (document.referrer !== '') createCartId();
  }, []);

  return (
    <Data eventId={eventId} cartId={bookingId} currency={currency}>
      {({ bookingData, eventData }) => {
        const { headerData } = setupData({
          data: { bookingData, eventId, bookingId, email, fullName, eventData },
        });
        const bookingHasHotels =
          bookingData.lineItems && bookingData.lineItems.filter(item => item.product.type === 'HOTEL').length > 0;

        // if (!headerData.eventData || !headerData.eventData.cityid) return null;

        const cityId = headerData.eventData?.cityid;
        const otherEventsTitle = `Also popular with ${headerData.eventData?.league?.leagueName} fans:`;

        return (
          <>
            <HeaderSection headerData={headerData} />
            {!bookingHasHotels && (
              <BookHotelSection title="Book Hotels near your game" hideMoreOnMobile cityId={cityId} />
            )}
            <OtherEvents title={otherEventsTitle} cityId={cityId} />
            {eventId !== 'false' && <MerchandiseSection eventId={eventId} />}
            <OtherEvents title={otherEventsTitle} events={headerData.eventData?.league?.events} />
            {eventId !== 'false' && <ContentCarousel interestId={eventData.cityid || 0} interestType="homepage" />}
            {eventId !== 'false' && (
              <LocalAdviceSection
                tips={mockLocal.tips}
                local={eventData?.cityData?.city?.cityName}
                adviceImage={mockLocal.adviceImage}
                cardData={mockAdvice}
                interestId={parseInt(cityId, 0)}
                interestType="city"
              />
            )}
            <Subscribe />
          </>
        );
      }}
    </Data>
  );
};

export default ThankYou;
