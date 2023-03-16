import styled from '@emotion/styled';

import Hero from '@components/Layout/Hero';
import Select from '@components/common/Form/Select';
import Venues from '@components/common/Venues';
import PopularPlayers from '@components/common/PopularPlayers';
import Header from '@components/Layout/Header';
import AutoComplete from '@components/common/AutoComplete';
import FeaturedTickets from '@components/common/FeaturedTickets';

const TeamHeader = styled(Header)`
  min-height: 570px;
`;

const TeamFeaturedTickets = styled(FeaturedTickets)`
  margin: 0rem auto 39px;
  padding-bottom: 75px;
`;

const HeroWithSpacing = styled(Hero)`
  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
  `}
`;

const CalendarContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    width: 198px;
  }
`;

const SelectWhere = styled(Select)`
  margin-right: 12px;

  ${({ theme }) => theme.generateBreakpoint(459, `margin-right:0; margin-bottom: 1rem;`)}

  width: 180px;
  text-align-last: center;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  padding: 0 166px;
  text-align: center;

  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

const SelectWhereTo = styled(AutoComplete)`
  margin-right: 16px;
  max-width: 180px;

  input {
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    max-width: 180px;

    ${({ theme }) => theme.media.phone`
      width: 100%;
      max-width: 100%;
    `};
  }

  ${({ theme }) => theme.media.phone`
    display: block;
    width: 100%;
    margin-bottom: 7px;
    margin-right: 12px;
  `};

  & > div:nth-of-type(2) {
    width: 320px;
    z-index: 1;

    .css-dt9btx-InnerWrapper {
      width: 100%;
      padding-right: 0;
    }

    ul {
      border: none;
    }
  }
`;

const TeamsContainer = styled(Venues)`
  img {
    margin-right: 111px;
  }

  img:last-child {
    margin-right: 0;
  }
`;

const TeamPopularPlayers = styled(PopularPlayers)`
  margin-top: 40px;
`;

export {
  TeamHeader,
  HeroWithSpacing,
  CalendarContent,
  TeamPopularPlayers,
  SelectWhere,
  SubTitle,
  TeamsContainer,
  SelectWhereTo,
  TeamFeaturedTickets,
};
