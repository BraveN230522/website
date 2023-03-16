import styled from '@emotion/styled';

import Section from '@components/common/Section';
import MapView from '@components/common/Map/MapView';

const MapViewContainer = styled(Section)`
  max-width: 587px;
  width: 100%;

  h1 {
    font-weight: 500;
  }

  article {
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.media.phone`
      padding: 0;
    `}
  }

  ${({ theme }) => theme.media.phone`
    margin-top: 30px;
    order: 1;
  `}

  label {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 14px;
  }
`;

const HotelMapView = styled(MapView)`
  border-radius: 8px;
  height: 408px;

  article {
    margin: 0;
  }
`;

const MapOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  div:first-of-type {
    margin-right: 10px;

    ${({ theme }) => theme.media.phone`
      margin-right: 0;
    `}
  }

  ${({ theme }) => theme.media.phone`
    flex-direction: column;
    
    div{
      justify-content: flex-end;
    }
  `}
`;

export { MapViewContainer, HotelMapView, MapOptions };
