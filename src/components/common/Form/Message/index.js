import React from 'react';

import { ErrorContainer, ErrorMessage } from './styles';

const Error = ({ children, type }) => (
  <ErrorContainer>
    <ErrorMessage type={type}>{children}</ErrorMessage>
  </ErrorContainer>
);

export default Error;
