import React from 'react';
import styled from '@emotion/styled';

const SvgMapView = ({ className }) => (
  <StyledSvg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="0.5"
      y="0.5"
      width="31"
      height="31"
      rx="3.5"
      stroke={className === 'dark' ? 'none' : 'black'}
      fill={className === 'dark' ? 'black' : 'white'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 22H8L5 27H27L24 22H13Z"
      fill="white"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="base"
    />
    <path
      d="M16 24L15.5749 24.2633L16 24.9495L16.4251 24.2633L16 24ZM16 24C16.4251 24.2633 16.4251 24.2632 16.4252 24.2631L16.4254 24.2627L16.4263 24.2613L16.4297 24.2557L16.4429 24.2344L16.4938 24.1515C16.5382 24.079 16.6031 23.9726 16.6857 23.836C16.8508 23.563 17.0863 23.1697 17.3689 22.6875C17.9338 21.7236 18.6876 20.4026 19.442 18.9764C20.1956 17.5518 20.954 16.0142 21.5252 14.6186C22.0874 13.2453 22.5 11.9368 22.5 11C22.5 7.41015 19.5899 4.5 16 4.5C12.4101 4.5 9.5 7.41015 9.5 11C9.5 11.9368 9.91259 13.2453 10.4748 14.6186C11.046 16.0142 11.8044 17.5518 12.558 18.9764C13.3124 20.4026 14.0662 21.7236 14.6311 22.6875C14.9137 23.1697 15.1492 23.563 15.3143 23.836C15.3969 23.9726 15.4618 24.079 15.5062 24.1515L15.5571 24.2344L15.5703 24.2557L15.5737 24.2613L15.5746 24.2627L15.5748 24.2631C15.5749 24.2632 15.5749 24.2633 16 24Z"
      fill="white"
      stroke="black"
      className="drop"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 14C17.6569 14 19 12.6569 19 11C19 9.34315 17.6569 8 16 8C14.3431 8 13 9.34315 13 11C13 12.6569 14.3431 14 16 14Z"
      fill={className === 'dark' ? 'black' : 'white'}
      stroke={className === 'dark' ? 'black' : 'black'}
      className="small-circle"
    />
  </StyledSvg>
);

const StyledSvg = styled.svg`
  &:hover {
    ${({ className, theme }) =>
      className === 'light' &&
      `
      > rect {
        fill: ${theme.colors.greyishBrown};
      }

      .base {
        stroke: ${theme.colors.greyishBrown};
      }

      .drop {
        stroke: ${theme.colors.greyishBrown};
      }
      
      .small-circle {
        stroke: ${theme.colors.greyishBrown};
        fill: ${theme.colors.greyishBrown};
      }
    `}
  }
`;

export default SvgMapView;
