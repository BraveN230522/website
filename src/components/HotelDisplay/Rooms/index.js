import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import CartContext from '@utils/cartContext';
import Router from 'next/router';
import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';
import { ADD_PRODUCT_ON_CART } from '@graphql/queries/cart';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { sendEvent } from '@utils/google-services/gtm';
import money from 'money';
import console from '@utils/console';

import {
  RoomStyles,
  RoomsSection,
  RoomContent,
  RommDetailsContent,
  RoomDetails,
  MoreRooms,
  RoomsButton,
} from './styles';

import {
  HotelHeaderOptionsPanel,
  HotelFiltersContainer,
  HotelCalendar,
  HotelAccommodationContainer,
  HotelControlsContent,
  HotelLabel,
  HotelSelect,
  HotelSearchButton,
  ChildrenAges,
  ChildSelect,
} from '../DisplayHeader/styles';

const axios = require('axios').default;

// NOTE: This is a patch and should be fixed using SWIAM cart API with internationalisation features!
const EXCHANGE_RATES_CONVERT_API = 'https://api.exchangeratesapi.io/v1/convert';
const EXCHANGE_API_KEY = '330c2500905f62e7064f3782b432a4df';
const DEFAULT_LIMIT = 3;

// NOTE: This is a patch and should be fixed using SWIAM cart API with internationalisation features!
const getExchangeRates = async (fromCurrency, toCurrency, amountToConvert) => {
  let response = '';
  try {
    response = await axios.get(EXCHANGE_RATES_CONVERT_API, {
      params: {
        access_key: EXCHANGE_API_KEY,
        from: fromCurrency,
        to: toCurrency,
        amount: amountToConvert,
      },
    });
    console.log(response);
    // console.log('Patch worked fine...');
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return response;
};

const convertToCartCurrency = item => {
  if (item && item.price && item.price.currency) {
    const cartCurrency = item.price.currency;
    if (cartCurrency !== 'AUD') {
      const amountToConvert = item.price.amount;

      let fromCurrency = 'USD';
      const toCurrency = 'AUD';
      const AUDRate = getExchangeRates(fromCurrency, toCurrency, amountToConvert);

      fromCurrency = 'GBP';
      const GBPRate = getExchangeRates(fromCurrency, toCurrency, amountToConvert);
      money.rates = {
        GBP: GBPRate,
        AUD: AUDRate,
        USD: 1,
      };
      const convertedAmount = money(item.price.amount)
        .convert({ from: item.price.currency, to: cartCurrency })
        .toFixed(2);
      return `${item.price.currency} $${convertedAmount}`;
    }
    const convertedAmount = money(item.price.amount)
      .convert({ from: item.price.currency, to: cartCurrency })
      .toFixed(2);
    return `${item.price.currency} $${convertedAmount}`;
  }
  return '';
};

const Rooms = ({
  className,
  rooms,
  title,
  message,
  hotelId,
  handleAdultChange,
  handleChildrenChange,
  handleChildAgeChange,
  handleDateQuery,
  fromDate,
  toDate,
  selectAdult,
  selectChildren,
  searchMatches,
  selectAdultOptions,
  selectChildrenOptions,
  selectChildAgeOptions,
  childAges,
  qualifiers,
  handleSearch,
  enableHotelSearch,
  convertedPricesHolder,
}) => {
  const [isMobile] = useDefaultMediaQueries();
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const { state: cart } = useContext(CartContext);
  const [lineItemKey, setLineItemKey] = useState();
  const [convertedPrices, setConvertedPrices] = useState(rooms);
  money.base = 'USD';

  const handleMoreClick = () => {
    setLimit(rooms.length);
  };

  const [addProductOnCart, { loading, variables }] = useLazyQuery(ADD_PRODUCT_ON_CART, {
    onCompleted: resp => {
      console.info('Add cart response');
      console.info(resp);
      if (!resp?.addProductOnCart) {
        alert('Error while processing your request. Please contact us.');
        return null;
      }

      // if there is a hotel line item in the cart that does not have qualifiers in cookie add them
      // line items are stored by product id
      let storedQualifiers = JSON.parse(localStorage.getItem('qualifiers'));
      const newQualifier = {
        productId: lineItemKey.productId,
        variantId: lineItemKey.variantId,
        counts: qualifiers,
        ages: qualifiers.split('-').slice(1),
      };
      if (storedQualifiers === null) storedQualifiers = [newQualifier];
      else {
        // remove any existing value first [allow the same room type to be booked more than once - when we have the line items during checkout, add it's id to an entry]
        // storedQualifiers = storedQualifiers.filter(qualifier => qualifier.productId !== hotelId);
        storedQualifiers.push(newQualifier);
      }
      localStorage.setItem('qualifiers', JSON.stringify(storedQualifiers));
      process.browser &&
        sendEvent('hotelAddedToCart', {
          hotelData: {
            detail: variables,
          },
        });

      Router.push({
        pathname: '/checkout',
      });
    },
    fetchPolicy: 'no-cache',
  });

  const bookNowClick = room => {
    // console.info('BOOK NOW', room, cart, hotelId);
    // console.info(
    //   `addProductOnCart(cartId:${cart.id}, quantity:1, productId:${hotelId}, variantId:${room.id}, currency:${room.price.currency})`
    // );

    setLineItemKey({ productId: hotelId, variantId: room.id });

    // add hotel to cart
    addProductOnCart({
      variables: {
        cartId: cart.id,
        quantity: 1,
        productId: hotelId,
        variantId: room.id,
        currency: room.price.currency,
      },
    });
  };
  const childAgesArray = childAges.split('-');
  console.log({ rooms });
  useEffect(() => {
    if (rooms) {
      rooms.forEach(async item => {
        const price = convertToCartCurrency(item);
        // Clone convertedPrices and set to a new object convertedPricesFinal
        // if (price !== undefined && price !== null) {
        //   const convertedPricesFinal = convertedPrices;
        //   convertedPricesFinal[item?.id] = price;
        //   setConvertedPrices(convertedPricesFinal);
        // }
      });
    }
  }, [rooms]);

  return (
    <RoomStyles id="hotelRooms" className={className}>
      <RoomsSection title={title}>
        {Boolean(rooms) &&
          rooms.slice(0, limit).map(item => {
            // const data = convertToCartCurrency(item);
            return (
              <RoomContent key={item.id}>
                <RommDetailsContent>
                  <RoomDetails variant="bed">{item.name}</RoomDetails>
                  <RoomDetails variant="includesRoom">{item.description}</RoomDetails>
                  <RoomDetails variant="includesRoom">
                    {fromDate} - {toDate}
                  </RoomDetails>
                  {/* <RoomDetails variant="includesRoom">
                  Breakfast {item.breakfast ? 'Included' : 'Not Included'}
                </RoomDetails> */}
                </RommDetailsContent>
                <RoomDetails variant="nights">
                  ${Math.floor(item.price.amount)}
                  {/* {`$${Math.floor(data.price.amount) || data}`} */}
                  {/* {`${Math.floor(convertedPrices?.[item?.price.amount])}`} */}
                </RoomDetails>
                <RoomsButton outline onClick={() => bookNowClick(item)}>{`Book ${isMobile ? '' : 'Now'}`}</RoomsButton>
              </RoomContent>
            );
          })}
        {rooms?.length > limit && <MoreRooms dark onClick={handleMoreClick} />}
        <p>Try another date</p>
        <HotelHeaderOptionsPanel left>
          <HotelFiltersContainer left>
            <HotelCalendar
              onChangeDateCallback={handleDateQuery}
              lightMode
              startDateId="startDateInputIdRooms"
              endDateId="endDateInputIdRooms"
              initialDates={{
                startDate: fromDate || new Date(),
                endDate: toDate || null,
              }}
            />
          </HotelFiltersContainer>
          <HotelAccommodationContainer align="left">
            <HotelControlsContent>
              <HotelLabel>Adults</HotelLabel>
              <HotelSelect onChange={handleAdultChange} defaultValue={selectAdult} data={selectAdultOptions} />
            </HotelControlsContent>
            <HotelControlsContent>
              <HotelLabel>Children</HotelLabel>
              <HotelSelect onChange={handleChildrenChange} defaultValue={selectChildren} data={selectChildrenOptions} />
            </HotelControlsContent>
          </HotelAccommodationContainer>
          {parseInt(selectChildren) > 0 && (
            <ChildrenAges>
              <HotelAccommodationContainer align="left">
                {Array.from({ length: parseInt(selectChildren) }, (v, index) => (
                  <HotelControlsContent key={`child-ages-rooms-${index}`}>
                    <HotelLabel>Child {index + 1}</HotelLabel>
                    <ChildSelect
                      onChange={handleChildAgeChange}
                      value={childAgesArray[index]}
                      dataIndex={index}
                      data={selectChildAgeOptions}
                    />
                  </HotelControlsContent>
                ))}
              </HotelAccommodationContainer>
            </ChildrenAges>
          )}
          <HotelSearchButton outline variant="secondary" disabled={!enableHotelSearch} onClick={handleSearch}>
            Search
          </HotelSearchButton>
        </HotelHeaderOptionsPanel>
      </RoomsSection>
    </RoomStyles>
  );
};

export default Rooms;
