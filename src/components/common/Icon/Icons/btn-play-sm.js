import React from 'react';

const SvgBtnPlaySm = props => (
  <svg width="40" height="40" {...props}>
    <defs>
      <clipPath id="c">
        <use xlinkHref="#a" />
      </clipPath>
      <clipPath id="d">
        <use xlinkHref="#b" />
      </clipPath>
      <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" id="a" />
      <path d="M10 0l10 16.47H0L10 0z" transform="rotate(90 10.588 20.588)" id="b" />
    </defs>
    <use fillOpacity=".2" xlinkHref="#a" />
    <g clipPath="url(#c)">
      <use xlinkHref="#a" fill="none" stroke="#FFF" strokeWidth="4" />
    </g>
    <g>
      <use fill="#FFF" xlinkHref="#b" />
      <g clipPath="url(#d)">
        <use xlinkHref="#b" fill="none" stroke="#FFF" strokeWidth="2" />
      </g>
    </g>
  </svg>
);

export default SvgBtnPlaySm;
