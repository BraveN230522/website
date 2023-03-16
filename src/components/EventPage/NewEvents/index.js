import React from 'react';
// import VenueMapImage from '@images/venue-map.png';

import NRLImage from '@images/nrl-seating-map.jpg';
import NRLBanner from '@images/nrl-Banner.jpg';

import NRLOrigin2Image from '@images/nrl-origin-2-seat-map.jpg';
import NRLOrigin2Banner from '@images/nrl-origin-2-footer.jpg';

import NRLMagicRoundSeatMapImage from '@images/NRL-MR-Seating-Map-portrait.jpg';
import NRLMagicRoundBannerImage from '@images/magic-round-banner.jpg';

import NRLAmpolOriginSeatMapImage from '@images/nrl-ampol-origin-seatmap.jpg';
import NRLAmpolOriginBannerImage from '@images/nrl-ampol-origin-banner.jpg';

import SeatMap194595 from '@images/Ticket-page-bris1.jpg';
import Banner194595 from '@images/1-banner-Gabba.jpg';
import SeatMap194596 from '@images/2-Seatmap-AO.jpg';
import Banner194596 from '@images/2-banner-AO.jpg';
import SeatMap194597 from '@images/3-Seatmap-MCG.jpg';
import Banner194597 from '@images/3-banner-MCG.jpg';
import SeatMap194598 from '@images/4-Seatmap-SCG.jpg';
import Banner194598 from '@images/4-banner-SCG.jpg';
import SeatMap194599 from '@images/5-Seatmap-Optus.jpg';
import Banner194599 from '@images/5-banner-Optus.jpg';
import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';
import ContentCarousel from '../../common/ContentCarousel';

import BookTickets from './BookTickets';
import {
  NewEventsContainer,
  NewEventsFooter,
  NewEventsSeatMapImage,
  NewEventsVenueImage,
  FeaturedEventHeader,
  FeaturedEventDetails,
  FeaturedEventIntro,
  FeaturedEventSponsorImage,
  FeaturedEventSponsorText,
  FeaturedEventPackageOptions,
  TicketClass,
  TicketClassImage,
  TicketClassContainer,
  TicketClassText,
  TicketPurchaseConditions,
  FeaturedEventButton,
} from './styles';
import NoTicketsAvailable from './NoTicketsAvailable';

