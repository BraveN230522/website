import React from 'react';
import BeinHeaderBackground from '@images/general-header.jpeg';
import styled from '@emotion/styled';
import HeaderMedium from '../Layout/HeaderMedium';
import { BeinFormSection, BeinFormIframe } from './styles';

const BeinHeaderMedium = styled(HeaderMedium)`
  p {
    text-shadow: 0 0 5px black;
  }
  > figure img {
    opacity: 0.8;
  }
`;

const Bein = () => {
  const headerData = {
    title: 'Win $500 off tickets to your next match',
    details:
      'A competition for beIN SPORTS viewers. Winners will receive a $500 (AUD) Sports Where I Am voucher that can be used on tickets to any live sports event listed on our website.',
    imageURL: BeinHeaderBackground,
    mobileImageURL: BeinHeaderBackground,
  };
  return (
    <>
      <BeinHeaderMedium headerData={headerData} />
      <BeinFormSection>
        <BeinFormIframe
          id="contact-form-iframe"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="100%"
          src="https://d1z1wrkt4y2iqm.cloudfront.net/3f534fa94479455db1be6d66f8b431c9/l/form"
          title="contact-form-iframe"
        />
      </BeinFormSection>
    </>
  );
};

export default Bein;
