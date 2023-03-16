import EventFallbackBackground from '@images/thank-you-background.jpg';
import EventMobileFallbackBackground from '@images/thank-you-background.jpg';

const setupData = ({ data }) => {
  const headerImage =
    data?.eventData?.moreEventData?.eventImage ||
    data?.eventData?.moreEventData?.venue?.venueImage ||
    EventFallbackBackground;
  const lineItem = data.bookingData?.lineItems?.length ? data.bookingData.lineItems[0] : {};
  const tickets =
    data.bookingData.booking?.tickets.slice(
      0,
      data.bookingData.lineItems.reduce((a, b) => a + (b.quantity || 0), 0)
    ) || [];
  const mappedData = {
    headerData: {
      title: 'Thank you for your booking!',
      bookingId: data.bookingId,
      buyerEmail: data.email,
      imageURL: headerImage,
      mobileImageURL: headerImage,
      fullName: data.fullName,
      imageURL: data.image || EventFallbackBackground,
      mobileImageURL: data.image || EventMobileFallbackBackground,
      tickets,
      eventData: data.eventData,
      hotelData: lineItem,
      mergeData: {
        subject: `Great news! Your friend ${data.fullName} has added you to the crew for the below tickets ordered through Sports Where I Am.`,
        friendName: data.fullName,
        cartId: data.bookingId,
        itemQuantity: '1',
        itemProductName: lineItem.product?.name,
        itemProductDescription: lineItem.product?.description,
        itemProductSelectedVariantDescription: lineItem.product?.selectedVariant?.description,
        itemSelectedShippingOptionTitle: lineItem.selectedShippingOption?.title,
      },
    },
  };
  // apply email and name to the first ticket
  if (mappedData.headerData.tickets.length > 0) {
    mappedData.headerData.tickets[0].email = mappedData.headerData.buyerEmail;
    mappedData.headerData.tickets[0].fullName = mappedData.headerData.fullName;
  }
  return mappedData;
};

export default setupData;
