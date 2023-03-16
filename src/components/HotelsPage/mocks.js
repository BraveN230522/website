import HotelBg from '@images/hotel-background.png';
import HotelBgMobile from '@images/hotel-background-mobile.png';

import NbaSchedule from '@public/images/Blogpost/hotel-carousel-background.png';

export const mockHotel = {
  title: 'Hotel Bookings for Sports Travel',
  description: 'Plan your ultimate sporting experience',
  imageURL: HotelBg,
  carouselItemID: 2,
  mobileImageURL: HotelBgMobile,
};

export const mockMosaicCities = [
  {
    id: 1,
    img:
      'https://edc.nyc/sites/default/files/styles/16x9_md/public/2019-05/Landing-Why-NYC%3F-Brooklyn-Bridge-Photo-Julienne-Schaer-NYC-and-Company-NYCEDC-02.jpg?itok=i6pWykbu',
    alt: 'New York City USA',
    city: 'New York City',
    cityId: 22,
    country: 'USA',
  },
  {
    id: 2,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR-zPuUy3MV8gRm2VClF_5nsF7-TmjcwUSW2AhgTVpepglumYc&usqp=CAU',
    alt: 'Chicago USA',
    city: 'Chicago',
    cityId: 2,
    country: 'USA',
  },
  {
    id: 3,
    img:
      'https://www.tripsavvy.com/thmb/uxndpaB3e4BaNrS4R3f03OXXA-s=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/thingstodoinmadridskyline-d05bf06ef9144f04973d5bfc50fbcee6.jpg',
    alt: 'Madrid Spain',
    city: 'Madrid',
    cityId: 134,
    country: 'Spain',
  },
  {
    id: 4,
    img:
      'https://doubletree3.hilton.com/resources/media/dt/LONTLDI/en_US/img/shared/full_page_image_gallery/main/HL_towerbridge_30_677x380_FitToBoxSmallDimension_Center.jpg',
    alt: 'London United Kingdom',
    city: 'London United',
    cityId: 80,
    country: 'Kingdom',
  },
  {
    id: 5,
    img: 'https://i.ytimg.com/vi/hNJr6qvUX6M/maxresdefault.jpg',
    alt: 'Houston USA',
    city: 'Houston',
    cityId: 24,
    country: 'USA',
  },
  {
    id: 6,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHlbPiHfJDLYlVEWVq_H7-9xuGyFrzu8BQGGXHm_PQarHy_bJS&usqp=CAU',
    alt: 'Los Angeles USA',
    city: 'Los Angeles',
    cityId: 5,
    country: 'USA',
  },
  {
    id: 7,
    img: 'https://www.global-business-school.org/sites/default/files/reasons-pursue-degree-barcelona-1.jpg',
    alt: 'Barcelona Spain',
    city: 'Barcelona',
    cityId: 126,
    country: 'Spain',
  },
  {
    id: 8,
    img: 'https://www.terryferreira.ca/wp-content/uploads/2019/03/toronto.jpg',
    alt: 'Toronto Canada',
    city: 'Toronto',
    cityId: 51,
    country: 'Canada',
  },
];

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

export const mockFilterPlaces = Array.from({ length: 5 }, (v, index) => ({
  label: `New York ${index}`,
  value: index,
}));
