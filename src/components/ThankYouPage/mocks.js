import ArthurAsheStadium from '@public/images/Venues/arthur-ashe-stadium.png';
import BarclaysCenter from '@public/images/Venues/barclays-center.png';
import CitiField from '@public/images/Venues/citi-field.png';
import MadisonSquareGarden from '@public/images/Venues/madison-square-garden.png';
import RedBullArena from '@public/images/Venues/red-bull-arena.png';
import YankeeStadium from '@public/images/Venues/yankee-stadium.png';
import CityBg from '@images/city-bg.png';
import CityMobileBg from '@images/city-background-mobile.png';

export const merchandise = [
  {
    id: 1,
    image:
      'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3378000/altimages/ff_3378270-561a10d53d58af9b3071alt1_full.jpg&w=900',
    title: '#20 - RJ Barrett New York Knicks Jersey - Mens',
    price: '69.95',
  },
  {
    id: 2,
    image: 'https://www.neweracap.com/medias/sys_master/root/root/h9f/h21/9504190267422/9504190267422.png',
    title: 'New York Knicks Blue and Orange Cap - Unisex',
    price: '69.95',
  },
  {
    id: 3,
    image:
      'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3959000/altimages/ff_3959557-7adfdd14699d80b7bf1calt2_full.jpg&w=2000',
    title: 'New York Knicks Black Hoody - Mens',
    price: '69.95',
  },
  {
    id: 4,
    image: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_1945000/ff_1945120_xl.jpg&w=900',
    title: 'New York Knicks Bottle Opener Keychain',
    price: '69.95',
  },
  {
    id: 5,
    image:
      'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3378000/altimages/ff_3378270-561a10d53d58af9b3071alt1_full.jpg&w=900',
    title: '#20 - RJ Barrett New York Knicks Jersey - Mens',
    price: '69.95',
  },
  {
    id: 6,
    image: 'https://www.neweracap.com/medias/sys_master/root/root/h9f/h21/9504190267422/9504190267422.png',
    title: 'New York Knicks Blue and Orange Cap - Unisex',
    price: '69.95',
  },
  {
    id: 7,
    image:
      'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3959000/altimages/ff_3959557-7adfdd14699d80b7bf1calt2_full.jpg&w=2000',
    title: 'New York Knicks Black Hoody - Mens',
    price: '69.95',
  },
  {
    id: 8,
    image: 'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_1945000/ff_1945120_xl.jpg&w=900',
    title: 'New York Knicks Bottle Opener Keychain',
    price: '69.95',
  },
];

export const mockVenues = [
  {
    id: 1,
    img: ArthurAsheStadium,
    name: 'Arthur Ashe Stadium',
  },
  { id: 5, img: RedBullArena, name: 'Red Bull Arena' },
  {
    id: 4,
    img: MadisonSquareGarden,
    name: 'Madison Square Garden',
  },
  { id: 3, img: CitiField, name: 'Citi Field' },
  { id: 6, img: YankeeStadium, name: 'Yankee Stadium' },
  { id: 2, img: BarclaysCenter, name: 'Barclays Center' },
];

export const mockLocal = {
  title: 'New York City Sports Tickets',
  description:
    'New York City is the city that never sleeps and it can lay claim to being one of the best sporting cities in the world. With teams in every major competitive sport - football, baseball, soccer, basketball and ice hockey, you would be crazy to sleep when you are in the Big Apple! More',
  imageURL: CityBg,
  mobileImageURL: CityMobileBg,
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
