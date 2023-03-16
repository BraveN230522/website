import React, { useContext, useEffect, useState } from 'react';
import { get } from 'lodash';

import getFormattedEventDateTime from '@utils/timeFormat/getFormattedEventDateTime';

import Icon from '@components/common/Icon';
import { useLazyQuery } from '@apollo/react-hooks';

import { REMOVE_PRODUCT_FROM_CART, SET_CART_PROMO_CODES } from '@graphql/queries/cart';
import CartContext from '@utils/cartContext';
import moment from 'moment';
import TotalPrice from '@components/CheckoutPage/Common/TotalPrice';
import { sendEvent } from '@utils/google-services/gtm';
import console from '@utils/console';
import Eticket from './Eticket';
import GrandTotal from './GrandTotal';

import {
  OrderHeader,
  OrderContainerDetails,
  OrderGameTitle,
  OrderTime,
  OrderLocalContainer,
  OrderLocal,
  OrderText,
  TextErrorTotal,
} from './styles';
import Hotels from './Hotels';

const getVenueName = product => {
  const { description } = product;
  if (!description) {
    return null;
  }

  const splittedDescription = description.split(',');
  if (splittedDescription && splittedDescription[0]) {
    return splittedDescription[0];
  }

  return null;
};

const getVenueAddress = geoInfo => {
  const { city, country } = geoInfo;
  const countryName = get(country, 'name');

  if (!city && !countryName) {
    return null;
  }

  if (!countryName) {
    return city;
  }

  return `${city}, ${countryName}`;
};

const formatLineItems = items => {
  return items.reduce(
    (acc, item) => {
      const product = get(item, 'product', {});
      const key = product.type === 'HOTEL' ? 'hotels' : 'tickets';

      return {
        ...acc,
        [key]: [
          ...acc[key],
          {
            ...item,
            venueName: getVenueName(item.product),
            venueAddress: product.geo && getVenueAddress(product.geo),
          },
        ],
      };
    },
    { hotels: [], tickets: [] }
  );
};

