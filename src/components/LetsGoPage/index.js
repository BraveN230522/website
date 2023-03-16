import React from 'react';
import LetsGoHeaderBackground from '@images/letsgo-background.jpg';
import styled from '@emotion/styled';
import HeaderMedium from '../Layout/HeaderMedium';
import { LetsGoFormSection, LetsGoFormIframe } from './styles';

const LetsGoHeaderMedium = styled(HeaderMedium)`
  p {
    text-shadow: 0 0 5px black;
  }
  > figure img {
    opacity: 0.8;
  }
`;

const LetsGo = () => {
  const headerData = {
    title: `What’s on during your trip?`,
    details: `Answer these 3 questions so we can help you plan your next sports travel experience.`,
    imageURL: LetsGoHeaderBackground,
    mobileImageURL: LetsGoHeaderBackground,
  };
  return (
    <>
      <LetsGoHeaderMedium headerData={headerData} />
      <LetsGoFormSection>
        <LetsGoFormIframe
          id="travelsurvey-form-iframe"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="100%"
          src="https://d1z1wrkt4y2iqm.cloudfront.net/5f520693beb24f36b9117a14849c9b9b/l/form"
          title="travelsurvey-form-iframe"
        />
      </LetsGoFormSection>
    </>
  );
};

export default LetsGo;
