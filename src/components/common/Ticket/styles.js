import styled from '@emotion/styled';

const TicketStyles = styled.div`
  max-width: 225px;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

const TicketFigure = styled.figure`
  position: relative;
  margin: 0;

  &:hover figcaption {
    box-shadow: inset -60px 0 0px ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.swiamBlue};
    transform: scale(0.9);
  }
`;

const TicketImage = styled.img`
  width: 100%;
  height: 137px;
  object-fit: cover;
  border-radius: 8px;
`;

const TicketLegend = styled.figcaption`
  position: absolute;
  top: 6px;
  right: 11px;
  width: 57px;
  height: 55px;
  border-radius: 27.6px;
  background: ${({ theme }) => theme.colors.swiamBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.Helvetica};
  font-size: 12.4px;
  letter-spacing: -0.09px;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s cubic-bezier(1, -0.45, 1, 1), color 0.2s 0.3s ease-in, transform 0.3s ease-out;
  box-shadow: inset 0 0 0px ${({ theme }) => theme.colors.white};
  text-align: center;

  span {
    font-size: 14.4px;
    letter-spacing: -0.13px;
  }
`;

const TicketTitle = styled.p`
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.11px;
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.black)};
  margin-top: 8px;
  opacity: 0.8;
`;

const TicketSubtitle = styled.p`
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.lightGrey)};
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
  letter-spacing: -0.1px;
  margin: 0;
  margin-bottom: 8px;
`;

const TicketPriceContainer = styled.div`
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.normalGrey)};
  display: flex;
  font-size: 12px;
  align-items: center;
  letter-spacing: -0.09px;
  line-height: 17px;

  span {
    font-weight: 600;
  }

  span,
  p {
    margin-left: 6px;
  }
`;

const TicketAverage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.positive};
  width: 27px;
  height: 17px;
  border-radius: 1.6px;
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  line-height: 17px;
`;

export {
  TicketStyles,
  TicketTitle,
  TicketSubtitle,
  TicketAverage,
  TicketPriceContainer,
  TicketFigure,
  TicketLegend,
  TicketImage,
};
