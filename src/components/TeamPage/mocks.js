import TeamBg from '@images/team-background.png';
import TeamBgMobile from '@images/team-background-mobile.png';

import Bulls from '@public/images/NBATeams/tagsbulls.svg';
import Knicks from '@public/images/NBATeams/tagsknicks.svg';
import Lakers from '@public/images/NBATeams/tagslakers.svg';
import Nets from '@public/images/NBATeams/tagsnets.svg';
import Raptors from '@public/images/NBATeams/tagsraptors.svg';
import Warriors from '@public/images/NBATeams/tagswarriors.svg';
import TeamCarouselImg from '@public/images/team-carousel.jpg';
import adviceVideoImage from '@public/images/advice-video.png';
import adviceImage from '@images/team-advice-image-1.jpg';
import adviceImageTwo from '@images/team-advice-image-2.jpg';

import CityBg from '@images/city-bg.png';
import CityMobileBg from '@images/city-background-mobile.png';

export const mockEvents = [
  ...Array.from({ length: 12 }, (v, index) => ({
    eventid: index,
    headline: 'New York Knicks vs. Miami Heat',
    venue: {
      venueName: 'Madison Square Garden, NY',
      photoURL: 'https://news.wagertalk.com/wp-content/uploads/2018/10/nba-new-york-knicks-at-miami-heat.jpg',
      venueid: 401,
      venueWordpressID: 269,
      venueAddress: ' One East 161st Street',
      address: ' One East 161st Street',
      cityid: 9,
      coOrdinates: {
        latitude: 40.8288189,
        longitude: -73.9265691,
      },
      venueDescription:
        "Yankee Stadium has quickly become what the old Yankee Stadium was: The Cathedral of Baseball. Located at 161st and River Avenue in the Bronx, the stadium sits across the street from where the original once stood. With the look and feel of the original, the latest version of Yankee Stadium has taken the franchise's rich tradition and history into the world of modern amenities to create the ultimate fan experience for spectators of the 27-time World Champions. The new Yankee Stadium (opened in 2009) is beautiful. The outside of the entire Stadium is covered with huge signs spotlighting every Yankees player. Everyone arrives at New York Yankees Stadium wearing Yankees clothing – everything from hats to socks.Although it is now partially covered by the Mohegan Sun sports bar, Monument Park is still the place to pay tribute to the Yankee greats of the past such as Babe Ruth, Joe DiMaggio, Mickey Mantle, Lou Gehrig, and on and on. The Park has been moved from left field to center to honor the placing of the original three monuments at the original Stadium, though they are no longer in the field of play. There are now six monuments and 24 plaques in Monument Park. On game days, it opens with the gates and remains accessible until 45 minutes prior to the game start time. Only a few dozen fans will be let in at a time.The New York Yankees Museum is located on the Main Level near Gate 6 and tells baseball's and the franchise's story through various displays of artifacts and memorabilia. The Museum holds, among other things, Thurman Munson's locker, which had remained empty in the team's clubhouse since his death in 1979, statues of Yogi Berra and Don Larsen that pay tribute to the perfect battery in the perfect World Series game, and a Ball Wall, which features autographed balls from hundreds of Yankee players. Unlike Monument Park, the museum stays open during the game, closing at the start of the eighth inning. On non-game days, visitors can enjoy the museum as part of Yankee Stadium tours.Section 203, the most famous section of seats in professional baseball, is home to the aforementioned Yankee Stadium Bleacher Creatures. The Creatures are a unique group of fans and friends that have called the same seating area home for years. They are considered to be the \"real” fans of the Yankees and the polar opposite of the suits and Wall Street types that make their home in the seats between the bases. The members of the Bleacher Creatures are formerly of Sections 37 and 39 in the original Stadium, where the purchase of alcohol was prohibited prior to the move across the street. From the first pitch of the game, when the Creatures start \"roll call,” until the last out is recorded, the crazed atmosphere and enthusiasm never lets up. If you're looking for the most exciting place to watch Yankees baseball, Section 203 is for you. Just don't plan on cheering for the opposition or wearing any non-Yankees apparel if you choose to sit there.Inside New York Yankees Stadium the walls are lined with life size pictures of all the Yankees legends… Babe Ruth, Lou Gehrig, Joe DiMaggio, Mickey Mantle, Jackie Robinson, Bucky Dent, Reggie Jackson, Thurman Munson and so many more. The original New York Yankees Stadium is, of course, nicknamed, \"The House that Ruth Built” after the Babe. The NY Yankees Logo is on the Flag at New York Yankees Stadium. Mixed in with the Player pictures are huge flags with the NY Yankees Symbol. There is so much to do in addition to the game – tons of shops and restaurants of all kinds and the New York Yankees Museum. There is the great Tommy Bahamas Restaurant to get some wine.The Sultan of Swat. The Great Bambino. The Colossus of Clout. George Herman Ruth was so much larger than life, no one nickname could do him justice. It has been 75 years since the Babe's final season in pinstripes, but his presence and his legacy will never fade. The Yankees will continue to honor the legendary player with Babe Ruth Plaza. Situated outside of Yankee Stadium along 161st Street, Babe Ruth Plaza recounts Ruth's life story through a series of porcelain images and storyboards. Then you'll know exactly why they called the original Stadium The House That Ruth Built.Fan Author: Chris Martin",
      timelineItemType: 'VENUE',
    },
    dateTime: '2020-11-21',
    priceFrom: 183,
  })),
];

