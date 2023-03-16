import React from 'react';
import styled from '@emotion/styled';
import ParkingInfo from '@images/parking-info.png';

const VenueInfoImage = styled.img`
  max-width: 60px;
`;
const VenueInfoText = styled.p``;
const VenueInfoTitle = styled.h4``;

const VenueInfo = ({ label, information }) => {
  return (
    <>
      <VenueInfoImage />
      {/* <VenueInfoImage src={ParkingInfo} /> */}
      <VenueInfoTitle>{label}</VenueInfoTitle>
      <VenueInfoText>{information}</VenueInfoText>
    </>
  );
};

export default VenueInfo;
