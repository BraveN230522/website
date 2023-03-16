import React from 'react';
import { adopt } from 'react-adopt';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import TicketsByLeagueQuery from './queries';
import HorizontalCardScroll from '../../common/HorizontalCardScroll';
import { TopSportingWrapper } from './styles';

const Data = adopt({
  data: ({ render, cityId }) => <TicketsByLeagueQuery cityId={cityId}>{render}</TicketsByLeagueQuery>,
});

const LeagueTicketsByCity = ({ title, cityId }) => {
  return (
    <Data cityId={cityId}>
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
        return (
          <TopSportingWrapper>
            <HorizontalCardScroll title={title} cards={parsedCards} />
          </TopSportingWrapper>
        );
      }}
    </Data>
  );
};

export default LeagueTicketsByCity;
