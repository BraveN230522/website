import React from 'react';
import { adopt } from 'react-adopt';
import moment from 'moment';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import { MostPopularSportingCitiesQuery } from './queries';
import Mosaic from '../common/Mosaic';
import { PopularSportingCitiesStyles } from './styles';

const Data = adopt({
  data: ({ render }) => <MostPopularSportingCitiesQuery>{render}</MostPopularSportingCitiesQuery>,
});

const PopularSportingCities = ({ title }) => {
  const currentDate = moment().format('YYYY-MM-DD');
  const twoMonthsFoward = moment()
    .add(2, 'M')
    .format('YYYY-MM-DD');
  return (
    <PopularSportingCitiesStyles>
      <Data>
        {({ data }) => {
          const cities =
            data &&
            data.length &&
            data.map(city => {
              return {
                id: city.cityId,
                img: city.imageURL,
                name: city.cityName,
                alt: city.cityName,
                url: formatSlugSegments(LINK_ABSOLUTE, city.cityName),
                country: city?.country?.countryName || '',
              };
            });
          return <Mosaic data={cities} title={title} />;
        }}
      </Data>
    </PopularSportingCitiesStyles>
  );
};

export default PopularSportingCities;
