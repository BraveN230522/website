import React from 'react';
import Header from '@components/Layout/Header';
import moment from 'moment';
import {
  HeroWithSpacing,
  DetailsWrapper,
  DetailsRow,
  Details,
  HorizontalSpace,
  OrderWrapper,
  OrderNumber,
  SentTo,
} from './styles';
import ClockIcon from './ClockIcon';
import LocationIcon from './LocationIcon';
import BookingTicketsList from '../BookingTicketsList';

const HeaderSection = ({ headerData }) => {
  return (
    <Header dark carouselItems={[headerData]}>
      {({ title, bookingId, buyerEmail, headline, tickets, eventData, hotelData }) => (
        <>
          <>{console.log({ eventData })}</>
          <HeroWithSpacing direction="left" title={title} textDirection="left">
            <OrderWrapper>
              <OrderNumber>
                Your order number is: <span>{bookingId}</span>
              </OrderNumber>
              <SentTo>
                Your e-tickets will be sent to: <span>{buyerEmail}</span>
              </SentTo>
            </OrderWrapper>
            <DetailsWrapper>
              {eventData && eventData.dateTime && (
                <DetailsRow direction="left">
                  <ClockIcon />
                  <Details>
                    {moment
                      .unix(eventData.dateTime / 1000)
                      .utc()
                      .format('hh A z DD MMM YYYY')}
                  </Details>
                </DetailsRow>
              )}
              {!eventData.dateTime && (
                <>
                  {hotelData?.product?.dateTimeStatus?.startDateTime &&
                    hotelData?.product?.dateTimeStatus?.endDateTime && (
                      <DetailsRow direction="left">
                        <ClockIcon />
                        <Details>
                          {moment(hotelData?.product?.dateTimeStatus?.startDateTime).format('DD MMM YYYY')} -{' '}
                          {moment(hotelData?.product?.dateTimeStatus?.endDateTime).format('DD MMM YYYY')}
                        </Details>
                      </DetailsRow>
                    )}
                  <DetailsRow direction="left">
                    <LocationIcon />
                    <Details>{hotelData?.product?.name.replace(`${parseInt(hotelData.product.name)}:`, '')}</Details>
                  </DetailsRow>
                </>
              )}
              {eventData && eventData.venue && eventData.venue.venueName && (
                <DetailsRow direction="left">
                  <LocationIcon />
                  <Details>{eventData.venue.venueName}</Details>
                </DetailsRow>
              )}
              {eventData && eventData.venue && (
                <DetailsRow direction="left">
                  <HorizontalSpace />
                  <Details>{eventData.venue.venueAddress}</Details>
                </DetailsRow>
              )}
            </DetailsWrapper>

            {tickets.length > 1 && (
              <BookingTicketsList
                bookingId={bookingId}
                headline={headline}
                tickets={tickets}
                mergeData={headerData.mergeData}
              />
            )}
          </HeroWithSpacing>
        </>
      )}
    </Header>
  );
};

export default HeaderSection;
