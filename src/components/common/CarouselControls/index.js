import React from 'react';
import { Controller } from 'react-hook-form';

import { ControlStyles, ControlItem, ControlBack, ControlNext } from './style';

const CarouselControls = ({
  controlColor = 'controlColor',
  activeColor = 'white',
  items = [],
  activeIndex = 0,
  className,
  onItemClick,
  isMobile,
}) => {
  const backIndex = index => (index === 0 ? items.length - 1 : index - 1);
  const nextIndex = index => (index === items.length - 1 ? 0 : index + 1);
  return (
    <>
      {isMobile && <ControlBack onClick={onItemClick(backIndex(activeIndex))} />}
      <ControlStyles className={className} isMobile={isMobile}>
        {items.map((_, index) => (
          <ControlItem
            role={`control-${index + 1}`}
            activeColor={activeColor}
            controlColor={controlColor}
            key={index}
            onClick={onItemClick(index)}
            active={index === activeIndex}
          />
        ))}
      </ControlStyles>
      {isMobile && <ControlNext onClick={onItemClick(nextIndex(activeIndex))} />}
    </>
  );
};

export default CarouselControls;
