import styled from '@emotion/styled';
import Section from '@components/common/Section';

const FAQSection = styled(Section)`
  margin: 0;
  display: flex;
  flex-direction: column;

  article {
    flex-direction: column;

    > div:last-child {
      border: none;
      padding: 0;
    }
  }
`;

const InformSection = styled.div`
  text-align: center;
  margin: 12px 0;
  width: 100%;
`;

const InformTitle = styled.h3`
  color: ${({ theme }) => theme.colors.feedbackDanger};
`;

const HighlightWrapper = styled.span`
  font-weight: 600;
`;

const TopicWrapper = styled.span`
  font-weight: 600;
  padding-left: 1.2rem;
  display: block;
`;

const QuoteWrapper = styled.span`
  display: block;
  padding-left: 1.2rem;
`;

export { FAQSection, InformSection, InformTitle, HighlightWrapper, TopicWrapper, QuoteWrapper };
