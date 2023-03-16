import React from 'react';

const SvgArrowDraw = props => (
  <svg width="15" height="10" {...props}>
    <g fill="#D1D1D1" stroke="#D1D1D1" fillRule="evenodd">
      <path d="M13.382 2.5L10 .809v3.382L13.382 2.5z" />
      <path d="M13.382 2.5L10 .809v3.382L13.382 2.5z" />
      <path strokeLinecap="square" d="M1.5 2.5h11" />
      <g>
        <path d="M1.618 7.5L5 9.191V5.809L1.618 7.5z" />
        <path strokeLinecap="square" d="M13.5 7.5h-11" />
      </g>
    </g>
  </svg>
);

export default SvgArrowDraw;
