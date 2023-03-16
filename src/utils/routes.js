// NOTE: the routes in this app rely on technically invalid URLs (no trailing slash)
// to support this we make strict links optional but possible for future proofing
// EG: path/to/page/
import console from '@utils/console';

export const LINK_ABSOLUTE = 'absolute'; // EG: /path/to/page
export const LINK_RELATIVE = 'relative'; // EG: path/to/page
export const LINK_ABSOLUTE_STRICT = 'absolute-strict'; // EG: /path/to/page/
export const LINK_RELATIVE_STRICT = 'relative-strict';

String.prototype.toTitleCase = function() {
  const titleCased = this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  return titleCased;
};

export const formatSlugSegment = segment => {
  const formattedSlugSegment = `${segment}`
    .replace(/[\W]+/g, '-')
    .replace(/^\-+|\-+$/g, '')
    .toLowerCase();
  return formattedSlugSegment;
};

export const formatSlugSegments = (...args) => {
  const segments = [];
  const linkType = args.shift();
  args.forEach(segment => {
    segments.push(formatSlugSegment(segment));
  });
  if (linkType === LINK_ABSOLUTE) return `/${segments.join('/')}`;
  if (linkType === LINK_RELATIVE) return segments.join('/');
  if (linkType === LINK_ABSOLUTE_STRICT) return `/${segments.join('/')}/`;
  if (linkType === LINK_RELATIVE_STRICT) return `${segments.join('/')}/`;
  console.warn(
    'No link type or invalid link type sent to utils.routes.formatSlugSegments. Assuming all arguments are path segments and absolute link type.'
  );
  segments.unshift(formatSlugSegment(linkType));
  return `/${segments.join('/')}`;
};

export const reverseSlug = slug => slug.replace('-', ' ').toTitleCase();

export const validateSlugForMapping = slug => {
  if (slug === 'melbourne-vic') return 'melbourne,-vic';
  return slug;
};

export const getPageMetaForRoute = router => {
  const meta = {
    title: null,
    description: null,
  };
  if (routeMeta[router.route]) {
    meta.title = routeMeta[router.route].title;
    meta.description = routeMeta[router.route].description;
  } else return null;
  if (router.query?.citySlug) {
    const reversedSlug = reverseSlug(router.query.citySlug);
    meta.title = meta.title.replace(/<CITY>/g, reversedSlug);
    meta.description = meta.description.replace(/<CITY>/g, reversedSlug);
  }
  if (router.query?.venueSlug) {
    const reversedSlug = reverseSlug(router.query.venueSlug);
    meta.title = meta.title.replace(/<VENUE>/g, reversedSlug);
    meta.description = meta.description.replace(/<VENUE>/g, reversedSlug);
  }
  if (router.query?.questionSlug) {
    const reversedSlug = reverseSlug(router.query.questionSlug);
    meta.title = meta.title.replace(/<QUESTION>/g, reversedSlug);
    meta.description = meta.description.replace(/<QUESTION>/g, reversedSlug);
  }
  if (router.query?.eventName) {
    const reversedSlug = reverseSlug(router.query.eventName);
    meta.title = meta.title.replace(/<EVENT>/g, reversedSlug);
    meta.description = meta.description.replace(/<EVENT>/g, reversedSlug);
  }
  if (router.query?.sportname) {
    const reversedSlug = reverseSlug(router.query.sportname);
    meta.title = meta.title.replace(/<SPORT>/g, reversedSlug);
    meta.description = meta.description.replace(/<SPORT>/g, reversedSlug);
  }
  if (router.query?.sportname) {
    const reversedSlug = reverseSlug(router.query.sportname);
    meta.title = meta.title.replace(/<SPORT>/g, reversedSlug);
    meta.description = meta.description.replace(/<SPORT>/g, reversedSlug);
  }
  return meta;
};

