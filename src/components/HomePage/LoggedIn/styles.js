import styled from '@emotion/styled';

import Header from '@components/Layout/Header';
import Hero from '@components/Layout/Hero';
import Button from '@components/common/Form/Button';
import BookHotel from '@components/common/BookHotel';
import EventsSection from '@components/common/EventsSection';

const LoggedHomeHeader = styled(Header)`
  div:nth-of-type(3) {
    left: 50%;
    display: inline-block;
    margin-left: -596px;
    max-width: 300px;

    ${({ theme }) =>
      theme.generateBreakpoint(
        1288,
        `
      left: 0;
      margin-left: 0;
      max-width: 100%;
      display: flex;
      justify-content: flex-start;
      padding: 0 2rem;
    `
      )}

    ${({ theme }) => theme.media.tablet`
      bottom: 12em;
    `}

    ${({ theme }) => theme.media.phone`
      justify-content: center;
      padding: 0;
      bottom: 6em;
    `}
  }
`;

const HeroWithSpacing = styled(Hero)`
  margin-bottom: 15px;
  text-align: left;

  h3 {
    font-size: 24px;
    margin-bottom: 30px;
    text-align: left;
    width: 65%;

    ${({ theme }) => theme.media.phone`
      font-size: 14px;
      padding: 0 13%;
      text-align: center;
      width: 100%;
    `}
  }

  p {
    padding-left: 0;

    ${({ theme }) => theme.media.phone`
      font-size: 14px;
      text-align: center;
      width: 100%;
    `}
  }

  ${({ theme }) => theme.media.phone`
    & > div {
      margin: 0 auto;
    }

    margin-bottom: 24px;
    text-align: center;
  `}
`;

const CheckItOutContainer = styled(Hero)`
  h2 {
    margin: 0;
  }

  ${({ theme }) => theme.media.phone`
    justify-content: center;
  `}
`;

const CheckItOut = styled(Button)`
  font-size: 16px;
  font-weight: 400;
  height: 42px;
  width: 128px;
`;

const BookHotelsLoggedIn = styled(BookHotel)`
  margin: 0 auto 56px;

  ${({ theme }) => theme.media.phone`
    margin: 0 auto 26px;
  `}
`;

const LoggedHomeEventsSection = styled(EventsSection)`
  margin-bottom: 50px;

  div {
    padding-bottom: 10px;
  }

  div > ul {
    margin: 48px 0 24px;
    transform: translateY(0);
  }

  div > div:nth-of-type(1) {
    margin-top: 0;
  }
`;

export {
  LoggedHomeHeader,
  HeroWithSpacing,
  CheckItOutContainer,
  CheckItOut,
  BookHotelsLoggedIn,
  LoggedHomeEventsSection,
};
