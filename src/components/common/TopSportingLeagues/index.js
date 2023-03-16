import React from 'react';
import { adopt } from 'react-adopt';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import TopLeaguesQuery from './queries';
import HorizontalCardScroll from '../HorizontalCardScroll';
import { TopSportingWrapper } from './styles';

const Data = adopt({
  data: ({ render, venueId, fromDate }) => (
    <TopLeaguesQuery venueId={venueId} fromDate={fromDate}>
      {render}
    </TopLeaguesQuery>
  ),
});

const TopSportingLeagues = ({ title }) => {
  return (
    <Data>
      {({ data }) => {
        const parsedCards =
          data &&
          data.map(card => {
            return {
              id: card.leagueId,
              img: card.cardImageURL,
              name: card.leagueName,
              href: formatSlugSegments(
                LINK_ABSOLUTE,
                'sport',
                card?.sport?.sportName,
                'league',
                card.leagueAbbreviation
              ),
            };
          });
        return <HorizontalCardScroll title={title} cards={parsedCards} />;
      }}
    </Data>
  );
};

export default TopSportingLeagues;