export const mockEventsByVenue = mockEvents.reduce((accumulator, currentValue) => {
  const existentVenueEvents = accumulator[currentValue.venueid];
  return {
    ...accumulator,
    [currentValue.venueid]: existentVenueEvents ? [...existentVenueEvents, currentValue] : [currentValue],
  };
}, {});

export const mockPathFor = {
  title: 'headline',
  local: 'venue.venueName',
  date: 'dateTime',
  price: 'priceFrom',
  image: 'venue.photoURL',
};

export const mockTeam = {
  title: 'New York Knicks',
  description:
    'The New York Knickerbockers, more commonly referred to as the Knicks, are an American professional basketball team based in the New York City borough of Manhattan. The Knicks compete in the National Basketball Association as a member of the Atlantic Division of the Eastern Conference, at Madison Square Garden. More',
  imageURL: TeamBg,
  carouselItemID: 2,
  mobileImageURL: TeamBgMobile,
};

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

export const mockLocal = {
  title: 'Local New York Knicks Advice',
  description:
    'New York City is the city that never sleeps and it can lay claim to being one of the best sporting cities in the world. With teams in every major competitive sport - football, baseball, soccer, basketball and ice hockey, you would be crazy to sleep when you are in the Big Apple! More',
  imageURL: CityBg,
  mobileImageURL: CityMobileBg,
  adviceImage:
    adviceVideoImage ||
    'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/03/109429699_a_l.jpg',
  carouselItemID: 1,
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

export const mockCarousel = [
  {
    blogpostID: 1,
    imageURL: TeamCarouselImg,
    blogpostTitle: '2020-21 NBA Schedule released',
    blogpostSummary:
      'A record 48 games will air in primetime in Europe, the Middle East and Africa, with 24 games each on Saturday and Sunday.',
  },
];

export const mockAdvice = [
  {
    id: 1,
    image: adviceImage,
    title: 'Restaurants near Madison Square Garden',
    info:
      'For years the area around Manhattan’s premier entertainment venue has been criticised for a lack of decent food options.',
  },
  {
    id: 2,
    image: adviceImageTwo,
    title: 'Hotels near Madison Square Garden',
    info:
      'Now, you might have heard that Manhattan isn’t exactly the cheapest place in the world, and a night or two in a hotel could ..',
  },
];

export const mockSelectOption = [
  {
    label: 'New York',
    value: 'new-york',
  },
  {
    label: 'something',
    value: 'something',
  },
];
