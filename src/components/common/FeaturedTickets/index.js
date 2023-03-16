import React, { useState, useEffect, useCallback } from 'react';
import { get } from 'lodash';
import Router from 'next/router';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import getFormattedEventDate from '@utils/timeFormat/getFormattedEventDate';

import MapView from '@components/common/Map/MapView';
import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';
import Icon from '@components/common/Icon';
import More from '@components/common/More';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';

import {
  FeaturedTicketsStyles,
  FeaturedTicketsHeader,
  FeaturedTicketsTitle,
  FeaturedTicketsControls,
  FeaturedTicketsTag,
  EventTag,
  FeaturedTicketsView,
  FeaturedTicketsContainer,
  FeaturedTicketsCard,
  ViewModeButton,
  MoreContainer,
} from './styles';

let timer;
const ALL = 'ALL';
const MORE_STEP = 8;

const FeaturedTickets = ({
  className,
  title,
  events,
  isDarkTheme,
  hasGrid,
  categories,
  hasFilter,
  hasView,
  eventsByVenue,
  currentCategory,
  setCategory,
  pathFor,
  fromDate,
  toDate,
}) => {
  const [isMobile] = useDefaultMediaQueries();
  const [visible, setVisible] = useState(true);
  const [view, setView] = useState('GRID');
  const [limit, setLimit] = useState(MORE_STEP);

  // const numberCategories = Object.keys(categories)?.length || 0;

  useEffect(() => {
    document.head.insertAdjacentHTML('beforeend', `<style>body{overflow-x:hidden}</style>`);
    return () => {
      document.head.insertAdjacentHTML('beforeend', ``);
    };
  }, []);

  const handleMore = useCallback(() => {
    setLimit(limit + MORE_STEP);
  }, [limit, setLimit]);

  useEffect(() => {
    setVisible(true);
  }, [currentCategory]);

  const handleCategory = nextCategory => () => {
    if (nextCategory === currentCategory) return;

    clearTimeout(timer);
    setVisible(false);

    timer = setTimeout(() => {
      setCategory(nextCategory);
    }, 300);
  };

  const goToEvent = useCallback((id, cityName, venueName, eventName) => {
    if (!id) {
      return;
    }

    Router.push({
      pathname: formatSlugSegments(LINK_ABSOLUTE, cityName, venueName, 'event', id, eventName, 'tickets'),
    });
  }, []);

  return (
    <FeaturedTicketsStyles className={className} dark={isDarkTheme}>
      <FeaturedTicketsHeader>
        <FeaturedTicketsTitle dark={isDarkTheme}>{isMobile ? 'Upcoming Events' : title}</FeaturedTicketsTitle>
      </FeaturedTicketsHeader>
      <FeaturedTicketsControls hasGrid={hasGrid}>
        {hasGrid && (
          <FeaturedTicketsView isTitle={!hasFilter}>
            {hasView && (
              <>
                <ViewModeButton onClick={() => setView('GRID')}>
                  <Icon name="gridView" className={view === 'GRID' ? 'dark' : 'light'} />
                </ViewModeButton>
                <ViewModeButton onClick={() => setView('MAP')}>
                  <Icon name="mapView" className={view === 'MAP' ? 'dark' : 'light'} />
                </ViewModeButton>
              </>
            )}
          </FeaturedTicketsView>
        )}
        {hasFilter && (
          <FeaturedTicketsTag>
            <EventTag
              variant={isDarkTheme ? 'dark' : 'light'}
              isSelected={ALL === currentCategory}
              click={handleCategory(ALL)}
            >
              ALL
            </EventTag>
            <Carousel
              arrows
              slidesPerPage={10}
              infinite={Object.keys(categories).length > 9}
              draggable
              breakpoints={{
                420: {
                  arrows: false,
                  slidesPerPage: 2.3,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
                640: {
                  arrows: false,
                  slidesPerPage: 2.3,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
                900: {
                  arrows: false,
                  slidesPerPage: 6.5,
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 3,
                      },
                    },
                  ],
                },
                1024: {
                  slidesPerPage: 8.5,
                  arrows: false,
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
              {Object.keys(categories).map(item => (
                <EventTag
                  key={item}
                  variant={isDarkTheme ? 'dark' : 'light'}
                  isSelected={item === currentCategory}
                  click={handleCategory(item)}
                >
                  <span style={{ fontSize: '10px', fontWeight: '600' }}>{item}</span>
                </EventTag>
              ))}
            </Carousel>
          </FeaturedTicketsTag>
        )}
      </FeaturedTicketsControls>
      {view === 'GRID' ? (
        <>
          <FeaturedTicketsContainer>
            {events.slice(0, limit).map(event => {
              // console.log('abc', get(event, pathFor.date));
              return (
                <FeaturedTicketsCard
                  key={event.eventId}
                  visible={visible}
                  dark={isDarkTheme}
                  variantButton="primary"
                  card={{
                    title: get(event, pathFor.title),
                    local: get(event, pathFor.local),
                    date: getFormattedEventDate(get(event, pathFor.date)),
                    price: get(event, pathFor.price),
                    image: event?.eventImage || event?.league?.sport?.sportIconURL,
                  }}
                  // onActionButtonClick={() => goToEvent(event.eventId)}
                  onActionButtonClick={() =>
                    goToEvent(
                      event.eventId,
                      event?.venue?.city?.cityName,
                      event?.venue?.venueName,
                      event?.eventName.replace(/[\s,/.?-]+/g, '-')
                    )
                  }
                />
              );
            })}
          </FeaturedTicketsContainer>
          {limit < events.length && (
            <MoreContainer>
              <More onClick={handleMore} dark={!isDarkTheme} />
            </MoreContainer>
          )}
        </>
      ) : (
        <MapView fromDate={fromDate} toDate={toDate} events={eventsByVenue} />
      )}
    </FeaturedTicketsStyles>
  );
};

export default FeaturedTickets;
