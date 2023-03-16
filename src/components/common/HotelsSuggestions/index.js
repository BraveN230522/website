import React, { useContext } from 'react';
import { adopt } from 'react-adopt';
import CartContext from '@utils/cartContext';

import Offers from '@components/common/Offers';
import { HotelsForBigEventsQuery, HotelsCloseToGameQuery, BIG_EVENTS, CLOSE_TO_GAME } from './hotel-query';

const HotelData = adopt({
  data: ({ render, type, eventId }) => {
    if (type === BIG_EVENTS) return <HotelsForBigEventsQuery>{render}</HotelsForBigEventsQuery>;
    if (type === CLOSE_TO_GAME) return <HotelsCloseToGameQuery eventId={eventId}>{render}</HotelsCloseToGameQuery>;
    return null;
  },
});

const BookHotelsSuggestions = ({ type }) => {
  const { state: cart } = useContext(CartContext);
  const eventId = cart && cart.lineItems && cart.lineItems.length > 0 ? cart.lineItems[0].eventId : null;
  if (type === CLOSE_TO_GAME && eventId === null) return null;
  return (
    <HotelData type={type} eventId={eventId}>
      {({ data }) => {
        if (data === null) return null;
        let title = 'Suggested Hotels';
        if (type === BIG_EVENTS) title = 'Best Hotels for big Sporting events';
        if (type === CLOSE_TO_GAME) title = `Hotels close to the game`;
        const className = '';
        const hideOnMobile = false;
        const hideMoreOnMobile = true;
        const hotels =
          (data &&
            data.constructor === Array &&
            data.map(hotel => {
              return {
                hotelID: hotel.hotelID,
                fromPrice: `${hotel.fromPrice.amount || ''} ${hotel.fromPrice.currencyId || ''}`,
                hotelName: hotel.hotelName,
                venueAddress: hotel.bestEventDescription,
                hotelImage: hotel.hotelImage,
                promoBanner: hotel.promoBanner,
              };
            })) ||
          [];
        return (
          <Offers
            title={title}
            data={hotels}
            className={className}
            hideOnMobile={hideOnMobile}
            hideMoreOnMobile={hideMoreOnMobile}
          />
        );
      }}
    </HotelData>
  );
};

export default BookHotelsSuggestions;
