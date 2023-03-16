import React from 'react';
import { adopt } from 'react-adopt';
import styled from '@emotion/styled';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import MostPopularSportingCitiesQuery from './queries';
import HorizontalCardScroll from '../HorizontalCardScroll';

const Data = adopt({
  data: ({ render }) => <MostPopularSportingCitiesQuery>{render}</MostPopularSportingCitiesQuery>,
});

const PopularSportingCitiesData = ({ title, className }) => {
  return (
    <Data>
      {({ data }) => {
        const parsedCards =
          data &&
          data.length &&
          data.map(city => {
            return {
              id: `icon-${city.cityId}`,
              img: city.imageURL,
              name: city.cityName,
              href: formatSlugSegments(LINK_ABSOLUTE, city.cityName),
            };
          });

        return <HorizontalCardScroll className={className} title={title} cards={parsedCards} />;
      }}
    </Data>
  );
};

const PopularSportingCities = styled(PopularSportingCitiesData)`
  article {
    overflow-x: scroll;
    flex-wrap: nowrap;
    -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  article::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.media.phone`
    padding: 0 12px;
  `}
`;

export default PopularSportingCities;
