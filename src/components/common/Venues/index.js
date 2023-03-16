import React from 'react';
import HorizontalCardScroll from '../HorizontalCardScroll';

const PopularCityCardsHorizontalScroll = ({ data, title, className }) => {
  const parsedCards =
    data &&
    data.length &&
    data.map(venue => {
      return {
        id: `icon-${venue.id}`,
        img: venue.img || venue.fallBackImage,
        name: venue.name,
        href: venue.navToPath,
      };
    });

  return <HorizontalCardScroll className={className} title={title} cards={parsedCards} />;
};

export default PopularCityCardsHorizontalScroll;
