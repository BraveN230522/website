import React from 'react';
import { sendEvent } from '@utils/google-services/gtm';
import Router from 'next/router';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import {
  HorizontalScrollStyles,
  HorizontalScrollContainer,
  HorizontalCardScrollHeader,
  HorizontalScrollContainerTitle,
  SimpleCardContent,
  SimpleCardImage,
  SimpleCardLegend,
} from './styles';

const HorizontalCardScroll = ({ className, title, cards }) => {
  const handleItemClick = ({ name, href }) => () => {
    sendEvent('featuredClick', {
      featured: {
        detail: {
          name,
        },
      },
    });

    Router.push({
      pathname: href,
    });
  };

  return (
    <>
      <HorizontalScrollStyles className={className}>
        <HorizontalScrollContainer>
          {Boolean(title) && (
            <HorizontalCardScrollHeader>
              <HorizontalScrollContainerTitle>{title}</HorizontalScrollContainerTitle>
              {/* <HorizontalCardScrollMore>More</HorizontalCardScrollMore> */}
            </HorizontalCardScrollHeader>
          )}

          {cards?.length > 5 ? (
            <Carousel
              arrows
              slidesPerPage={5}
              draggable
              infinite
              breakpoints={{
                640: {
                  slidesPerPage: 1,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                900: {
                  slidesPerPage: 3,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 4,
                      },
                    },
                  ],
                },
                1024: {
                  slidesPerPage: 4,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 4,
                      },
                    },
                  ],
                },
              }}
            >
              {cards &&
                !!cards.length &&
                cards.map(item => (
                  <SimpleCardContent key={item.id} onClick={handleItemClick(item)}>
                    <SimpleCardImage src={item.img} alt={item.name} />
                    <SimpleCardLegend>{item.name}</SimpleCardLegend>
                  </SimpleCardContent>
                ))}
            </Carousel>
          ) : (
            <Carousel
              slidesPerPage={5}
              draggable
              breakpoints={{
                640: {
                  slidesPerPage: 1,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                900: {
                  slidesPerPage: 3,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 4,
                      },
                    },
                  ],
                },
                1024: {
                  slidesPerPage: 4,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 4,
                      },
                    },
                  ],
                },
              }}
            >
              {cards &&
                !!cards.length &&
                cards.map(item => (
                  <SimpleCardContent key={item.id} onClick={handleItemClick(item)}>
                    <SimpleCardImage src={item.img} alt={item.name} />
                    <SimpleCardLegend>{item.name}</SimpleCardLegend>
                  </SimpleCardContent>
                ))}
            </Carousel>
          )}
        </HorizontalScrollContainer>
      </HorizontalScrollStyles>
    </>
  );
};

export default HorizontalCardScroll;
