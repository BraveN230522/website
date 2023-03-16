import styled from '@emotion/styled';
import Select from '@components/common/Form/Select';
import Input from '@components/common/Form/Input';
import { TicketDetailSection } from '../TicketDetail/styles';

const TicketFilterTopic = styled.h3`
  font-weight: 500;
  margin: 0;
  font-size: 20px;
`;

const TicketFilterText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

const TicketFilterSection = styled(TicketDetailSection)`
  padding-bottom: 1.3rem;

  svg {
    right: 20px;
    top: 33px;
    left: inherit;

    path {
      fill: ${({ theme }) => theme.colors.stone};
    }
  }
`;

const TicketFilterInput = styled(Input)`
  width: 48%;

  input {
    border: solid 2px ${({ theme }) => theme.colors.stone};
    width: 100%;
    font-size: 16px;
    text-align: center;
    padding-left: 0;
  }
`;

const TicketFilterSelect = styled(Select)`
  border: solid 2px ${({ theme }) => theme.colors.stone};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Inter};
`;

export { TicketFilterTopic, TicketFilterText, TicketFilterSection, TicketFilterInput, TicketFilterSelect };
