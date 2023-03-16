import React from 'react';
import styled from '@emotion/styled';

const SvgGridView = ({ className }) => (
  <StyledSvg width="32" height="32" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill="none" fillRule="evenodd">
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="3.5"
        stroke={className === 'dark' ? 'none' : 'black'}
        fill={className === 'dark' ? 'black' : 'white'}
        className="big-square"
      />
      <rect
        stroke={className === 'dark' ? 'white' : 'black'}
        fill="#FFF"
        x="5.5"
        y="5.5"
        width="9"
        height="9"
        rx="3"
        className="small-square"
      />
      <rect
        stroke={className === 'dark' ? 'white' : 'black'}
        fill="#FFF"
        x="17.5"
        y="5.5"
        width="9"
        height="9"
        rx="3"
        className="small-square"
      />
      <rect
        stroke={className === 'dark' ? 'white' : 'black'}
        fill="#FFF"
        x="17.5"
        y="17.5"
        width="9"
        height="9"
        rx="3"
        className="small-square"
      />
      <rect
        stroke={className === 'dark' ? 'white' : 'black'}
        fill="#FFF"
        x="5.5"
        y="17.5"
        width="9"
        height="9"
        rx="3"
        className="small-square"
      />
    </g>
  </StyledSvg>
);

const StyledSvg = styled.svg`
  &:hover {
    ${({ className, theme }) =>
      className === 'light' &&
      `
      > g {

        .big-square {
          fill: ${theme.colors.greyishBrown};
        }
        
        .small-square {
          stroke: ${theme.colors.greyishBrown};
        }
        
      }
    `}
  }
`;

export default SvgGridView;
