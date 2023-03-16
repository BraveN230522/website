import React from 'react';
import Link from 'next/link';
import theme from '@utils/styles/theme';
import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';

import Icon from '@components/common/Icon';

import LogoFooter from '@images/footerLogo.png';
import {
  FooterMenu,
  ContainerMedia,
  ContainerLogo,
  ContainerSocialsShare,
  Details,
  FooterContainer,
  FooterStyles,
  ItemMenu,
  LinkMenu,
  ListMenu,
} from './styles';

const linksFooter = [
  [
    // { name: 'Home', link: '/' },
    { name: 'Hotels', link: '/hotels/search' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: 'https://blog.sportswhereiam.com' },
    { name: 'FAQ', link: '/contact' },
    // { name: 'Events', link: '' },
    // { name: 'Cities', link: '' },
  ],
  [
    // { name: 'Leagues', link: '' },
    // { name: 'City Guides', link: '' },
    // { name: 'Tips', link: '' },
    // { name: 'News', link: '' },
    // { name: 'Work with us', link: '/work-with-us' },
    { name: 'Partner with us', link: '/partner' },
    { name: 'Photo Credits', link: 'https://blog.sportswhereiam.com/?p=4932&secret=LArP13' },
    { name: 'Contact', link: '/contact' },
  ],
  [
    // { name: 'Press', link: '/press' },
    { name: 'Terms of Service', link: '/terms-of-service' },
    { name: 'Ticket Purchase Terms', link: '/ticket-purchase' },
    { name: 'Privacy', link: '/privacy-policy' },
    // { name: 'Our Guarantee', link: '/faq' },
  ],
  // [
  //   // { name: 'Sign-up / Login', link: '' },
  //   // { name: 'Download App for iOS', link: '' },
  //   // { name: 'Download App for Android', link: '' },
  // ],
];

const socialShares = [
  { name: 'facebook', link: 'https://www.facebook.com/sportswhereiam/' },
  { name: 'instagram', link: 'https://www.instagram.com/sportswhereiam/' },
  { name: 'twitter', link: 'https://twitter.com/sportswhereiam?lang=en' },
  { name: 'youtube', link: 'https://www.youtube.com/channel/UCRAILwk3wo7UWXP1HSj7J3A' },
  { name: 'linkedin', link: 'https://www.linkedin.com/company/sports-where-i-am' },
];

const Footer = () => {
  const [isMobile] = useDefaultMediaQueries();
  return (
    <FooterStyles>
      <FooterContainer>
        <div>
          <FooterMenu>
            {linksFooter &&
              linksFooter.map((item, index) => (
                <ListMenu key={index}>
                  {item.map((menu, menuIndex) => (
                    <ItemMenu key={menuIndex}>
                      <LinkMenu href={menu.link}>{menu.name}</LinkMenu>
                    </ItemMenu>
                  ))}
                </ListMenu>
              ))}
          </FooterMenu>
          <ContainerMedia>
            <ContainerLogo>
              <Link href="/">
                <a>
                  <img src={LogoFooter} />
                </a>
              </Link>
            </ContainerLogo>
            <ContainerSocialsShare>
              {socialShares &&
                socialShares.map((item, index) => (
                  <a href={item.link} key={index} target="_blank">
                    <Icon name={item.name} color={theme.colors.stone} />
                  </a>
                ))}
            </ContainerSocialsShare>
          </ContainerMedia>
        </div>

        <Details>
          Tickets listed for sale on Sports Where I Am are a combination of primary and reseller tickets. Prices may be
          higher or lower than face value. All of our tickets are suitable for travellers.
          <br /> <br />
          Sports Where I Am is a registered trademark of Where I Am Group © {new Date().getFullYear()} WhereIam Group
          Pty Ltd.
        </Details>
      </FooterContainer>
    </FooterStyles>
  );
};

export default Footer;
