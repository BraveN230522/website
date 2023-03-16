import styled from '@emotion/styled';

import Header from '@components/Layout/Header';
import FeaturedTickets from '@components/common/FeaturedTickets';
import Venues from '@components/common/Venues';
import Hero from '@components/Layout/Hero';
import Calendar from '@components/common/Form/Calendar';

const CustomHeader = styled(Header)`
  ${({ theme }) => theme.media.phone`
    min-height: 400px;
  `}
  p {
    text-shadow: 0 0 5px black;
  }
  > figure img {
    opacity: 0.8;
  }
`;

const HeroWithSpacing = styled(Hero)`
  /* margin-bottom: 106px; */

  ${({ theme }) => theme.media.phone`
    // margin-bottom: 34px;
  `}
`;

const CityCalendar = styled(Calendar)`
  .DateRangePicker.DateRangePicker_1 {
    max-width: 339px;
  }
  .DateRangePicker_picker.DateRangePicker_picker_1 {
    ${({ theme }) =>
      theme.generateBreakpoint(
        540,
        `
        left: -75px  !important;
        width: 339px !important;
        `
      )};
  }
  /* .CalendarMonthGrid {
    width: 339px !important;
  } */
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

const CityVenues = styled(Venues)`
  margin-bottom: 70px;

  article {
    overflow: scroll;
    flex-wrap: nowrap;
    -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  article::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.media.phone`
    padding: 0 12px;
  `}
`;

const CustomFeaturedTickets = styled(FeaturedTickets)`
  ${({ theme }) => theme.media.phone`
    h2 {
      margin-top: 0;
    }
  `}
  background: linear-gradient(transparent 0%, #ddd 1%,#ffffff 4%);
`;

export { CustomHeader, HeroWithSpacing, SubTitle, CityCalendar, CustomFeaturedTickets, CityVenues };
