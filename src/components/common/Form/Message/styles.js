import styled from '@emotion/styled';
import { css } from '@emotion/core';

const dynamicTypes = ({ theme, type }) =>
  ({
    error: css`
      color: ${theme.colors.error};
    `,
  }[type]);

const ErrorContainer = styled.div`
  margin-top: 5px;
`;

const ErrorMessage = styled.span`
  ${dynamicTypes};
  font-weight: 600;
  display: block;
  font-size: 12px;
  padding-left: 20px;
`;

export { ErrorContainer, ErrorMessage };
