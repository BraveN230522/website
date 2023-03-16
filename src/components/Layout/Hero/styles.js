import styled from '@emotion/styled';

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  justify-content: ${({ direction }) => direction};
  text-align: center;
  ${({ textDirection }) =>
    textDirection &&
    `
    text-align: ${textDirection};
  `};
`;

const HeroTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;

  svg {
    margin-left: 20px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 41px;
  font-family: ${({ theme }) => theme.fonts.DINAlternateBold};
  color: ${({ theme, dark }) => (dark ? theme.colors.black : theme.colors.white)};
  font-stretch: normal;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.22;
  margin-bottom: 12px;
  width: 100%;

  ${({ theme }) => theme.media.phone`
   margin: 0 0 16px; 
   font-size: 32px;

   span {
     display: block;
     font-size: 32px;
   }
  `}

  ${({ theme }) =>
    theme.generateBreakpoint(
      365,
      `
        font-size: 31px;

        span {
          font-size: 31px;
        }
      `
    )}

  span {
    color: ${({ theme }) => theme.colors.swiamBlue};
  }
`;

const HeroSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 19px;
  font-weight: 400;
  text-align: center;
  margin: 0;

  ${({ theme }) => theme.media.phone`
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
  `}
`;

const HeroDetails = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  padding: 0 150px 0 150px;

  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

const HeroWrapper = styled.div``;

const RatingHeroWrapper = styled.div`
  svg {
    margin-left: 0 !important;
  }
  .widget-ratings {
    min-width: 140px;
    top: -5px;
  }
`;

export { HeroContainer, HeroTitleWrapper, HeroTitle, HeroSubTitle, HeroDetails, HeroWrapper, RatingHeroWrapper };
