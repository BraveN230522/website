import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';

const HeroWithSpacing = styled(Hero)`
  margin-bottom: 106px;

  ${({ theme }) => theme.media.phone`
    margin-bottom: 34px;
  `}
`;

const PopularSportingCitiesStyles = styled.div`
  margin-bottom: 56px;
`;

export { HeroWithSpacing, PopularSportingCitiesStyles };
