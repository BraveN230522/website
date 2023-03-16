import React from 'react';
import Router from 'next/router';
import Icon from '@components/common/Icon';
import aboutBackground from '@images/bg-about.jpg';
import {
  AboutStyles,
  AboutContentImage,
  AboutImage,
  AboutWrapper,
  AboutContent,
  AboutTitle,
  AboutDetails,
  AboutItemsContainer,
  AboutItems,
  AboutDescription,
  AboutMeetButton,
  AboutMoreButton,
} from './styles';

const aboutItems = [
  {
    id: 1,
    icon: 'checkCircle',
    description: 'Search hundreds of cities, leagues and teams around the world',
  },
  {
    id: 2,
    icon: 'ticket',
    description: 'Purchase tickets, accommodation, merchandise, experiences and stadium tours in one place',
  },
  {
    id: 3,
    icon: 'handShake',
    description: 'Get support and travel specific advice from our passionate customer service team',
  },
];

const meetTheTeamClick = e => {
  Router.push({
    pathname: '/about/',
  });
};

const About = () => {
  return (
    <>
      <AboutStyles>
        <AboutWrapper>
          <AboutContent>
            <AboutTitle>
              We are a <span>sports travel</span> company
            </AboutTitle>
            <AboutDetails>
              We believe attending a sports event in a new city is a necessary travel experience.
            </AboutDetails>
            <AboutItemsContainer>
              {aboutItems &&
                aboutItems.map(item => (
                  <AboutItems key={item.id}>
                    <>
                      <span>
                        <Icon name={item.icon} size={32} />
                      </span>
                      <AboutDescription>{item.description}</AboutDescription>
                    </>
                  </AboutItems>
                ))}
              <AboutDetails>
                Sports Where I Am ensures travelling fans spend less time researching and more time creating lifelong
                memories.
              </AboutDetails>
            </AboutItemsContainer>
            {/* <AboutMoreButton variant="secondary">More</AboutMoreButton> */}
            <AboutMeetButton variant="secondary" onClick={meetTheTeamClick} outline>
              Meet the Team
            </AboutMeetButton>
          </AboutContent>
        </AboutWrapper>
        <AboutContentImage>
          <AboutImage src={aboutBackground} alt="about" />
        </AboutContentImage>
      </AboutStyles>
    </>
  );
};

export default About;
