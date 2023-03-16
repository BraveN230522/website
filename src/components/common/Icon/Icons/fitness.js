import React from 'react';

const FitnessSvg = ({ props }) => (
  <svg width="40" height="40" {...props}>
    <defs>
      <clipPath id="fitnessB">
        <use xlinkHref="#fitnessA" />
      </clipPath>
      <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" id="fitnessA" />
    </defs>
    <use fill="#FFF" xlinkHref="#fitnessA" />
    <g clipPath="url(#fitnessB)">
      <use xlinkHref="#fitnessA" fill="none" stroke="#000" strokeWidth="4" />
    </g>
    <g>
      <path d="M32.167 19.2v1.6H30.5V24h-1.667v1.6h-2.5v-4.8H14.667v4.8h-2.5V24H10.5v-3.2H8.833v-1.6H10.5V16h1.667v-1.6h2.5v4.8h11.666v-4.8h2.5V16H30.5v3.2h1.667z" />
      <path d="M8 8h25v24H8V8z" fill="none" />
    </g>
  </svg>
);

export default FitnessSvg;
