import React from 'react';

import BeINLogo from '@images/beIN.png';
import SingaporeRugbySevensLogo from '@images/Singapore-Rugby-7s.jpg';
import ExpressTravelLogo from '@images/express-travel-group-logo.png';
import NRLLogo from '@images/nrl-badge.png';
import UrbanAdventuresLogo from '@images/Urban-Adventures.png';
import NETSLogo from '@images/nets.jpg';

import { PartnersStyles, PartnerTitle, PartnersContent } from './style';

const Partners = () => {
  return (
    <PartnersStyles>
      <header>
        <PartnerTitle>Partners</PartnerTitle>
      </header>

      <PartnersContent>
        <img src={BeINLogo} />
        <img src={SingaporeRugbySevensLogo} />
        <img src={ExpressTravelLogo} />
        <img src={NRLLogo} />
        <img src={UrbanAdventuresLogo} />
        <img src={NETSLogo} />
      </PartnersContent>
    </PartnersStyles>
  );
};

export default Partners;
