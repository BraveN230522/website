import React from 'react';

const WifiSvg = ({ props }) => (
  <svg width="40" height="40" {...props}>
    <defs>
      <clipPath id="wifiC">
        <use xlinkHref="#wifiA" />
      </clipPath>
      <clipPath id="wifiD">
        <use xlinkHref="#wifiB" />
      </clipPath>
      <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" id="wifiA" />
      <path
        d="M1.662 5.752a15 15 0 0119.846 0 1 1 0 001.324-1.5c-6.427-5.67-16.067-5.67-22.494 0a1 1 0 101.324 1.5zM18.03 9.32a10 10 0 00-12.8 0 1 1 0 11-1.28-1.537 12 12 0 0115.36 0 1 1 0 01-1.28 1.537zm-3.55 3.607a5 5 0 00-5.79 0 1 1 0 01-1.16-1.63 7 7 0 018.11 0 1 1 0 11-1.16 1.63z"
        transform="translate(0 5)"
        id="wifiB"
      />
    </defs>
    <use fill="#FFF" xlinkHref="#wifiA" />
    <g clipPath="url(#wifiC)">
      <use xlinkHref="#wifiA" fill="none" stroke="#000" strokeWidth="4" />
    </g>
    <g>
      <path
        d="M9.66 18.752a15 15 0 0119.847 0 1 1 0 001.324-1.5c-6.426-5.67-16.067-5.67-22.494 0a1 1 0 101.324 1.5zM26.03 22.32a10 10 0 00-12.8 0 1 1 0 11-1.28-1.536 12 12 0 0115.36 0 1 1 0 01-1.28 1.536zm-3.55 3.607a5 5 0 00-5.79 0 1 1 0 01-1.16-1.63 7 7 0 018.11 0 1 1 0 11-1.16 1.63z"
        fillRule="evenodd"
      />
      <g clipPath="url(#wifiD)" transform="translate(7.999 8)">
        <path d="M0 0h24v24H0V0z" />
      </g>
    </g>
  </svg>
);

export default WifiSvg;
