import React from 'react';

const SvgBtnPlay = props => (
  <svg width="72" height="72" {...props}>
    <defs>
      <clipPath id="ca">
        <use xlinkHref="#aa" />
      </clipPath>
      <clipPath id="da">
        <use xlinkHref="#ba" />
      </clipPath>
      <path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36z" id="aa" />
      <path d="M18 0l18 29.647H0L18 0z" transform="rotate(90 19.059 37.059)" id="ba" />
    </defs>
    <use fillOpacity=".2" xlinkHref="#aa" />
    <g clipPath="url(#ca)">
      <use xlinkHref="#aa" fill="#2891FF" stroke="#2891FF" strokeWidth="4" />
    </g>
    <g>
      <use fill="#FFF" xlinkHref="#ba" />
      <g clipPath="url(#da)">
        <use xlinkHref="#ba" fill="none" stroke="#FFF" strokeWidth="2" />
      </g>
    </g>
  </svg>
);

export default SvgBtnPlay;
