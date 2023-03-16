import { get } from 'lodash';

import getFormattedEventDateTime from '@utils/timeFormat/getFormattedEventDateTime';

import EventFallbackBackground from '@images/sports-background.jpg';
import EventMobileFallbackBackground from '@images/sports-mobile.jpg';

const parseHeaderData = ({ productData, eventData }) => {
  const productId = productData && productData.id;

  const venueName = get(eventData, 'venue.venueName');
  const location = get(eventData, 'cityData.name');
  if (eventData?.moreEventData?.featuredEvent) {
    const headerData = [];
    for (const image of eventData?.moreEventData?.featuredData.featuredImages) {
      headerData.push({
        title: eventData.headline ? `${eventData.headline} Tickets` : 'Choose your seat',
        dateTime: getFormattedEventDateTime(productData.localDateTime), //HERE
        venueName,
        location,
        imageURL: image || EventFallbackBackground, // TODO display the correct image
        mobileImageURL: image || EventMobileFallbackBackground, // TODO display the correct image
      });
    }
    return {
      productId,
      headerData,
    };
  }

  return {
    productId,
    headerData: {
      title: eventData.headline ? `${eventData.headline} Tickets` : 'Choose your seat',
      dateTime: getFormattedEventDateTime(productData.localDateTime),
      venueName,
      location,
      imageURL: productData.image || EventFallbackBackground, // TODO display the correct image
      mobileImageURL: productData.image || EventMobileFallbackBackground, // TODO display the correct image
    },
  };
};

export default parseHeaderData;
