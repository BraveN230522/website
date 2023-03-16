import styled from '@emotion/styled';
import Button from '@components/common/Form/Button';

const TicketDetailHeader = styled.header`
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.swiamDarkBlue} 60%,
    ${({ theme }) => theme.colors.white} 100%
  );
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

const TicketDetailContainer = styled.form`
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
`;

const TicketDetailTitle = styled.h4`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  font-family: Arial;

  span {
    display: block;
    font-size: 14px;
    font-weight: 500;
  }
`;

const TicketDetailTopic = styled.h3`
  color: #152b3f;
  font-weight: 600;
  margin: 0 0 0.1rem;
  font-size: 14px;
  font-family: Arial;
`;

const TicketDetailSection = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
  flex-direction: ${({ direction }) => direction || 'column'};
  margin-top: 1rem;

  ${({ bordered }) =>
    bordered &&
    `
    padding-bottom: 0.6rem;
    border-bottom: solid 1px #ccc;
  `}
`;

const TicketDetailInfo = styled.p`
  margin: 0;
  font-size: 14px;

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 14px;
    font-weight: 500;
    margin: 0.4rem 0 0.2rem;
  }
`;

const TIcketDetailPrice = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.swiamBlue};
`;

const TicketDetailDivider = styled.hr`
  width: 100%;
  margin-bottom: 0.4rem;
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.colors.stone};
`;

const TicketDetailCartButton = styled(Button)`
  width: 80%;
  margin: 1.4rem auto;
  border-radius: 30px;
`;

export {
  TicketDetailCartButton,
  TicketDetailInfo,
  TicketDetailSection,
  TicketDetailHeader,
  TicketDetailDivider,
  TicketDetailTitle,
  TicketDetailTopic,
  TicketDetailContainer,
  TIcketDetailPrice,
};
