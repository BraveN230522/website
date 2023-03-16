import React from 'react';

import useSelection from '@utils/hooks/useSelection';
import useCarousel from '@utils/hooks/useCarousel';
import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';
import {
  CarouselControl,
  CarouselContainer,
  CarouselStyles,
  CarouselLink,
  CarouselTitle,
  CarouselText,
  CarouselFigure,
  CarouselImage,
} from './styles';

const Carousel = ({ items, className }) => {
  const [isMobile] = useDefaultMediaQueries();
  const [activeItem, activeItemIndex, changeActiveItem] = useSelection({
    items,
    selectedIndex: 0,
  });

  useCarousel({ activeItemIndex, items, changeActiveItem });

  const handleItemControlClick = index => () => {
    if (index === activeItemIndex) return;

    changeActiveItem(index);
  };

  return (
    <CarouselStyles className={className}>
      <CarouselFigure>
        {!!items &&
          items.map((item, index) => (
            <CarouselImage
              key={`${item.id}-news`}
              visible={index === activeItemIndex}
              src={item.imageURL}
              alt={activeItem.title}
            />
          ))}
      </CarouselFigure>
      {!!activeItem && (
        <>
          <CarouselContainer>
            <header>
              <CarouselTitle>{activeItem.title}</CarouselTitle>
            </header>
            <CarouselText>{activeItem.summary}</CarouselText>
            {Boolean(activeItem.link) && (
              <CarouselLink>
                <a href={activeItem.link} target="_blank" rel="noreferrer noopener">
                  More
                </a>
              </CarouselLink>
            )}
            {items.length > 1 && !isMobile && (
              <CarouselControl
                items={items}
                onItemClick={handleItemControlClick}
                activeIndex={activeItemIndex}
                isMobile={isMobile}
              />
            )}
          </CarouselContainer>
          {items.length > 1 && isMobile && (
            <div style={{ minWidth: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '30px' }}>
              <CarouselControl
                items={items}
                onItemClick={handleItemControlClick}
                activeIndex={activeItemIndex}
                isMobile={isMobile}
              />
            </div>
          )}
        </>
      )}
    </CarouselStyles>
  );
};

export default Carousel;
