import React from 'react';

const SvgChevronDown = props => (
  <svg viewBox="0 0 20 20" height="24" {...props}>
    <defs>
      <clipPath id="b">
        <use xlinkHref="#a" />
      </clipPath>
      <path
        d="M7 5.586L1.707.293A1 1 0 00.293 1.707l6 6a1 1 0 001.414 0l6-6A1 1 0 0012.293.293L7 5.586z"
        transform="translate(5 8)"
        id="a"
      />
    </defs>
    <path d="M12 13.586L6.707 8.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L12 13.586z" />
    <g clipPath="url(#b)">
      <path d="M0 0h24v24H0V0z" fill="#FFF" />
    </g>
  </svg>
);

export default SvgChevronDown;
