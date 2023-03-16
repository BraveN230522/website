import React from 'react';

const SvgChevronRight = ({ color = '#fff', ...props }) => (
  <svg width="8" height="14" {...props}>
    <defs>
      <clipPath id="b">
        <use xlinkHref="#a" />
      </clipPath>
      <path d="M5.586 7L.293 12.293a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414l-6-6A1 1 0 00.293 1.707L5.586 7z" id="a" />
    </defs>
    <path d="M5.586 7L.293 12.293a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414l-6-6A1 1 0 00.293 1.707L5.586 7z" />
    <g clipPath="url(#b)">
      <path d="M-8-5h24v24H-8V-5z" fill={color} />
    </g>
  </svg>
);

export default SvgChevronRight;
