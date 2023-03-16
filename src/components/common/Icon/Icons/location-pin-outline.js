import React from 'react';

const SvgLocationPinOutline = props => (
  <svg width="16" height="22" {...props}>
    <defs>
      <path
        d="M8 22C8 22 16 12.1965 16 7.85714C16 3.51776 12.4183 0 8 0C3.58172 0 0 3.51776 0 7.85714C0 12.1965 8 22 8 22Z"
        id="path_1"
      />
      <path
        d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
        transform="translate(4 4)"
        id="path_2"
      />
      <clipPath id="clip_1">
        <use xlinkHref="#path_1" />
      </clipPath>
      <clipPath id="clip_2">
        <use xlinkHref="#path_2" />
      </clipPath>
    </defs>
    <g id="Group-4">
      <g id="Oval1">
        <g clipPath="url(#clip_1)">
          <use xlinkHref="#path_1" fill="none" stroke="#FFFFFF" strokeWidth="4" />
        </g>
      </g>
      <g id="Oval">
        <g clipPath="url(#clip_2)">
          <use xlinkHref="#path_2" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgLocationPinOutline;
