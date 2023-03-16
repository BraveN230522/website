import styled from '@emotion/styled';

import Ticket from '@components/common/Ticket';

const OffersStyles = styled.section`
  background-color: ${({ dark, theme }) => (dark ? theme.colors.black : theme.colors.white)};
  margin: 56px auto;

  ${({ hideOnMobile, theme }) =>
    theme.generateBreakpoint(
      768,
      `
         display: ${hideOnMobile ? 'none' : 'block'};
         margin: 26px auto;
      `
    )};
`;

const OffersHeader = styled.header`
  ${({ theme }) => theme.setContainer()};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const OffersTitle = styled.h2`
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.black)};
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.15px;
`;

const OffersMore = styled.a`
  color: ${({ dark, theme }) => (dark ? theme.colors.white : theme.colors.black)};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.Helvetica};
  font-size: 13px;
  letter-spacing: -0.09px;
  opacity: 0.5;
`;

const OffersContent = styled.article`
  ${({ theme }) => theme.setContainer()};
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        width: 100%;
      `
    )}
`;

const OfferTicket = styled(Ticket)`
  width: calc(20% - 14px);
  margin-right: 17px;
  max-width: 100%;
  margin-bottom: 2rem;

  &:nth-of-type(5n + 5) {
    margin-right: 0;
  }

  ${({ theme }) => theme.media.phone`
    min-width: 225px;
    width: 225px;

    &:nth-of-type(5n + 5) {
      margin-right: 17px;
    }
  `}
`;

export { OffersStyles, OfferTicket, OffersTitle, OffersMore, OffersContent, OffersHeader };
