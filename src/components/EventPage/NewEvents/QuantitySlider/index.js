import React from 'react';

import { QuantitySliderWrapper, TicketDetailQuantity } from './styles';

const settings = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
};

const QuantitySlider = ({ options, onClick, activeItem }) => {
  return (
    <QuantitySliderWrapper {...settings}>
      {options.map((option, index) => (
        <div key={option}>
          <TicketDetailQuantity as="span" onClick={onClick(option)} outline={option != activeItem}>
            {option}
          </TicketDetailQuantity>
        </div>
      ))}
    </QuantitySliderWrapper>
  );
};

export default QuantitySlider;
