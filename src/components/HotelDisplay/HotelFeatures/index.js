import React from 'react';

import Icon from '@components/common/Icon';
import { HotelFeaturesSection, HotelFeatureContent, HotelFeatureDescription } from './styles';

const features = {
  wifi: {
    icon: 'wifi',
    description: 'Free Wi-Fi',
  },
  restaurants: {
    icon: 'restaurants',
    description: 'Restaurant (6AM-11PM)',
  },
  pet: {
    icon: 'pet',
    description: 'Pets Permitted',
  },
  parking: {
    icon: 'parkingHotel',
    description: 'On-site Parking',
  },
  noSmoking: {
    icon: 'noSmoking',
    description: 'Non-Smoking Rooms',
  },
  fitness: {
    icon: 'fitness',
    description: 'Fitness Centre',
  },
  currencyConversion: {
    icon: 'currencyConversion',
    description: 'Currency Conversion',
  },
  breakfast: {
    icon: 'breakfast',
    description: 'Breakfast Available',
  },
  barMartini: {
    icon: 'barMartini',
    description: 'Bar (Level 27)',
  },
};

const HotelFeatures = ({ amenities, className, title }) => {
  const amenitiesLongColumns = amenities?.length % 3;
  const columnLength = (amenities?.length - amenitiesLongColumns) / 3;
  const columnLengths = [
    columnLength + (amenitiesLongColumns > 0 ? 1 : 0),
    columnLength + (amenitiesLongColumns > 1 ? 1 : 0),
    columnLength,
  ];
  const columnData = {
    0: amenities?.slice(0, columnLengths[0]),
    1: amenities?.slice(columnLengths[0], columnLengths[0] + columnLengths[1]),
    2: amenities?.slice(columnLengths[0] + columnLengths[1]),
  };

  if (!columnLengths[0]) return null;

  return (
    <HotelFeaturesSection className={className} grid columns="3" title={title}>
      {columnLengths.map((size, columnIndex) => (
        <ul key={columnIndex}>
          {columnData[columnIndex].map((item, itemIndex) => (
            <li key={itemIndex}>{item.replace(':F', '').replace(':', ': ')}</li>
          ))}
        </ul>
      ))}
      {/* Object.keys(ticks).reduce(
        (acc, key, index) =>
          ticks[key] && features[key]
            ? [
                ...acc,
                <HotelFeatureContent key={index}>
                  <span>
                    <Icon name={features[key].icon} />
                  </span>
                  <HotelFeatureDescription>{features[key].description}</HotelFeatureDescription>
                </HotelFeatureContent>,
              ]
            : acc,
        []
      ) */}
    </HotelFeaturesSection>
  );
};

export default HotelFeatures;
