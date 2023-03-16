import React from 'react';

import { CheckoutContainer, CheckoutHeader, CheckoutTitle, CheckoutContent } from './styles';

const CheckoutSection = ({ borderBottom, className, children, title }) => (
  <CheckoutContainer className={className} borderBottom={borderBottom}>
    {title && (
      <CheckoutHeader>
        <CheckoutTitle>{title}</CheckoutTitle>
      </CheckoutHeader>
    )}
    <CheckoutContent>{children}</CheckoutContent>
  </CheckoutContainer>
);

export default CheckoutSection;
