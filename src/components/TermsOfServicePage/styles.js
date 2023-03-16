import styled from '@emotion/styled';

import Section from '@components/common/Section';

const TermsWrapper = styled.article`
  ${({ theme }) => theme.setContainer()}

  padding-top: 3rem;
  padding-bottom: 3rem;

  .e14kgm3k3 {
    display: flex;
    flex-direction: column;
  }
`;

const TermsText = styled.p`
  line-height: 26px;
  margin-right: auto;
`;

const MarkTitle = styled.span`
  font-weight: 500;
`;

const TitleContinue = styled.p`
  margin: 4px auto 0px 0px;
`;

const QuoteWrapper = styled.p`
  margin-left: 6px;
  margin-right: auto;
`;

const QuoteNumber = styled.p`
  margin-left: 12px;
`;

const TermsSection = styled(Section)`
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

export { TermsSection, TermsText, MarkTitle, TitleContinue, TermsWrapper, QuoteWrapper, QuoteNumber };
