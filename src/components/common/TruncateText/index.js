import React, { useState } from 'react';
import styled from '@emotion/styled';

const TrimStyles = styled.span`
  cursor: pointer;
  ${({ truncate }) =>
    truncate &&
    `
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: 'More';
    `}
`;

const TruncateText = ({ children }) => {
  const [truncated, toggleTruncate] = useState(true);
  return (
    <TrimStyles truncate={truncated} onClick={() => toggleTruncate(!truncated)}>
      {children}
    </TrimStyles>
  );
};

export default TruncateText;
