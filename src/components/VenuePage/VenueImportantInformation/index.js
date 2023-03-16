import React from 'react';
import { adopt } from 'react-adopt';
import { VenueDropdown, VenueInfoContainer } from './styles';
import VenueImportantInformationQuery from './queries';
import VenueInfo from './VenueInfo';

const VenueImportantInformationData = adopt({
  venueImportantInformation: ({ render, venueId }) => (
    <VenueImportantInformationQuery venueId={venueId}>{render}</VenueImportantInformationQuery>
  ),
});

const VenueImportantInformation = ({ venueId, venueName }) => {
  return (
    <VenueImportantInformationData venueId={venueId}>
      {({ venueImportantInformation }) => {
        return (
          <VenueDropdown icon="stadium" title={`Important information about ${venueName}`}>
            <VenueInfoContainer>
              {(venueImportantInformation &&
                venueImportantInformation.length &&
                venueImportantInformation.map(item => (
                  <VenueInfo label={item.label} information={item.information} />
                ))) || <VenueInfo information="No information at this time" />}
            </VenueInfoContainer>
          </VenueDropdown>
        );
      }}
    </VenueImportantInformationData>
  );
};

export default VenueImportantInformation;
