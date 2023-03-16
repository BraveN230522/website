import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';
import Header from '@components/Layout/Header';
import Calendar from '@components/common/Form/Calendar';
import FeaturedTickets from '../../common/FeaturedTickets';

const HeroWithSpacing = styled(Hero)`
  margin-bottom: 106px;

  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
  `}
`;

const VenueCalendar = styled(Calendar)`
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

const VenueFeaturedTicketsContainer = styled(FeaturedTickets)`
  margin: 0rem auto 39px;
  padding-bottom: 75px;
  &:after {
    display: ${({ light }) => (light ? 'none' : 'block')};
    background: rgba(0, 0, 0, 0.1);
  }

  &:before {
    background: ${({ theme }) => `linear-gradient(transparent, 70%, ${theme.colors.black} 100%);`};
  }
`;

const VenueHeader = styled(Header)`
  &:before {
    background: ${({ theme }) => `linear-gradient(transparent, 40%, ${theme.colors.black} 80%);`};
  }
`;

export { HeroWithSpacing, VenueHeader, SubTitle, VenueCalendar, VenueFeaturedTicketsContainer };
