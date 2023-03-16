import styled from '@emotion/styled';

const StepsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;

  svg {
    margin-right: 16px;
  }

  svg:last-child {
    display: none;
  }

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`;

const StepsText = styled.span`
  font-size: 22px;
  color: ${({ theme, selected }) => (selected ? theme.colors.dark : theme.colors.gray)};
  margin-right: 16px;
`;

const StepsContent = styled.article`
  margin: 0 auto;
  max-width: 740px;
  width: 100%;
  min-height: 300px;

  ${({ theme }) => theme.media.phone`
    padding-left: 16px;
    padding-right: 16px;
  `};
`;

export { StepsHeader, StepsText, StepsContent };
