import React from 'react';

import Carousel from '@brainhubeu/react-carousel';

import { HotelDisplayCarousel, RoomImages } from './styles';

const DisplayCarousel = ({ data }) => {
  return (
    <HotelDisplayCarousel>
      <Carousel
        slidesPerPage={5}
        autoPlay={10000}
        arrows
        infinite
        offset={8}
        minDraggableOffset={50}
        breakpoints={{
          1100: {
            slidesPerPage: 3,
          },
          670: {
            slidesPerPage: 2,
            arrows: false,
          },
        }}
      >
        {Boolean(data) &&
          data.length &&
          data.map((item, index) => <RoomImages key={index} src={item.url} alt={item.caption} />)}
      </Carousel>
    </HotelDisplayCarousel>
  );
};

export default DisplayCarousel;