const customEventData = {
  186376: {
    seatMap: NRLImage,
    banner: NRLBanner,
    bannerAlt: 'Image of NRL All Stars Event at Queensland Country Bank Stadium',
    footerText: 'Sports Where I Am is an Authorised Travel partner of the NRL',
  },
  191608: {
    seatMap: NRLOrigin2Image,
    banner: NRLOrigin2Banner,
    bannerAlt: 'Image of NRL Ampol State of Origin II Event',
    bannerStyle: { width: '450px' },
    footerText: 'Sports Where I Am is an Authorised Travel partner of the NRL',
  },
  191706: {
    seatMap: NRLAmpolOriginSeatMapImage,
    banner: NRLAmpolOriginBannerImage,
    bannerAlt: 'Image of NRL Ampol State of Origin Event',
    footerText: 'Sports Where I Am is an Authorised Travel partner of the NRL',
  },
  191708: {
    seatMap: NRLMagicRoundSeatMapImage,
    banner: NRLMagicRoundBannerImage,
    bannerAlt: 'Image of NRL Magic Round Event',
    footerText: 'Sports Where I Am is an Authorised Travel partner of the NRL',
  },
  191740: {
    seatMap: NRLMagicRoundSeatMapImage,
    banner: NRLMagicRoundBannerImage,
    bannerAlt: 'Image of NRL Magic Round Event',
    footerText: 'Sports Where I Am is an Authorised Travel partner of the NRL',
  },
  191741: {
    seatMap: NRLMagicRoundSeatMapImage,
    banner: NRLMagicRoundBannerImage,
    bannerAlt: 'Image of NRL Magic Round Event',
    footerText: 'Sports Where I Am is an Authorised Travel partner of the NRL',
  },
  194595: {
    seatMap: SeatMap194595,
    banner: Banner194595,
    bannerAlt: 'Image of Cricket Australia details for Brisbane (Gabba)',
    footerText: (
      <span>
        Ticket and Entry Conditions apply to all tickets and attendance at the 2021-22 Vodafone Ashes Series. These
        Conditions are available from Sports Where I Am on request or at{' '}
        <a href="https://cricket.com.au" target="_blank">
          www.cricket.com.au
        </a>
        . The Cricket Australia shield device is a trade mark of, and used under licence from, the owner Cricket
        Australia by whom all copyright and other rights of reproduction are reserved.
      </span>
    ),
  },
  194596: {
    seatMap: SeatMap194596,
    banner: Banner194596,
    bannerAlt: 'Image of Cricket Australia details for Adelaide (Adelaide Oval)',
    footerText: (
      <span>
        Ticket and Entry Conditions apply to all tickets and attendance at the 2021-22 Vodafone Ashes Series. These
        Conditions are available from Sports Where I Am on request or at{' '}
        <a href="https://cricket.com.au" target="_blank">
          www.cricket.com.au
        </a>
        . The Cricket Australia shield device is a trade mark of, and used under licence from, the owner Cricket
        Australia by whom all copyright and other rights of reproduction are reserved.
      </span>
    ),
  },
  194597: {
    seatMap: SeatMap194597,
    banner: Banner194597,
    bannerAlt: 'Image of Cricket Australia details for Melbourne (MCG)',
    footerText: (
      <span>
        Ticket and Entry Conditions apply to all tickets and attendance at the 2021-22 Vodafone Ashes Series. These
        Conditions are available from Sports Where I Am on request or at{' '}
        <a href="https://cricket.com.au" target="_blank">
          www.cricket.com.au
        </a>
        . The Cricket Australia shield device is a trade mark of, and used under licence from, the owner Cricket
        Australia by whom all copyright and other rights of reproduction are reserved.
      </span>
    ),
  },
  194598: {
    seatMap: SeatMap194598,
    banner: Banner194598,
    bannerAlt: 'Image of Cricket Australia details for Sydney (SCG)',
    footerText: (
      <span>
        Ticket and Entry Conditions apply to all tickets and attendance at the 2021-22 Vodafone Ashes Series. These
        Conditions are available from Sports Where I Am on request or at{' '}
        <a href="https://cricket.com.au" target="_blank">
          www.cricket.com.au
        </a>
        . The Cricket Australia shield device is a trade mark of, and used under licence from, the owner Cricket
        Australia by whom all copyright and other rights of reproduction are reserved.
      </span>
    ),
  },
  194599: {
    seatMap: SeatMap194599,
    banner: Banner194599,
    bannerAlt: 'Image of Cricket Australia details for Perth (Optus Stadium)',
    footerText: (
      <span>
        Ticket and Entry Conditions apply to all tickets and attendance at the 2021-22 Vodafone Ashes Series. These
        Conditions are available from Sports Where I Am on request or at{' '}
        <a href="https://cricket.com.au" target="_blank">
          www.cricket.com.au
        </a>
        . The Cricket Australia shield device is a trade mark of, and used under licence from, the owner Cricket
        Australia by whom all copyright and other rights of reproduction are reserved.
      </span>
    ),
  },
};

