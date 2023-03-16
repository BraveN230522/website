import { adopt } from 'react-adopt';
import React from 'react';
import styled from '@emotion/styled';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import { LeagueTeamsQuery } from './queries';
import HorizontalCardScroll from '../common/HorizontalCardScroll';

const Data = adopt({
  leagueTeams: ({ render, leagueId }) => <LeagueTeamsQuery leagueId={leagueId}>{render}</LeagueTeamsQuery>,
});

const StyledHorizontalCardScroll = ({ className, cards, title }) => (
  <HorizontalCardScroll className={className} cards={cards} title={title} />
);

const Styley = styled(StyledHorizontalCardScroll)`
  article {
    overflow-x: scroll;
    flex-wrap: nowrap;
    -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  article::-webkit-scrollbar {
    display: none;
  }
`;

const LeagueTeams = ({ leagueId, leagueName, fallbackImageUrl }) => {
  return (
    <Data leagueId={parseInt(leagueId, 10)}>
      {({ leagueTeams }) => {
        const parsedTeams =
          leagueTeams && leagueTeams.length
            ? leagueTeams.map(item => {
                return {
                  id: item?.teamID || '',
                  img: item?.photoURL || fallbackImageUrl || 'https://graphics.sportswhereiam.com/team/5857.jpg',
                  name: item?.teamName || '',
                  href: formatSlugSegments(LINK_ABSOLUTE, 'team', item.teamName),
                };
              })
            : [];
        return <Styley cards={parsedTeams} title={`Get tickets to other ${leagueName} teams`} />;
      }}
    </Data>
  );
};

export default LeagueTeams;
