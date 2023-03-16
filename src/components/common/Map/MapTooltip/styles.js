import React from 'react';
import styled from '@emotion/styled';
import ReactTooltip from 'react-tooltip';

const SvgNavigation = () => (
  <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 2.30739L12.3001 13.999L0.000981601 25.6902L1.79731 27.5L16 13.999L1.79731 0.5L0 2.30739Z"
      fill="#2A98FF"
    />
  </svg>
);

const TOOLTIP_ARROW_SIZE = '20px';

const StyledTooltip = styled(ReactTooltip)`
  /* Each '&' creates a new random class name. */
  /* With '&&.something' e create a selector with 2 new random class names. */
  /* This means that '&&.something' will create a selector with 2 new random class names */
  /* Therefore, we will have a CSS selector with a higher specificity level without using '!important' in this case */
  &&.__react_component_tooltip {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0;
    border-radius: 9px;
    box-shadow: 0px 2px 27px rgba(0, 0, 0, 0.4);

    &:hover {
      cursor: default;
    }

    &.place-top {
      margin-top: -${TOOLTIP_ARROW_SIZE};

      &::before {
        border-top: ${TOOLTIP_ARROW_SIZE} solid transparent;
      }

      &::after {
        border-left: ${TOOLTIP_ARROW_SIZE} solid transparent;
        border-right: ${TOOLTIP_ARROW_SIZE} solid transparent;
        bottom: -${TOOLTIP_ARROW_SIZE};
        left: calc(50% - ${TOOLTIP_ARROW_SIZE});
        margin-left: 0;
        border-top-color: ${({ theme }) => theme.colors.white};
        border-top-style: solid;
        border-top-width: ${TOOLTIP_ARROW_SIZE};
      }
    }

    &.place-bottom {
      margin-top: ${TOOLTIP_ARROW_SIZE};

      &::before {
        border-bottom: ${TOOLTIP_ARROW_SIZE} solid transparent;
      }

      &::after {
        border-left: ${TOOLTIP_ARROW_SIZE} solid transparent;
        border-right: ${TOOLTIP_ARROW_SIZE} solid transparent;
        top: -${TOOLTIP_ARROW_SIZE};
        left: calc(50% - ${TOOLTIP_ARROW_SIZE});
        margin-left: 0;
        border-bottom-color: ${({ theme }) => theme.colors.white};
        border-bottom-style: solid;
        border-bottom-width: ${TOOLTIP_ARROW_SIZE};
      }
    }

    &.place-left {
      margin-left: -${TOOLTIP_ARROW_SIZE};

      &::before {
        border-left: ${TOOLTIP_ARROW_SIZE} solid transparent;
      }

      &::after {
        border-top: ${TOOLTIP_ARROW_SIZE} solid transparent;
        border-bottom: ${TOOLTIP_ARROW_SIZE} solid transparent;
        right: -${TOOLTIP_ARROW_SIZE};
        top: calc(50% - ${TOOLTIP_ARROW_SIZE});
        margin-top: 0;
        border-left-color: ${({ theme }) => theme.colors.white};
        border-left-style: solid;
        border-left-width: ${TOOLTIP_ARROW_SIZE};
      }
    }

    &.place-right {
      margin-left: ${TOOLTIP_ARROW_SIZE};

      &::before {
        border-right: ${TOOLTIP_ARROW_SIZE} solid transparent;
        border-right: ${TOOLTIP_ARROW_SIZE} solid white;
      }

      &::after {
        border-top: ${TOOLTIP_ARROW_SIZE} solid transparent;
        border-bottom: ${TOOLTIP_ARROW_SIZE} solid transparent;
        left: -${TOOLTIP_ARROW_SIZE};
        top: calc(50% - ${TOOLTIP_ARROW_SIZE});
        margin-top: 0;
        border-right-color: ${({ theme }) => theme.colors.white};
        border-right-style: solid;
        border-right-width: ${TOOLTIP_ARROW_SIZE};
      }
    }
  }
`;

const TooltipContentWrapper = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  width: 339px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Headline = styled.a`
  opacity: 0.8;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-style: normal;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.colors.swiamBlue};

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

const VenueName = styled.span`
  opacity: 0.8;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-style: normal;
  font-size: 14px;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.colors.black};
`;

const VenueAddress = styled.p`
  margin: 0;
  padding: 0;
  opacity: 0.8;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-style: normal;
  font-size: 12.3px;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.colors.lightTooltip};
`;

const MoreEvents = styled.a`
  margin-top: 16px;
  opacity: 0.8;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.colors.swiamBlue};

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

const NavigationLink = styled.a`
  position: absolute;
  right: 16px;
  top: 45.5px;
  &:hover {
    cursor: pointer;
  }
`;

export {
  StyledTooltip,
  TooltipContentWrapper,
  Headline,
  VenueName,
  VenueAddress,
  MoreEvents,
  NavigationLink,
  SvgNavigation,
};
