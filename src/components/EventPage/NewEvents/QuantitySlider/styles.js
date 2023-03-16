import styled from '@emotion/styled';
import Slider from 'react-slick';
import Button from '@components/common/Form/Button';

const QuantitySliderWrapper = styled(Slider)`
  width: 90%;
  margin: 1.4rem auto 1rem;

  div {
    outline: none;
  }

  .slick-next:before,
  .slick-prev:before {
    color: ${({ theme }) => theme.colors.normalGrey};
  }
`;

const TicketDetailQuantity = styled(Button)`
  width: 52px;
  height: 52px;
  border-radius: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.swiamBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      width: 45px;
      height: 45px;
    `
    )};

  ${({ theme }) =>
    theme.generateBreakpoint(
      375,
      `
      width: 40px;
      height: 40px;
    `
    )};

  ${({ theme }) =>
    theme.generateBreakpoint(
      320,
      `
    width: 35px;
    height: 35px;
  `
    )};
`;

export { QuantitySliderWrapper, TicketDetailQuantity };
