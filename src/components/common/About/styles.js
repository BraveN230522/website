import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from '@components/common/Form/Button';

const AboutStyles = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  width: 100%;
  justify-content: flex-end;

  ${({ theme }) => theme.media.tablet` 
    flex-direction: column;
  `}
`;

const AboutContentImage = styled.div`
  max-width: 605px;
  width: 100%;

  ${({ theme }) => theme.media.tablet` 
    height: 200px;
    max-width: none;
    order: 0;
  `}
`;

const AboutImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const AboutWrapper = styled.div`
  margin-right: 74px;
  width: 46%;
  padding: 62px 0 52px;

  ${({ theme }) => theme.generateBreakpoint(1228, `width: 100%`)}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    max-width: 100%;
    order: 1;
  `}
`;

const sharedButtonStyles = css`
  margin-top: 40px;
  height: 38px;
  font-weight: 500;
  line-height: 21px;
`;

const AboutMoreButton = styled(Button)`
  ${sharedButtonStyles}

  ${({ theme }) =>
    theme.generateBreakpoint(
      960,
      `
      background-color: transparent;
      border-radius: 20px;
      color: ${theme.colors.white};
      margin-bottom: 48px;
      width: 132px;
  `
    )}

  margin-right: 8px;

  ${({ theme }) => theme.media.phone`
      margin-bottom: 0;
  `}
`;

const AboutMeetButton = styled(Button)`
  ${sharedButtonStyles}

  ${({ theme }) =>
    theme.generateBreakpoint(
      960,
      `
      background-color: transparent;
      border-radius: 20px;
      margin-bottom: 48px;
      width: 132px;
  `
    )}

  width: 173px;

  ${({ theme }) => theme.generateBreakpoint(960, ` display: none `)};
`;

const AboutContent = styled.div`
  max-width: 643px;
  width: 100%;
  padding-left: 30px;

  ${({ theme }) => theme.media.phone`
    padding-right: 30px;
  `}

  ${({ theme }) =>
    theme.generateBreakpoint(
      960,
      ` 
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 0;
    `
    )};
`;

const AboutTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.DINAlternate};
  font-size: 28px;
  font-weight: 400;
  line-height: 37px;
  margin: 0 0 24px 0;

  span {
    color: ${({ theme }) => theme.colors.swiamBlue};
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      580,
      `
        font-size: 24px;
        line-height: 32px;
        text-align: center;
      `
    )};
`;

const AboutDetails = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`;

const AboutItemsContainer = styled.div`
  max-width: 640px;
  width: 100%;
`;

const AboutItems = styled.div`
  display: flex;
  margin-top: 25px;
  width: 100%;
`;

const AboutDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 0 13px;
  opacity: 0.8;

  ${({ theme }) =>
    theme.generateBreakpoint(
      580,
      `
        font-size: 12px;
        line-height: 16px;
      `
    )};
`;

export {
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
  AboutMoreButton,
  AboutMeetButton,
};
