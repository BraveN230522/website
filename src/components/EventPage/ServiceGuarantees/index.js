import React from 'react';

import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';
import { Container, Column, Row, Title, ReadMore, Guarantee, Icon, Label } from './styles';
import BuyerGuarantee from './BuyerGuarantee.svg';
import MoneyBackGuarantee from './MoneyBackGuarantee.svg';
import SecurePaymentGuarantee from './SecurePaymentGuarantee.svg';

const ServiceGuarantees = () => {
  const [isMobile] = useDefaultMediaQueries();

  const guaranteeWidth = isMobile ? '80%' : false;
  const guaranteePadding = isMobile ? '14px 20px' : false;

  // TODO: Add the experting ticketing link
  return (
    <Container>
      <Column>
        <Title>Tailored to your travel plans</Title>
        <ReadMore>
          Every trip is different. Our team is prepared for your travel scenario <a href="/contact">Read more here</a>.
        </ReadMore>
      </Column>

      <Row>
        <Guarantee width={guaranteeWidth} padding={guaranteePadding}>
          <Icon src={BuyerGuarantee} />
          <Label>100% Money Back Guarantee</Label>
        </Guarantee>
        <Guarantee width={guaranteeWidth} padding={guaranteePadding}>
          <Icon src={MoneyBackGuarantee} />
          <Label>Avoid Currency Conversion Fees</Label>
        </Guarantee>
        <Guarantee width={guaranteeWidth} padding={guaranteePadding}>
          <Icon src={SecurePaymentGuarantee} />
          <Label>Secure Payments</Label>
        </Guarantee>
      </Row>
    </Container>
  );
};

export default ServiceGuarantees;
