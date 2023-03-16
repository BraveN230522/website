import styled from '@emotion/styled';

import Hero from '@components/Layout/Hero';
import Header from '@components/Layout/Header';
import Offers from '@components/common/Offers';
import FeaturedTickets from '@components/common/FeaturedTickets';
import BookHotelsSuggestions from '@components/common/HotelsSuggestions';

const HotelHeader = styled(Header)`
  min-height: 556px;
`;

const HeroWithSpacing = styled(Hero)`
  margin-bottom: 106px;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.DINAlternateBold};
    font-size: 41px;
    font-weight: 400;
    line-height: 50px;
  }

  ${({ theme }) => theme.media.phone`
    margin-bottom: 34px;
  `}
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 22px;
  font-weight: 400;
  line-height: 29px;
  padding: 0 15px;
  text-align: center;

  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

const HotelSection = styled(Offers)`
  margin: 0 auto 20px;
`;

const HotelsSuggestionSection = styled(BookHotelsSuggestions)`
  margin-top: 0px;
  padding-left: 12px;
  padding-right: 12px;
`;

const HotelFeaturedTickets = styled(FeaturedTickets)`
  ${({ theme }) => theme.setContainer()};
  margin: 0 auto 30px;
`;

const LoadingContent = styled.div`
  ${({ theme }) => theme.setContainer()};

  padding-left: 60px;
  padding-right: 60px;
`;

export {
  HeroWithSpacing,
  HotelSection,
  SubTitle,
  HotelHeader,
  LoadingContent,
  HotelFeaturedTickets,
  HotelsSuggestionSection,
};
