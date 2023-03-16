import React from 'react';
import AboutHeaderBackground from '@images/home-background.jpg';
import CitationImage from '@images/citation.jpg';
import JordanImage from '@images/JordanD.png';
import BenImage from '@images/BennS.png';
import MattImage from '@images/MattS.png';
import AdrianImage from '@images/AdrianG.png';

import JoeP from '@images/JoeP.png';
import AdrianoDM from '@images/AdrianoDM.png';
import AndrewH from '@images/AndrewH.png';
import SarahJ from '@images/SarahJ.png';

import GlennM from '@images/GlennM.png';
import AdamF from '@images/AdamF.png';
import CarlieM from '@images/CarlieM.png';
import NickR from '@images/NickR.png';
import MickB from '@images/MickB.png';
import SivaK from '@images/SivaK.png';

import StaticSectionTitle from '@components/common/StaticSectionTitle';
import HeaderMedium from '../Layout/HeaderMedium';
import {
  FeaturedPhraseWrapper,
  PhraseAuthor,
  FeaturedPhraseContainer,
  AboutText,
  FeaturedPhrase,
  AboutSection,
  AboutGridContainer,
  AboutGridItem,
  AboutSubTitle,
  SmallText,
  AboutContainer,
  AboutSectionCOVID,
} from './styles';

const About = () => {
  const headerData = {
    title: 'About',
    details: `Since our founding in 2012, we’ve been a travel service for sports fans visiting a new city: a place to find all of the information needed for experiencing sports events at a travel destination. Our aim is to simplify the process by compiling schedules, tickets, maps, accommodation, and more into one customisable service.`,
    mobileImageURL: AboutHeaderBackground,
    imageURL: AboutHeaderBackground,
  };
  return (
    <>
      <HeaderMedium light={false} headerData={headerData} />
      <FeaturedPhraseWrapper>
        <FeaturedPhraseContainer>
          <FeaturedPhrase>
            <img src={CitationImage} />
            The focus of Sports Where I Am is to be useful for every travelling sports fan. We want them to have less
            browser tabs open, less time needed on research, more lifelong memories created.
            <img src={CitationImage} />
          </FeaturedPhrase>
          <PhraseAuthor>Matt Scully, CEO</PhraseAuthor>
        </FeaturedPhraseContainer>
      </FeaturedPhraseWrapper>
      <AboutSection>
        <StaticSectionTitle>Our Team</StaticSectionTitle>

        <AboutGridContainer>
          <AboutGridItem>
            <img src={MattImage} alt="Matt Scully" />
            <AboutSubTitle>Matt Scully</AboutSubTitle>
            <AboutText>Co Founder & CEO</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={AdrianImage} alt="Adrian Gale" />
            <AboutSubTitle>Adrian Gale</AboutSubTitle>
            <AboutText>Co Founder</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={JordanImage} alt="JordanImage Digby" />
            <AboutSubTitle>Jordan Digby</AboutSubTitle>
            <AboutText>Co Founder & CTO</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={BenImage} alt="Benn Scully" />
            <AboutSubTitle>Benn Scully</AboutSubTitle>
            <AboutText>Head of Marketing</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={AndrewH} alt="AndrewH.png" />
            <AboutSubTitle>Andrew Hickey</AboutSubTitle>
            <AboutText>Travel partnerships</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={AdamF} alt="AdamF.png" />

            <AboutSubTitle>Adam Fiske</AboutSubTitle>
            <AboutText>Sport partnerships</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={CarlieM} alt="CarlieM.png" />

            <AboutSubTitle>Carlie Merenda</AboutSubTitle>
            <AboutText>PR Manager</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={NickR} alt="NickR.png" />

            <AboutSubTitle>Nick Riewoldt</AboutSubTitle>
            <AboutText>Brand Ambassador</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={SivaK} alt="Siva Krishanan" />

            <AboutSubTitle>Siva Krishanan</AboutSubTitle>
            <AboutText>Business Manager- SE Asia</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={SarahJ} alt="SarahJ" />

            <AboutSubTitle>Sarah Juchima</AboutSubTitle>
            <AboutText>USA Brand Advocate</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={AdrianoDM} alt="Adriano del Monte" />
            <AboutSubTitle>Adriano del Monte</AboutSubTitle>
            <AboutText>European Brand Advocate</AboutText>
          </AboutGridItem>

          <AboutGridItem>
            <img src={GlennM} alt="GlennM.png" />

            <AboutSubTitle>Glenn McGuinness</AboutSubTitle>
            <AboutText>Senior Advisor</AboutText>
          </AboutGridItem>

          {/* TODO: Client will provide information about them
          <AboutGridItem>
            <img src={JoeP} alt="Joe P." />

            <AboutSubTitle>Joe P</AboutSubTitle>
          </AboutGridItem>

          <AboutGridItem>
            <img src={MickB} alt="MickB.png" />

            <AboutSubTitle>MickB.png</AboutSubTitle>
          </AboutGridItem> */}
        </AboutGridContainer>
      </AboutSection>
      <AboutSectionCOVID dark>
        <AboutContainer>
          <StaticSectionTitle light>COVID-19</StaticSectionTitle>
          <AboutSubTitle light>Policies and Procedures</AboutSubTitle>
          <SmallText light>
            In 2020, our efforts focused on communicating with our customers after travel plans were thrown into
            disarray around the world. We’re proud of our customer-first response, including providing refunds and
            credits as the circumstances required. You can read our communication in this time{' '}
            <a href="https://blog.sportswhereiam.com/2020/03">here</a>.
          </SmallText>
        </AboutContainer>
      </AboutSectionCOVID>
      <AboutSection>
        <AboutContainer>
          <StaticSectionTitle>Every trip is different, so we focus on each customer</StaticSectionTitle>
          <SmallText>
            Our dedicated Customer Service team is on hand to answer any questions you have throughout your entire
            journey with us. From itinerary ideas to ticket suggestions to questions at the gate of your event, we know
            it’s important to be responsive. So, we’ve made this a high priority.
          </SmallText>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

export default About;
