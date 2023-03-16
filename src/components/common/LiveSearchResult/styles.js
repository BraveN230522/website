import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import city from '@svg/city.svg';
import baseball from '@svg/baseball.svg';
import basketball from '@svg/basketball.svg';
import soccer from '@svg/soccer.svg';
import football from '@svg/football.svg';

const LEFT_SCROLL_GAP = '32px';

const revealAnimation = keyframes`
  0%, 3% {
    opacity: 0;
  }
 
  4%, 30% {
    opacity: 0.3;
  }

  60% {
    opacity: 0.8;
  }

  90% {
    opacity: 1;
  }
`;

const PositioningLeftScroll = styled.div`
  position: absolute;
  top: 52px;

  background: ${({ theme }) => theme.colors.white};
  padding-right: ${LEFT_SCROLL_GAP};
  border-radius: 25px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.05);
  margin-top: 8px;
  overflow: hidden;
  ${({ theme }) => theme.media.phone`
    padding-right: 0px;
  `};

  animation: ${revealAnimation} 0.4s ease;
`;

const InnerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  max-height: 465px;
  padding: 32px 28px 24px 40px;
  overflow: auto;

  ${({ theme }) => theme.media.phone`
    max-width: 370px;
    padding: 32px 4px 24px 4px;
  `};
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  li:first-of-type {
    padding-top: 8px;
  }

  padding-bottom: 8px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone};
`;

const Header = styled.lh`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.08px;
  color: ${({ theme }) => theme.colors.swiamBlue};
`;

const baseItem = ({ theme }) => `
  font-size: 18px;
  display: flex;
  cursor: pointer;
  padding: 8px 4px;
  color: ${theme.colors.greyishBrown};

  span.highlighted {
    color: ${theme.colors.black};
    font-weight: bold;
  }

  span.see-all {
    margin-left: 29px;
  }

  &:hover {
    background: ${theme.colors.lightStone};
  }

  ${theme.media.phone`
    font-size: 16px;
  `};
`;

const Item = styled.li`
  ${baseItem}
  margin-bottom: 8px;
`;

const WithDateAndVenueWrapper = styled.li`
  ${baseItem}
  flex-direction: column;
`;

const ItemWithNavigation = styled.div`
  ${baseItem}
  position: relative; /* NavigationIcon is absolute */
`;

const NotFound = styled.div`
  color: ${({ theme }) => theme.colors.browGray};
  font-family: ${({ theme }) => theme.fonts.Inter};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 0;

  span {
    margin-left: 8px;
  }
`;

const TextSearchError = styled.span`
  display: block;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Loading = styled.li`
  color: ${({ theme }) => theme.colors.browGray};
  font-family: ${({ theme }) => theme.fonts.Inter};
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = styled.li`
  color: ${({ theme }) => theme.colors.error};
  font-family: ${({ theme }) => theme.fonts.Inter};
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = ({ children }) => (
  <PositioningLeftScroll>
    <InnerWrapper>{children}</InnerWrapper>
  </PositioningLeftScroll>
);

const ItemLink = ({ children, href, date, venue }) => (
  <Link href={href}>
    <WithDateAndVenueWrapper>
      <ItemWithNavigation>{children}</ItemWithNavigation>
      <DateAndVenue>
        {date} - {venue}
      </DateAndVenue>
    </WithDateAndVenueWrapper>
  </Link>
);

const Icon = styled.img`
  margin-right: 7px;
`;

const ItemIcon = ({ name, alt }) => {
  // TODO: add more icons type after confirming with the API
  if (name === 'Baseball') {
    return <Icon src={baseball} alt={alt} />;
  }

  if (name === 'Basketball') {
    return <Icon src={basketball} alt={alt} />;
  }

  if (name === 'Soccer') {
    return <Icon src={soccer} alt={alt} />;
  }

  if (name === 'Football') {
    return <Icon src={football} alt={alt} />;
  }

  return <Icon src={city} alt={alt} />;
};

const NavigationIcon = styled.img`
  position: absolute;
  right: 4px;
  top: 0;
  transform: translateY(100%);
`;

const DateAndVenue = styled.span`
  opacity: 0.75;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  text-align: center;
  color: ${({ theme }) => theme.colors.browGray};
`;

export { Wrapper, List, Header, ItemLink, Loading, Error, NotFound, ItemIcon, NavigationIcon, Item, TextSearchError };
