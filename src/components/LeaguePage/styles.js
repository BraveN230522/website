import styled from '@emotion/styled';
import AutoComplete from '@components/common/AutoComplete';
import Hero from '@components/Layout/Hero';
import Button from '@components/common/Form/Button';
import FeaturedTickets from '@components/common/FeaturedTickets';
import VideoList from '@components/common/VideoList';
import Venues from '@components/common/Venues';
import Header from '@components/Layout/Header';

const LeagueHeader = styled(Header)`
  min-height: 570px;
`;

const HeroWithSpacing = styled(Hero)`
  div {
    justify-content: center;
  }

  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
  `}
`;

const CalendarContent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 12px;
`;

const SelectWhere = styled(Button)`
  height: 45px;
  margin-right: 12px;
  width: 180px;

  svg,
  use,
  path {
    stroke-width: 0;
  }

  g,
  use {
    transition: all 0.3s ease-in;
  }

  &:hover {
    svg,
    use,
    path,
    g {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;

const SelectWhereSearch = styled.input`
  width: 150px;
  height: 45px;
  border-radius: 22.5px;
  outline: 1px solid red;
  border: solid 2px #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
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

const Calendar = styled(Button)`
  height: 45px;
  width: 198px;
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

const LeagueFeaturedTickets = styled(FeaturedTickets)`
  margin: 0rem auto 39px;
  padding-bottom: 75px;
`;

const LeagueContainer = styled(Venues)`
  img {
    // margin-right: 111px;

    &:last-child {
      margin-right: 0;
    }
  }

  margin-bottom: 30px;
`;

const LeagueVideoList = styled(VideoList)`
  margin-bottom: 50px;
`;

export {
  HeroWithSpacing,
  CalendarContent,
  SelectWhere,
  SelectWhereTo,
  SelectWhereSearch,
  Calendar,
  SubTitle,
  LeagueHeader,
  LeagueContainer,
  LeagueFeaturedTickets,
  LeagueVideoList,
};
