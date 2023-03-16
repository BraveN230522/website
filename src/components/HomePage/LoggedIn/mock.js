import LoggedHomeBg from '@images/bg-logged-home.png';
import LoggedHomeBgMobile from '@images/bg-logged-home-mobile.png';

export const mockHomeLoggedIn = {
  title: 'You’re going to NYC!',
  subTitle: 'Enjoy your New York Knicks vs. Chicago Bulls game',
  description: 'Try this Experience in NYC: Golf Day at Chelsea Piers before the match',
  imageURL: LoggedHomeBg,
  carouselItemID: 2,
  mobileImageURL: LoggedHomeBgMobile,
};

export const mockOffers = [
  ...Array.from({ length: 5 }, (v, index) => ({
    hotelID: index,
    fromPrice: {
      amount: 103,
    },
    hotelName: 'Hilton, Miami',
    venueAddress: 'Best for Super Bowl LIV',
    hotelImage:
      'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/81/93/8193_v4.jpeg',
  })),
];

export const mockLocal = {
  adviceImage: 'https://i.insider.com/5d0150e06fc9200b5a05f042?width=1136&format=jpeg',
  local: 'NYC',
  tips: [
    {
      id: 3,
      icon: 'parking',
      tip: 'Arthur Ashe Stadium parking?',
      views: 222,
      replies: 2,
    },
    {
      id: 1,
      icon: 'parking',
      tip: 'Best bars near Metlife Stadium?',
      views: 123,
      replies: 13,
    },
    {
      id: 2,
      icon: 'parking',
      tip: 'Traffic around Citi Field?',
      views: 3087,
      replies: 1,
    },
  ],
};

export const mockAdvice = [
  {
    id: 1,
    image:
      'https://content.r9cdn.net/rimg/kimg/f1/0b/34800236-58e51e7e.jpg?width=1004&crop=true&caller=HotelDetailsPhoto.jpeg',
    title: 'Restaurants near Madison Square Garden',
    info:
      'For years the area around Manhattan’s premier entertainment venue has been criticised for a lack of decent food options.',
  },
  {
    id: 2,
    image:
      'https://content.r9cdn.net/rimg/kimg/f1/0b/34800236-58e51e7e.jpg?width=1004&crop=true&caller=HotelDetailsPhoto.jpeg',
    title: 'Hotels near Madison Square Garden',
    info:
      'Now, you might have heard that Manhattan isn’t exactly the cheapest place in the world, and a night or two in a hotel could ..',
  },
];
