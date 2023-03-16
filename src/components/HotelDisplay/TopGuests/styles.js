import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Section from '@components/common/Section';
import More from '@components/common/More';

const TopGuestsSection = styled(Section)`
  ${({ theme }) => theme.setContainer()};

  h1 {
    font-weight: 500;
  }

  ${({ theme }) => theme.media.tablet`
    article{
      display: flex;
      flex-direction: column;
    }
  `};
`;

const TopGuestsContent = styled.div`
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.stone};
  display: flex;
  padding-bottom: 33px;

  &:nth-last-child(2),
  &:last-child {
    border-bottom: none;
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      960,
      `
        margin-bottom: 15px;
        padding-bottom: 15px;
        width: 100%;

        &:nth-last-child(2) {
          border-bottom: 2px solid ${theme.colors.stone};
        }
      `
    )}

  ${({ theme }) => theme.media.phone`
    align-items: unset;
    flex-direction: column;
    width: 100%;
  `};
`;

const TopGuestIniitialContent = styled.div`
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-right: 26px;
  min-width: 60px;

  ${({ theme }) => theme.media.phone`
    height: 40px;
    margin-right: 8px;
    min-width: 40px;
  `};
`;

const TopGuestIniitialText = styled.span`
  font-size: 26px;
  line-height: 35px;
  letter-spacing: -0.18px;

  ${({ theme }) => theme.media.phone`
    font-size: 14px;
    letter-spacing: -0.08px;
    line-height: 16px;
  `};
`;

const TopGuestDetails = styled.div`
  display: column;
  max-width: 386px;
  width: 100%;

  ${({ theme }) => theme.media.tablet`
      max-width: calc(100% - 182px);
    `};

  ${({ theme }) => theme.media.phone`
      align-items: center;
      display: flex;
      margin-bottom: 8px;
      max-width: 100%;
    `};
`;

const dynamicVariants = ({ variant, theme }) =>
  ({
    name: css`
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.16px;

      ${theme.media.phone`
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.12px;
      `};
    `,

    stay: css`
      color: ${theme.colors.grey};
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.09px;

      ${theme.media.phone`
        position: absolute;
        right: 33px;
      `};

      ${theme.generateBreakpoint(
        400,
        `
          width: 67px;
          text-align: right;
        `
      )}
    `,

    feedback: css`
      display: -webkit-box;
      font-size: 14px;
      line-height: 19px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    `,
  }[variant]);

const TopGuestDetailsText = styled.p`
  ${dynamicVariants};
  margin: 0;
`;

const dynamicBgColors = ({ bgColor, theme }) =>
  ({
    alert: css`
      background-color: ${theme.colors.feedbackAlert};
    `,

    danger: css`
      background-color: ${theme.colors.feedbackDanger};
    `,

    success: css`
      background-color: ${theme.colors.feedbackSuccess};
    `,

    warning: css`
      background-color: ${theme.colors.feedbackWarning};
    `,
  }[bgColor]);

const TopGuestRatingContent = styled.div`
  ${dynamicBgColors};
  align-items: center;
  border-radius: 8px;
  display: flex;
  height: 38px;
  justify-content: center;
  margin-left: 26px;
  width: 69px;
`;

const TopGuestRating = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.12px;
`;

const TopGuestFeedbackContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoreTopGuests = styled(More)`
  margin: 24px 0 40px 0;
  text-transform: uppercase;
`;

export {
  TopGuestsSection,
  TopGuestsContent,
  TopGuestIniitialContent,
  TopGuestIniitialText,
  TopGuestDetails,
  TopGuestDetailsText,
  TopGuestRatingContent,
  TopGuestRating,
  TopGuestFeedbackContent,
  MoreTopGuests,
};
