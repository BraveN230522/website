import styled from '@emotion/styled';
import Button from '@components/common/Form/Button';

const VisibilityContainer = styled.div`
  transition: all 0.25s ease-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const BookTicketsHeader = styled(VisibilityContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 21px;
  }

  span {
    cursor: pointer;
  }
`;

const BookTicketContainer = styled.section`
  position: relative;
  max-width: 467px;
  width: 100%;
  border: solid 1px ${({ theme }) => theme.colors.stone};
  border-radius: 8px;
`;

const BookTicketBox = styled.article`
  max-height: 665px;
  padding: 24px;
  overflow: auto;
`;

const TicketContainer = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.colors.stone};
  padding-bottom: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  }
`;

const TicketTextContainer = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

const TicketItem = styled.p`
  margin: 0;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.24px;
  font-weight: 500;
`;

const TicketDescription = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  color: ${({ theme }) => theme.colors.browGray};
  font-weight: 500;
`;

const TicketButton = styled(Button)`
  padding-left: 2px;
  padding-right: 2px;
  height: 39px;
  width: inherit;
  min-width: 134px;

  ${({ theme }) =>
    theme.generateBreakpoint(
      314,
      `
    padding-left: 10px;
    padding-right: 10px;
  `
    )}
`;

const BookTicketsModalWrapper = styled.article`
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const BookTicketsModalClose = styled.div`
  position: absolute;
  top: -30px;
  cursor: pointer;
  display: inline-block;
`;

export {
  BookTicketContainer,
  BookTicketsHeader,
  BookTicketBox,
  BookTicketsModalClose,
  BookTicketsModalWrapper,
  TicketContainer,
  TicketTextContainer,
  TicketItem,
  TicketDescription,
  VisibilityContainer,
  TicketButton,
};
