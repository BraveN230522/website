import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import TagsFilter from './TagsFilter';
import { OffersStyles, OfferTicket, OffersTitle, OffersHeader, OffersContent, OffersMore } from './styles';

const filter = {
  categories: {},
  rooms: {
    Beds: 0,
    Bedrooms: 0,
    Bathrooms: 0,
  },
};

const Offers = ({
  className,
  dark,
  isDarkTheme,
  filterCategories,
  filterRooms,
  hideOnMobile,
  title,
  data,
  hideMoreOnMobile,
  hasFilter,
  hidePrice,
}) => {
  const [offers, setOffers] = useState(data);

  useEffect(() => {
    setOffers(data);
  }, [data]);

  const handleOnFilter = filterData => {
    const nextOffers = data.filter(offer => {
      let isOnFilter;

      const categories = Object.keys(filterData.categories);
      const rooms = Object.keys(filterData.rooms);
      const hasRoomsFilter = rooms.some(key => filterData.rooms[key]);

      if (categories.length) {
        categories.map(key => {
          if (filterCategories[key](offer)) {
            isOnFilter = true;
          }
        });
      }

      if (hasRoomsFilter && rooms.every(key => filterRooms[key](offer, filterData.rooms[key]))) {
        isOnFilter = true;
      }

      if (!categories.length && !hasRoomsFilter) {
        isOnFilter = true;
      }

      // TODO use rooms value on this filter when it is available from API
      return isOnFilter;
    });

    setOffers(nextOffers);
  };

  const renderContent = () => {
    if (offers && offers?.length > 0) {
      return (
        <OffersContent>
          {offers?.map(item => (
            <OfferTicket
              link={item.link || `/hotels/${item.hotelID}`}
              dark={dark}
              key={item.hotelID}
              average={0} // the rate is not comming from API
              price={item.fromPrice}
              promo={item.promoBanner}
              title={item.hotelName}
              subtitle={item.venueAddress || item.nearbyVenueName || ''}
              image={item.hotelImage}
              hidePrice={hidePrice}
            />
          ))}
        </OffersContent>
      );
    }

    return <></>;
  };

  return (
    <OffersStyles className={className} hideOnMobile={hideOnMobile} dark={dark}>
      {title && (
        <OffersHeader>
          <OffersTitle dark={dark}>{title}</OffersTitle>
          {!hideMoreOnMobile && !hasFilter && (
            <Link href="/hotels">
              <OffersMore dark={dark}>More</OffersMore>
            </Link>
          )}
        </OffersHeader>
      )}

      {hasFilter && (
        <TagsFilter
          data={filter}
          onFilter={handleOnFilter}
          isDarkTheme={isDarkTheme}
          defaultCategories={filterCategories}
        />
      )}

      {renderContent()}
    </OffersStyles>
  );
};

export default Offers;
