import React from 'react';
import ContactHeaderBackground from '@images/home-background.jpg';
import { ContactSection, ContactFAQBox, ContactText, ContactWrapper } from './styles';
import HeaderMedium from '../Layout/HeaderMedium';

import FAQ from './FAQ';

const Contact = () => {
  const headerData = {
    title: 'Contact Us',
    details:
      'If you have further questions and would like to get in contact with us please choose your preferred method below',
    mobileImageURL: ContactHeaderBackground,
    imageURL: ContactHeaderBackground,
  };
  return (
    <>
      <HeaderMedium withMenu headerData={headerData} />

      <ContactWrapper>
        <div>
          <ContactSection title="Address">
            <ContactText>
              Sports Where I Am
              <br />
              The Commons, Cremorne
              <br />
              10-20 Gwynne Street, Cremorne, Victoria, 3121
            </ContactText>
          </ContactSection>
          <ContactSection title="Email">
            <ContactText>
              For general enquiries or if you’d like help with anything please contact our Customer Service team in
              Australia <a href="mailto:team@sportswhereiam.com">here</a>.
            </ContactText>
          </ContactSection>
          <ContactSection title="Call us">
            <ContactText>
              24/7, 7 days per week
              <br />
              Within Australia: 1300 995 136
              <br />
              All other countries: +61 (0) 3 6111 3513
              <br />
            </ContactText>
          </ContactSection>
          <ContactSection title="Social Media">
            <ContactText>
              <a href="https://www.facebook.com/sportswhereiam" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              ,
              <a href="https://www.messenger.com/t/sportswhereiam" target="_blank" rel="noopener noreferrer">
                Messenger
              </a>
              ,
              <a href="https://twitter.com/sportswhereiam" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              ,
              <a href="https://www.instagram.com/sportswhereiam/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </ContactText>
          </ContactSection>
        </div>

        <ContactFAQBox>
          <FAQ />
        </ContactFAQBox>
      </ContactWrapper>
    </>
  );
};

export default Contact;
