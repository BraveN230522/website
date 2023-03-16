import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';

const HeroWithSpacing = styled(Hero)`
  max-width: 100%;
  padding-bottom: 70px;
  text-align: ${({ left }) => (left ? 'left' : 'center')};

  ${({ theme, background }) =>
    background
      ? theme.generateBreakpoint(
          768,
          `
     background: linear-gradient(0deg, ${theme.colors.white} 0%, rgba(0, 0, 0, 0.0001) 40%);
  `
        )
      : ''}

  ${({ background }) =>
    background
      ? `background: linear-gradient(0deg, ${({ theme }) => theme.colors.white} 0%, rgba(0, 0, 0, 0.0001) 70%);`
      : ''}
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DetailsRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  ${({ direction }) =>
    direction === 'center' &&
    `
    justify-content: center;
  `};
  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
  svg {
    width: 16px;
    margin-left: -2px;
    margin-right: 6px;
  }
`;

const HorizontalSpace = styled.span`
  width: 16px;
  margin-right: 6px;
`;

const Details = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  letter-spacing: normal;
  padding: 0;
  margin: 0;
  margin-bottom: 6px;
  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

export { HeroWithSpacing, DetailsWrapper, DetailsRow, Details, HorizontalSpace };
