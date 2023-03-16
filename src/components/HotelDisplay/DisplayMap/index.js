import React from 'react';

import Checkbox from '@components/common/Form/Checkbox';

import { MapViewContainer, MapOptions, HotelMapView } from './styles';

const DisplayMap = ({ events, venues, title }) => {
  return (
    <MapViewContainer title={title}>
      <HotelMapView events={events} venues={venues} />
      <MapOptions>
        <Checkbox labelFirst label="Show Traffic" />
        <Checkbox labelFirst label="Show public transport" />
      </MapOptions>
    </MapViewContainer>
  );
};

export default DisplayMap;