const YourOrder = ({ updateCart, className, title, qualifiers, setQualifiers }) => {
  const { dispatch, state: cartData } = useContext(CartContext);
  const lineItems = get(cartData, 'lineItems', []);
  // if (process.browser) {
  //   localStorage.setItem('numberCart', JSON.stringify(lineItems.length));
  // }

  const getEvents = items => {
    return items.reduce((acc, item) => {
      if (item.product.type !== 'EVENT' || acc.some(({ eventId }) => eventId === item.eventId)) {
        return acc;
      }

      return [...acc, { ...item, value: item.eventId, label: getVenueName(item.product) }];
    }, []);
  };

  const events = getEvents(lineItems);
  const [activeEvent, setActiveEvent] = events.length > 0 ? useState(events[0]) : useState();
  const [promoCodeError, setPromoCodeError] = useState();

  useEffect(() => {
    if (!activeEvent && events.length > 0) {
      setActiveEvent(getEvents(events)[0]);
    }
  }, [activeEvent, events]);

  const [updateCartPromoCodes, { variables: vars }] = useLazyQuery(SET_CART_PROMO_CODES, {
    onCompleted: args => {
      const { promoCodes: cart } = args;
      // populate promo code error if applicable
      if (!cart) return setPromoCodeError(<TextErrorTotal>INVALID CODE : {vars.promoCodes[0]}</TextErrorTotal>);
      setPromoCodeError();
      dispatch({ type: 'set-cart-cookie', data: cart });
      updateCart(cart);
    },
    fetchPolicy: 'no-cache',
  });

  const charges = cartData.charges || [];

  const onRemoveSuccess = ({ removeProductFromCart: cart }) => {
    console.log('UPDATED CART AFTER THE REMOVE MUTATION', cart);

    dispatch({ type: 'set-cart-cookie', data: cart });
    updateCart(cart);
  };

  const [removeProduct, { variables }] = useLazyQuery(REMOVE_PRODUCT_FROM_CART, {
    // onCompleted: onRemoveSuccess,
    onCompleted: ({ removeProductFromCart: cart }) => {
      // remove qualifiers for hotel items from local storage
      if (variables.removedLineItem.product.type === 'HOTEL') {
        const storedQualifiers =
          typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('qualifiers')) : undefined;
        const newQualifiers = storedQualifiers.filter(
          qualifier =>
            qualifier.productId !== variables.removedLineItem.product.id &&
            qualifier.variantId !== variables.removedLineItem.product.id &&
            qualifier.counts !== variables.qualifiers
        );
        localStorage.setItem('qualifiers', JSON.stringify(newQualifiers));
      }

      if (variables.removedLineItem.product.type === 'EVENT') {
        const eventData = {
          detail: {
            name: variables.removedLineItem.product.name,
            date: variables.removedLineItem.product.localDateTime,
            city: variables.removedLineItem.eventData?.cityData.name,
          },
        };
        process.browser && sendEvent('eventRemovedFromCart', eventData);
      } else if (variables.removedLineItem.product.type === 'HOTEL') {
        const hotelData = {
          detail: {
            name: variables.removedLineItem.product.name,
            room: variables.removedLineItem.product.selectedVariant.name,
            checkin: variables.removedLineItem.product.dateTimeStatus.startDateTime,
            checkout: variables.removedLineItem.product.dateTimeStatus.endDateTime,
            // customerInfo: variables.removedLineItem.customerInfo,
          },
        };
        process.browser && sendEvent('hotelRemovedFromCart', hotelData);
      } else {
        console.error(`INVALID PRODUCT TYPE: ${variables.removedLineItem.product.type}`);
      }

      dispatch({ type: 'set-cart-cookie', data: cart });
      updateCart(cart);
    },
    fetchPolicy: 'no-cache',
  });

  const afterRemoveClick = (lineItemId, qualifiers) => {
    removeProduct({
      variables: {
        lineItemId,
        cartId: cartData.id,
        removedLineItem: cartData.lineItems.find(lineItem => lineItem.id === lineItemId),
        qualifiers,
      },
    });
    // console.log(
    //   'LINE ITEM',
    //   cartData.lineItems.find(item => item.id === lineItemId)
    // );
    // const storedQualifiers = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('qualifiers')) : undefined;
    // console.log('STORED QUALIFIERS', storedQualifiers);
  };

  const { hotels, tickets } = formatLineItems(lineItems);

  const onSelectedHotelEventChange = ({ target: { value } }) => {
    const newEvent = events.find(event => event.eventId === value);
    setActiveEvent(newEvent);
  };

  return (
    <>
      {charges.length > 0 ? (
        <>
          <OrderHeader className={className} title={title}>
            {tickets.map(item => (
              <div key={item.id}>
                <OrderContainerDetails>
                  <div>
                    <OrderGameTitle>{item.product.name}</OrderGameTitle>
                    {item.product.selectedVariant.description}
                  </div>
                  <Eticket
                    afterRemoveClick={afterRemoveClick}
                    borderBottom
                    data={{
                      lineItemId: item.id,
                      ...item.product,
                      seats: item.product.selectedVariant.description,
                    }}
                    numberOfItems={item.quantity}
                    key={item.id}
                  />
                </OrderContainerDetails>

                <OrderTime>
                  <span>
                    <Icon name="watch" />
                  </span>
                  <OrderText>
                    {item.product.type === 'HOTEL'
                      ? moment(item.product.localDateTime).format('DD MMM YYYY')
                      : getFormattedEventDateTime(item.product.localDateTime)}
                  </OrderText>
                </OrderTime>

                <OrderLocalContainer>
                  <span>
                    <Icon name="locationPinPrimary" />
                  </span>
                  <OrderLocal>
                    {item.venueName && <OrderText>{item.venueName}</OrderText>}
                    {item.venueAddress && <OrderText>{item.venueAddress}</OrderText>}
                  </OrderLocal>
                </OrderLocalContainer>
              </div>
            ))}
          </OrderHeader>

          <TotalPrice label="Total for your tickets" fee={charges[2]} items={tickets} />

          <Hotels
            events={events}
            activeEvent={activeEvent}
            items={hotels}
            afterRemoveClick={afterRemoveClick}
            onSelectedHotelEventChange={onSelectedHotelEventChange}
            qualifiers={qualifiers}
            setQualifiers={setQualifiers}
          />

          <GrandTotal
            items={lineItems}
            fee={charges[charges.length - 1]}
            discounts={charges.slice(3)}
            promoCodes={cartData.promoCodes}
            setPromoCodes={updateCartPromoCodes}
            cartId={cartData.id}
            promoCodeError={promoCodeError}
            total={cartData.total}
          />
        </>
      ) : (
        <p>There’s no items in your cart</p>
      )}
    </>
  );
};

export default YourOrder;
