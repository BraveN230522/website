import { useQuery } from '@apollo/react-hooks';

import { GET_CAROUSEL } from '@graphql/queries/carousel';

import homeBackground from '@images/home-background.jpg';
import homeMobileBackground from '@images/mobile-header.png';
import sportsBackground from '@images/sports-background.png';
import { useContext } from 'react';
import Loader from '@components/Loader';
import console from '@utils/console';

const failureData = {
  allCarousels: [
    {
      carouselItemID: 1,
      title: 'Build your epic sporting experience',
      description: 'Find your ticket and get started',
      imageURL: homeBackground,
      mobileImageURL: homeMobileBackground,
    },
    {
      carouselItemID: 2,
      title: 'Build your epic sporting experience',
      description: 'Find your ticket and get started',
      imageURL: sportsBackground,
      mobileImageURL: sportsBackground,
    },
  ],
};

const CarouselQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_CAROUSEL);

  if (loading) {
    return <Loader />;
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  if (error) {
    console.warn('Error while loading carousel data');
    return children(failureData);
  }

  if (!data.allCarousels) {
    console.warn('API has returned no carousel data');
    return children(failureData);
  }

  return children({
    ...data,
  });
};

export { CarouselQuery };
