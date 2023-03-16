import styled from '@emotion/styled';

import Hero from '@components/Layout/Hero';
import Header from '@components/Layout/Header';
import Offers from '@components/common/Offers';

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

const HotelSection = styled(Offers)`
  &:nth-of-type(1) {
    margin: 0 auto 30px;
  }
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

const PopularSportingCitiesStyles = styled.div`
  margin-bottom: 56px;
`;

export { HeroWithSpacing, HotelSection, SubTitle, HotelHeader, PopularSportingCitiesStyles };