const routeMeta = {
  '/': {
    title: 'Sports Tickets & Fan Travel Tips | Sports Where I Am',
    description:
      'Sports Where I Am is a sport travel service offering fully guaranteed tickets & fan travel tips across  65,000 sporting events across 240+ cities world-wide',
  },
  '/about': {
    title: 'Sports Where I Am',
    description:
      'Sports Where I Am is a travel service for sports fans: a place to find all of the information you need for attending sports events at your destination.',
  },
  '/apps': {
    title: 'Sports Ticket Booking App | Sports Where I am',
    description:
      'Download the Sports Where I Am app to access fully guaranteed tickets & fan travel tips across sporting events in 240+ cities and 430+ stadiums world-wide.',
  },
  '/contact': {
    title: 'Sports where I am',
    description:
      'Contact a member of the Sports Where I am team 24/7, 7 days per week on 1300 995 136 or +61 (0) 3 6111 3513.',
  },
  '/faq': {
    title: 'FAQ | Sports Where I Am',
    description:
      'Have any questions about our ticketing and accommodation booking service ? The Sports Where I Am team has answered the most common question, so  check it out.',
  },
  '/press': {
    title: 'Press | Sports Where I Am',
    description:
      'Sports Where I Am has been in the press, as sports fans discover our sports travel services and tips for over 65,000 sporting events across 240+ cities globally.',
  },
  '/our-guarantee': {
    title: 'Our Guarantee | Sports Where I Am',
    description:
      'Sports Where I Am tickets are guaranteed to be legitimate, arrive on time, be the exact tickets you ordered or comparable & refunded if the event is cancelled.',
  },
  '/hotels/search': {
    title: 'Book Hotels Near Sports Venues | Sports Where I Am',
    description:
      'You can now book hotel rooms alongside your tickets on Sports Where I Am! This means you can build your own custom sports package for any event on our website.',
  },
  '/bein': {
    title: 'Join Sports Where I Am Fan Community',
    description:
      'Join Sports Where I am now! By signing up you will be able to share advice with fellow fans and rank the advice you find the most useful for your game.',
  },
  '/letsgo': {
    title: `Let's go!`,
    description: '',
  },
  '/[citySlug]': {
    title: `<CITY> Sports Tickets And More  | Sports Where I Am`,
    description: `Get guaranteed tickets for your favourite sporting events in <CITY>, plus enjoy travel tips from local <CITY> sports fans to assist you in planning your trip.`,
  },
  '/[citySlug]/city-guide': {
    title: `<CITY> City Guide | Sports Where I Am`,
    description: `Get the best tips on <CITY> from our city guide. From finding the right accommodation to food and drinks, you will find all you need to plan your trip.`,
  },
  '/[citySlug]/fan-tips': {
    title: `<CITY> Sports Fan Travel Tips | Sports Where I Am`,
    description: `Discover the best travel tips from local <CITY> sports fans. Whether you are looking for the best parking area, or best bars and hotels, we have this covered.`,
  },
  '/[citySlug]/venues': {
    title: `<CITY> Sports Venues & Stadiums | Sports Where I Am`,
    description: `Discover the best sports venues and stadiums in <CITY>, plus get the best travel tips for all venues from local <CITY> sports fans.`,
  },
  '/[citySlug]/[venueSlug]': {
    title: '<VENUE> Tickets And More | Sports Where I Am',
    description:
      'Get guaranteed tickets for your favourite sporting events at <VENUE>, plus enjoy travel tips from local <CITY> sports fans to assist you in planning your trip to <VENUE>',
  },
  '/[citySlug]/[venueSlug]/fan-tips': {
    title: '<VENUE> Sports Fan Tips | Sports Where I Am',
    description:
      'Discover the best travel tips on <VENUE> from local sports fans. Whether you are looking for the best parking area, or best bars and hotels near <VENUE> we have this covered.',
  },
  '/[citySlug]/[venueSlug]/fan-tips/[questionSlug]': {
    title: '<QUESTION> ? - <CITY> | Sports Where I Am',
    description: '<QUESTION>, plus get more travel tips on all venues from local sports fans in <CITY>',
  },
  '/[citySlug]/[venueSlug]/event/[id]/[eventName]': {
    title: '<EVENT> Tickets at <VENUE>, <CITY> | Sports Where I Am',
    description:
      'Get fully guaranteed tickets to <EVENT> at <VENUE> in <CITY>. Buy your tickets and complete travel package securely on Sports Where I am.',
  },
  '/[citySlug]/[venueSlug]/event/[id]/[eventName]/tickets': {
    title: '<EVENT> Tickets at <VENUE>, <CITY> | Sports Where I Am',
    description:
      'Get fully guaranteed tickets to <EVENT> at <VENUE> in <CITY>. Buy your tickets and complete travel package securely on Sports Where I am.',
  },
  '/sport/[sportname]/league/[leagueslug]': {
    title: '<SPORT> Tickets And More | Sports Where I am',
    description:
      'Get fully guaranteed tickets to the best <LEAGUE> events. Buy your tickets and complete travel package securely on Sports Where I am.',
  },
  '/sport/[sportname]/team/[teamslug]': {
    title: '<TEAM> Tickets And More | Sports Where I am',
    description:
      'Get fully guaranteed tickets to <TEAM> games. Buy your tickets and complete travel package securely on Sports Where I am.',
  },
};
