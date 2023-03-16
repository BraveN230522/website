import React from 'react';

import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';

import {
  TopGuestsSection,
  TopGuestsContent,
  TopGuestIniitialContent,
  TopGuestIniitialText,
  TopGuestDetails,
  TopGuestDetailsText,
  TopGuestRatingContent,
  TopGuestRating,
  TopGuestFeedbackContent,
  MoreTopGuests,
} from './styles';

const verifyRating = rating => {
  if (rating >= 8) return 'success';
  if (rating >= 6 && rating < 8) return 'warning';
};

const TopGuestMobileSection = ({ item }) => (
  <TopGuestsContent>
    <TopGuestDetails>
      <TopGuestIniitialContent>
        <TopGuestIniitialText>{item.initials}</TopGuestIniitialText>
      </TopGuestIniitialContent>
      <TopGuestDetailsText variant="name">{item.name}</TopGuestDetailsText>
      <TopGuestDetailsText variant="stay">Stayed {item.date}</TopGuestDetailsText>
    </TopGuestDetails>

    <TopGuestFeedbackContent>
      <TopGuestDetailsText variant="feedback">{item.feedback}</TopGuestDetailsText>
      <TopGuestRatingContent bgColor={verifyRating(item.rating)}>
        <TopGuestRating>{item.rating}</TopGuestRating>
      </TopGuestRatingContent>
    </TopGuestFeedbackContent>
  </TopGuestsContent>
);

const TopGuestDesktopSection = ({ item }) => (
  <TopGuestsContent>
    <TopGuestIniitialContent>
      <TopGuestIniitialText>{item.initials}</TopGuestIniitialText>
    </TopGuestIniitialContent>
    <TopGuestDetails>
      <TopGuestDetailsText variant="name">{item.name}</TopGuestDetailsText>
      <TopGuestDetailsText variant="stay">Stayed {item.date}</TopGuestDetailsText>
      <TopGuestDetailsText variant="feedback">{item.feedback}</TopGuestDetailsText>
    </TopGuestDetails>
    <TopGuestRatingContent bgColor={verifyRating(item.rating)}>
      <TopGuestRating>{item.rating}</TopGuestRating>
    </TopGuestRatingContent>
  </TopGuestsContent>
);

const TopGuests = ({ className, guests, title }) => {
  const [isMobile] = useDefaultMediaQueries();

  return (
    <>
      <TopGuestsSection className={className} grid columns="2" title={title}>
        {Boolean(guests) &&
          guests.map((item, index) =>
            isMobile ? (
              <TopGuestMobileSection key={index} item={item} />
            ) : (
              <TopGuestDesktopSection key={index} item={item} />
            )
          )}
      </TopGuestsSection>

      <MoreTopGuests dark />
    </>
  );
};

export default TopGuests;
