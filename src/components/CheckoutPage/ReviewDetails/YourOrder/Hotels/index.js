import React from 'react';
import { adopt } from 'react-adopt';
import CheckoutSection from '@components/CheckoutPage/Common/CheckoutSection';
import Carousel from '@brainhubeu/react-carousel';
import { HotelsCloseToGameQuery } from '@components/common/HotelsSuggestions/hotel-query';
import moment from 'moment';
import console from '@utils/console';
import Eticket from '../Eticket';
import {
  OrderGameTitle,
  HotelSection,
  OrderOffers,
  OrderAccordion,
  OrderText,
  OrderFooterText,
  OrderContainerDetails,
  OrderSection,
} from '../styles';
import OrderGuestForm from './OrderGuestForm';
import TotalPrice from '../../../Common/TotalPrice';

const Data = adopt({
  hotelsNearTheGame: ({ render, eventId }) => (
    <HotelsCloseToGameQuery eventId={eventId}>{render}</HotelsCloseToGameQuery>
  ),
});

export default function Hotels({
  items,
  events,
  activeEvent,
  afterRemoveClick,
  onSelectedHotelEventChange,
  qualifiers,
  setQualifiers,
}) {
  const getQualifier = item => {
    // all item ids should be in the qualifiers except one, and that's the one that was just created
    const existingQualifier = qualifiers?.find(qualifier => qualifier.itemId && qualifier.itemId === item?.id);
    if (existingQualifier !== undefined) return existingQualifier;
    // console.log(item, qualifiers);
    const newQualifier = qualifiers?.find(qualifier => qualifier.itemId === undefined);
    if (!newQualifier) return console.error('Qualifier not found for item', item, qualifiers);
    newQualifier.itemId = item?.id;
    setQualifiers(qualifiers);
    return newQualifier;
  };

  return (
    <>
      <HotelSection withBorder={items.length}>
        <CheckoutSection title="Hotels" />

        {activeEvent && (
          <Data eventId={activeEvent.eventId}>
            {({ hotelsNearTheGame: hotels }) => (
              <OrderAccordion
                hasSelect
                selectItems={events}
                onSelectChange={onSelectedHotelEventChange}
                activeSelectItem={activeEvent}
                icon="hotel"
                data={hotels}
                title={`View Hotels near ${activeEvent.label}`}
              >
                <Carousel slidesPerPage={3} arrows infinite>
                  {hotels?.map(item => (
                    <OrderOffers
                      key={`hotel-${item?.hotelID}`}
                      average={0} // the rate is not comming from API
                      price={item?.fromPrice?.amount}
                      discount={20}
                      title={item?.hotelName}
                      subtitle={item?.venueAddress}
                      image={item?.hotelImage}
                      hidePrice={!item?.fromPrice}
                      link={`/hotels/${item?.hotelID}`}
                    />
                  ))}
                </Carousel>
              </OrderAccordion>
            )}
          </Data>
        )}

        {items.map((item, index) => {
          console.log('hisu', item);
          const startDate = moment(item?.product?.dateTimeStatus?.startDateTime).startOf('day');
          const endDate = moment(item?.product?.dateTimeStatus?.endDateTime).startOf('day');
          const nightCount = endDate.diff(startDate, 'days');
          const qualifiers = getQualifier(item);

          const childrenCountRegex = /^(?!A).A([0-9]*)C/g;
          const group = childrenCountRegex.exec(qualifiers?.counts);
          const guestTypeCounts = {
            adults: parseInt(qualifiers?.counts),
            children: parseInt(group[1]),
          };
          let address = item?.product?.venueDetails?.address?.address1;
          address +=
            item?.product?.venueDetails?.address?.address2 && item?.product?.venueDetails?.address?.address2 !== ''
              ? `, ${item?.product?.venueDetails?.address?.address2}`
              : '';
          address += `, ${item?.product?.venueDetails?.address?.city}`;

          return (
            <OrderSection key={`${item?.product?.id}${item?.product?.selectedVariant?.id}-${index}`}>
              <OrderContainerDetails>
                <OrderGameTitle>{item?.product?.name.replace(/^[0-9]+\:/, '')}</OrderGameTitle>
                <Eticket
                  afterRemoveClick={afterRemoveClick}
                  borderBottom
                  data={{
                    lineItemId: item?.id,
                    ...item?.product,
                    seats: item?.product?.selectedVariant?.description,
                    qualifiers: getQualifier(item),
                  }}
                  hotel
                  numberOfItems={item?.quantity}
                  key={item?.id}
                />
              </OrderContainerDetails>
              <OrderText>{address}</OrderText>
              <OrderText>{item?.product?.selectedVariant?.name}</OrderText>
              <OrderText>
                {nightCount} {nightCount === 1 ? 'night' : 'nights'} / {guestTypeCounts?.adults}{' '}
                {guestTypeCounts?.adults === 1 ? 'adult' : 'adults'} / {guestTypeCounts?.children}{' '}
                {guestTypeCounts?.children === 1 ? 'child' : 'children'}
              </OrderText>
              <OrderText>
                {item?.product?.dateTimeStatus?.startDateTime} - {item?.product?.dateTimeStatus?.endDateTime}
              </OrderText>
              <OrderGuestForm qualifiers={getQualifier(item)} itemId={item?.id} />
            </OrderSection>
          );
        })}
      </HotelSection>

      <TotalPrice label="Total for your hotels" items={items} />
      <OrderFooterText>
        Local charges (taxes and fees) if applicable, will be payable direct to the hotel. No additional information is
        available from the hotel.
      </OrderFooterText>
      <OrderFooterText>
        <i>
          Paid through HOTELBEDS USA, INC acting as agent for the service operating company, details of which can be
          provided upon request. VAT: 5922952685
        </i>
      </OrderFooterText>
    </>
  );
}
