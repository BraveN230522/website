import LeaguesBg from '@images/bg-leagues.png';
import LeaguesBgMobile from '@images/bg-leagues-mobile.png';

import Bulls from '@public/images/NBATeams/tagsbulls.svg';
import Knicks from '@public/images/NBATeams/tagsknicks.svg';
import Lakers from '@public/images/NBATeams/tagslakers.svg';
import Nets from '@public/images/NBATeams/tagsnets.svg';
import Raptors from '@public/images/NBATeams/tagsraptors.svg';
import Warriors from '@public/images/NBATeams/tagswarriors.svg';

import NbaSchedule from '@public/images/team-carousel.jpg';

export const mockLeague = {
  title: 'National Basketball Association',
  description: `The National Basketball Association is a men's professional basketball league in North America, composed of 30 teams. It is one of the four major professional sports leagues in the United States and Canada, and is widely considered to be the premier men's professional basketball league in the world. More`,
  imageURL: LeaguesBg,
  mobileImageURL: LeaguesBgMobile,
  adviceImage: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/03/109429699_a_l.jpg',
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

export const mockPathFor = {
  title: 'headline',
  local: 'venue.venueName',
  date: 'dateTimeStamp',
  price: 'priceFrom',
  image: 'sportIcon' || 'venue.photoURL',
};

export const mockEvents = [
  ...Array.from({ length: 12 }, (v, index) => ({
    eventid: index,
    headline: 'New York Knicks vs. Miami Heat',
    venue: {
      venueName: 'Madison Square Garden, NY',
      photoURL: 'https://news.wagertalk.com/wp-content/uploads/2018/10/nba-new-york-knicks-at-miami-heat.jpg',
    },
    dateTime: '2020-11-21',
    priceFrom: 183,
  })),
];

export const mockPlayers = Array.from({ length: 8 }, (v, index) => ({
  id: index,
  img: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064514.png',
  name: 'Julius Randle',
  position: 'arrowUp',
}));

export const mockTeams = [
  {
    id: 1,
    img: Bulls,
    name: 'Bulls Team',
  },
  { id: 3, img: Lakers, name: 'Lakers Team' },
  { id: 5, img: Raptors, name: 'Raptors Team' },
  {
    id: 4,
    img: Nets,
    name: 'Net Team',
  },
  { id: 2, img: Knicks, name: 'Kinicks Team' },
  { id: 6, img: Warriors, name: 'Warriors Team' },
];

export const mockCarousel = [
  {
    blogpostID: 1,
    imageURL: NbaSchedule,
    blogpostTitle: '2020-21 NBA Schedule released',
    blogpostSummary:
      'A record 48 games will air in primetime in Europe, the Middle East and Africa, with 24 games each on Saturday and Sunday.',
  },
];

export const mockFanVideo = Array.from({ length: 5 }, (v, index) => ({
  id: index,
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjAc88BYEOIl8QotTivsJFqGGZ7KBpHGACR0OeDbVtZ0_6OfIg&usqp=CAU',
  video: 'https://www.youtube.com/watch?v=vex93RMhe-Y',
}));
