import styled from '@emotion/styled';

import Section from '@components/common/Section';

const TicketWrapper = styled.article`
  ${({ theme }) => theme.setContainer()}

  padding-top: 3rem;
  padding-bottom: 3rem;

  .e14kgm3k3 {
    display: flex;
    flex-direction: column;
  }
`;

const TicketText = styled.p`
  line-height: 28px;
  margin-right: auto;
`;

const QuoteWrapper = styled.p`
  margin-left: 2rem;
`;

const TicketSection = styled(Section)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
  }

  header {
    margin-bottom: 0.4rem;
  }
`;

export { TicketSection, TicketText, TicketWrapper, QuoteWrapper };
