import React, { useEffect, useState } from 'react';
import { adopt } from 'react-adopt';
import moment from 'moment';

import Header from '@components/Layout/Header';
import SearchBar from '@components/common/SearchBar';
import BookHotelSection from '@components/common/BookHotel';
import Subscribe from '@components/common/Subscribe';
import Partners from '@components/common/Partners';
import EventsSection from '@components/common/EventsSection';
import TopSportingLeagues from '@components/common/TopSportingLeagues';
import About from '@components/common/About';
import PopularSportingCities from '@components/common/PopularCityCardsHorizontalScroll';

import LoggedHomeBg from '@images/bg-logged-home.png';
import LoggedHomeBgMobile from '@images/bg-logged-home-mobile.png';
import console from '@utils/console';
import { CarouselQuery } from './carousel-query';
import { LoggedInQuery } from './logged-in-query';
import { MeQuery } from './me-query';
import { HeaderSearchContainer } from '../Layout/Header/styles';
import ContentCarousel from '../common/ContentCarousel';
import { HeroWithSpacing } from './styles';

import SignUp from '../common/Banners/sign-up';

import {
  LoggedHomeHeader,
  HeroWithSpacing as LoggedInHeroWithSpacing,
  CheckItOutContainer,
  CheckItOut,
} from './LoggedIn/styles';

const CarouselData = adopt({
  carousel: ({ render }) => <CarouselQuery>{render}</CarouselQuery>,
  me: ({ render }) => <MeQuery>{render}</MeQuery>,
  loggedIn: ({ render, userToken }) =>
    userToken ? <LoggedInQuery userToken={userToken}>{render}</LoggedInQuery> : render({}),
});

const formatUpComingEvent = ({ lineItems }) => {
  const { geo, name, localDateTime } = lineItems[0].product;

  return [
    {
      title: `You're going to ${geo.city}`,
      subTitle: `Enjoy your ${name} game`,
      description: `The date of the game is at: ${moment(localDateTime).format('MMM D, YYYY')}`,
      imageURL: LoggedHomeBg,
      mobileImageURL: LoggedHomeBgMobile,
    },
  ];
};

const renderLoggedIn = upComingEvents => {
  const nextEvent = upComingEvents[0];
  console.info('NEXT EVENT', nextEvent);
  return (
    <LoggedHomeHeader dark carouselItems={formatUpComingEvent(nextEvent)}>
      {activeItem => (
        <>
          <LoggedInHeroWithSpacing
            title={activeItem.title}
            subtitle={activeItem.subTitle}
            details={activeItem.description}
          />
          <CheckItOutContainer>
            <CheckItOut outline variant="secondary">
              Check it out!
            </CheckItOut>
          </CheckItOutContainer>
        </>
      )}
    </LoggedHomeHeader>
  );
};

const renderCarousel = allCarousels => (
  <Header isHomePage carouselItems={allCarousels}>
    {activeItem => (
      <>
        <HeroWithSpacing direction="center" subtitle={activeItem.description} title={activeItem.title} />
        <HeaderSearchContainer>
          <SearchBar />
        </HeaderSearchContainer>
      </>
    )}
  </Header>
);

const renderSignUpBanner = () => <SignUp />;

const Home = ({ user }) => {
  const isLoggedIn = user.userToken !== undefined;
  const [carousel, setCarousel] = useState(null);

  useEffect(() => {
    document.head.insertAdjacentHTML('beforeend', `<style>body{overflow-x:hidden}</style>`);
    return () => {
      document.head.insertAdjacentHTML('beforeend', ``);
    };
  }, []);

  return (
    <>
      {!isLoggedIn && renderSignUpBanner()}
      <CarouselData userToken={user.userToken}>
        {({ loggedIn: { upComingEvents }, carousel: { allCarousels } }) => {
          setCarousel(allCarousels);
          return renderCarousel(allCarousels);
        }}
      </CarouselData>
      {carousel ? (
        <>
          <EventsSection />
          <PopularSportingCities title="Popular sporting cities" />
          <BookHotelSection title="Book a Hotel with your sports ticket" hideOnMobile showNearbyVenue />
          <ContentCarousel interestId={0} interestType="homepage" />
          <TopSportingLeagues title="Get tickets for top sporting leagues" />
          <About />
          <Partners />
          <Subscribe />
        </>
      ) : (
        <div style={{ flex: 1, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="//sportswhereiam.com/loading.gif" width="65" height="65" />
        </div>
      )}
    </>
  );
};

export default Home;
