import React from 'react';

import OtherEvents from '@components/common/OtherEvents';
import LocalAdvice from '@components/common/LocalAdvice';
import Partners from '@components/common/Partners';
import TopSportingLeagues from '@components/common/TopSportingLeagues';
import About from '@components/common/About';
import Sports from '@components/common/Sports';
import Subscribe from '@components/common/Subscribe';

import {
  LoggedHomeHeader,
  HeroWithSpacing,
  CheckItOutContainer,
  CheckItOut,
  BookHotelsLoggedIn,
  LoggedHomeEventsSection,
} from './styles';

import { mockHomeLoggedIn, mockOffers, mockLocal, mockAdvice } from './mock';
import ContentCarousel from '../../common/ContentCarousel';

const HomeLoggedIn = () => {
  return (
    <>
      <LoggedHomeHeader dark carouselItems={[mockHomeLoggedIn, mockHomeLoggedIn]}>
        {activeItem => (
          <>
            <HeroWithSpacing title={activeItem.title} subtitle={activeItem.subTitle} details={activeItem.description} />
            <CheckItOutContainer>
              <CheckItOut outline variant="secondary">
                Check it out!
              </CheckItOut>
            </CheckItOutContainer>
          </>
        )}
      </LoggedHomeHeader>
      <BookHotelsLoggedIn dark data={mockOffers} title="Book hotels near the game" />
      <OtherEvents />
      <LocalAdvice
        interestId={0}
        interestType="homepage"
        tips={mockLocal.tips}
        local={mockLocal.local}
        adviceImage={mockLocal.adviceImage}
        cardData={mockAdvice}
      />
      <LoggedHomeEventsSection />

      <ContentCarousel interestId={0} interestType="homepage" />
      <Sports />
      <TopSportingLeagues title="Tickets for top Sporting Leagues" />
      <About />
      <Partners />
      <Subscribe />
    </>
  );
};

export default HomeLoggedIn;
