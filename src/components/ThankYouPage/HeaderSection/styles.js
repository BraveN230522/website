import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';

const HeroWithSpacing = styled(Hero)`
  overflow-x: hidden;
  max-width: 100%;
  padding-left: 106px;
  position: relative;
  padding-bottom: 64px;
  background: linear-gradient(0deg, ${({ theme }) => theme.colors.white} 0%, rgba(0, 0, 0, 0.0001) 70%);

  @media (max-width: 48em) {
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.colors.white} 0%, rgba(0, 0, 0, 0.0001) 100%)`};
    padding-left: 12px;
    padding-bottom: 10px;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 140px;
  ${({ theme }) => theme.media.phone`
    margin-bottom: 40px;
  `}
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
  text-align: left;
  letter-spacing: normal;

  padding: 0;
  margin: 0;
  margin-bottom: 6px;

  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 40px;
  ${({ theme }) => theme.media.phone`
  margin-bottom: 6px;
`}
`;

const OrderNumber = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 24px;
  letter-spacing: normal;

  span {
    font-weight: 900;
  }
`;

const SentTo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  letter-spacing: normal;

  ${({ theme }) => theme.media.phone`
    max-width: 70%;
    margin-bottom: 16px;
    span {
      font-weight: 900;
    }
  `}
`;

export { HeroWithSpacing, DetailsWrapper, DetailsRow, Details, HorizontalSpace, OrderWrapper, OrderNumber, SentTo };
