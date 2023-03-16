import styled from '@emotion/styled';
import Section from '@components/common/Section';

const OtherEventsSection = styled(Section)`
  margin-bottom: 64px;

  ${({ theme }) => theme.media.phone`
    padding: 0 12px;
  `}
`;

const OtherEventsStyles = styled.div`
  ${({ theme }) => theme.setContainer()};
  display: flex;
  overflow-x: scroll;
  width: 100%;

  div {
    margin-right: 20px;
    min-width: 227px;

    ${({ theme }) => theme.media.phone`
      margin-right: 10px;
    `}
  }
`;

export { OtherEventsSection, OtherEventsStyles };