const NewEvents = ({ event, cartId }) => {
  let purchaseBlock;
  const handlePurchase = () => purchaseBlock.scrollIntoView();
  const [isMobile, isTablet] = useDefaultMediaQueries();

  const optionPrice = event?.fromPrice?.amount || event?.price?.amount;

  const renderContentCarousel = () => {
    return (
      <ContentCarousel
        interestId={event?.id}
        interestType="event"
        shouldRefetch
        refetchInterestId={0}
        refetchInterestType="homepage"
      />
    );
  };

  const renderSeatImage = () => {
    if (event.url) {
      return (
        <div>
          <NewEventsSeatMapImage src={event.url} />
        </div>
      );
    }

    if (customEventData[event.eventId]) {
      return (
        <div>
          <NewEventsSeatMapImage
            style={customEventData[event.eventId].style || {}}
            src={customEventData[event.eventId].seatMap}
          />
        </div>
      );
    }

    return <></>;
  };

  const renderHeader = () => {
    if (isMobile) {
      return (
        <FeaturedEventHeader padding="5px 10%" direction="column" width="100%">
          <FeaturedEventIntro>
            <h3>{event.featuredData.introductionTag}</h3>
            <p>{event.featuredData.introductionBody}</p>
          </FeaturedEventIntro>
          <FeaturedEventDetails width="100%">
            <h4>{event.name}</h4>
            <p>{event.venue?.venueName || 'NO VENUE NAME SUPPLIED'}</p>
            <p>{event.geo?.city || 'NO CITY NAME SUPPLIED'}</p>
            <FeaturedEventButton onClick={handlePurchase}>Purchase</FeaturedEventButton>
          </FeaturedEventDetails>
        </FeaturedEventHeader>
      );
    }

    return (
      <FeaturedEventHeader>
        <FeaturedEventIntro>
          <h3>{event.featuredData.introductionTag}</h3>
          <p>{event.featuredData.introductionBody}</p>
        </FeaturedEventIntro>
        <FeaturedEventDetails>
          <h4>{event.name}</h4>
          <p>{event.venue?.venueName || 'NO VENUE NAME SUPPLIED'}</p>
          <p>{event.geo?.city || 'NO CITY NAME SUPPLIED'}</p>
          <FeaturedEventButton onClick={handlePurchase}>Purchase</FeaturedEventButton>
        </FeaturedEventDetails>
      </FeaturedEventHeader>
    );
  };

  const renderTickets = ticketClass => {
    if (isMobile || isTablet) {
      return (
        <TicketClass direction="column">
          <TicketClassImage src={ticketClass.ticketClassImage} width="100%" />
          <div style={{ marginTop: '0.75rem' }}>
            <TicketClassText width="100%" dangerouslySetInnerHTML={{ __html: ticketClass.ticketClassDescription }} />
            <FeaturedEventButton onClick={handlePurchase} widthPercentage="100%" fontSize={14}>
              View availability
            </FeaturedEventButton>
          </div>
        </TicketClass>
      );
    }

    return (
      <TicketClass justify="space-between">
        <div>
          <TicketClassText dangerouslySetInnerHTML={{ __html: ticketClass.ticketClassDescription }} />
          <FeaturedEventButton onClick={handlePurchase} width={205} fontSize={14}>
            View availability
          </FeaturedEventButton>
        </div>
        <TicketClassContainer src={ticketClass.ticketClassImage} />
      </TicketClass>
    );
  };

  return event.featuredEvent ? (
    <>
      {renderHeader()}
      <FeaturedEventSponsorImage src={event.featuredData.sponsorImage} />
      <FeaturedEventSponsorText>{event.featuredData.sponsorDescription}</FeaturedEventSponsorText>
      <FeaturedEventPackageOptions padding={isMobile ? '15px 5%' : false}>
        <h3>Sports Where I Am package options</h3>
        {event.featuredData.ticketClasses.map(ticketClass => renderTickets(ticketClass))}
      </FeaturedEventPackageOptions>
      <NewEventsContainer ref={el => (purchaseBlock = el)}>
        {renderSeatImage()}
        {(event.status?.toUpperCase() === 'ERROR' && <NoTicketsAvailable />) || (
          <BookTickets cartId={cartId} event={event} />
        )}
      </NewEventsContainer>
      <TicketPurchaseConditions>
        <h3>Ticket purchase conditions</h3>
        {event.featuredData.ticketPurchaseConditions}
        {event.featuredData.extraText1Tag && event.featuredData.extraText1Body && (
          <>
            <h4>{event.featuredData.extraText1Tag}</h4>
            <p>{event.featuredData.extraText1Body}</p>
          </>
        )}
        {event.featuredData.extraText2Tag && event.featuredData.extraText2Body && (
          <>
            <h4>{event.featuredData.extraText2Tag}</h4>
            <p>{event.featuredData.extraText2Body}</p>
          </>
        )}
        {event.featuredData.extraText3Tag && event.featuredData.extraText3Body && (
          <>
            <h4>{event.featuredData.extraText3Tag}</h4>
            <p>{event.featuredData.extraText3Body}</p>
          </>
        )}
      </TicketPurchaseConditions>
      <br />
      {renderContentCarousel()}
    </>
  ) : (
    <>
      <NewEventsContainer>
        {renderSeatImage()}

        {(event.status?.toUpperCase() === 'ERROR' && <NoTicketsAvailable />) || (
          <BookTickets cartId={cartId} event={event} />
        )}
      </NewEventsContainer>

      {customEventData[event.eventId] && (
        <NewEventsFooter>
          <NewEventsVenueImage
            src={customEventData[event.eventId].banner}
            alt={customEventData[event.eventId].bannerAlt}
            style={customEventData[event.eventId].bannerStyle || {}}
          />
          {customEventData[event.eventId].footerText && (
            <>
              <br />
              <p style={{ maxWidth: '800px', display: 'inline-block' }}>{customEventData[event.eventId].footerText}</p>
            </>
          )}
        </NewEventsFooter>
      )}
      <br />
      {renderContentCarousel()}
    </>
  );
};

export default NewEvents;
