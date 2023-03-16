import styled from '@emotion/styled';

import CheckoutSection from '../CheckoutSection';

const TotalPriceStyles = styled(CheckoutSection)`
  article {
    display: block;
    margin-bottom: 27px;
  }
`;

const TotalPriceDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BookingFeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const TotalPriceContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Span = styled.span`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.09px;
  margin-bottom: 6px;

  ${({ theme }) => theme.media.phone`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.08px;
  `}
`;

const TotalPriceText = styled.p`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 24px;
  font-weight: ${({ light }) => (light ? 300 : 600)};
  line-height: 32px;
  letter-spacing: -0.16px;
  margin: 0;

  ${({ theme }) => theme.media.phone`
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.12px;
  `}
`;

export { TotalPriceStyles, TotalPriceDetailsContainer, BookingFeeContainer, TotalPriceContainer, Span, TotalPriceText };
