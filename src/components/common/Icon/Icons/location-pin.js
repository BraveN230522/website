import React from 'react';

const SvgLocationPin = props => (
  <svg width="16px" height="22px" viewBox="0 0 16 22" {...props}>
    <defs>
      <path
        d="M16 7.85714C16 12.1965 8 22 8 22C8 22 0 12.1965 0 7.85714C0 3.51776 3.58172 0 8 0C12.4183 0 16 3.51776 16 7.85714ZM12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"
        id="location-path"
      />
      <clipPath id="location-clip">
        <use xlinkHref="#location-path" />
      </clipPath>
    </defs>
    <g id="Location-Pin">
      <use stroke="none" fill="#FFFFFF" xlinkHref="#location-path" fillRule="evenodd" />
      <g clipPath="url(#location-clip)">
        <use xlinkHref="#location-path" fill="none" stroke="#FFFFFF" strokeWidth="6" />
      </g>
    </g>
  </svg>
);

export default SvgLocationPin;
