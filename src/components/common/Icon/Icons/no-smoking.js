import React from 'react';

const NoSmokingSvg = ({ props }) => (
  <svg width="42" height="42" {...props}>
    <defs>
      <clipPath id="noSmokingB">
        <use xlinkHref="#noSmokingA" />
      </clipPath>
      <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" id="noSmokingA" />
    </defs>
    <g transform="translate(1 1)">
      <use fill="#FFF" xlinkHref="#noSmokingA" />
      <g clipPath="url(#noSmokingB)">
        <use xlinkHref="#noSmokingA" fill="none" stroke="#000" strokeWidth="4" />
      </g>
    </g>
    <path
      d="M27.849 13.73c.62-.61 1-1.45 1-2.38 0-1.51-1-2.79-2.38-3.21a.758.758 0 00-.97.72c0 .33.21.62.52.71.77.23 1.33.94 1.33 1.78 0 .82-.53 1.51-1.27 1.76-.33.11-.58.39-.58.74V14c0 .37.27.69.64.75 1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75v-1.49c0-2.22-1.28-4.14-3.15-5.03zm-4.12 2.47h1.3c1.87 0 3.47 1.35 3.48 3.16v.89c0 .42-.34.75-.75.75h-.01c-.42 0-.75-.34-.75-.75v-.55c0-1.31-.92-2.05-1.97-2.05h-1.42c-1.84 0-3.43-1.45-3.46-3.29a3.35 3.35 0 012.42-3.28c.47-.14.93.23.93.72 0 .34-.22.63-.54.72-.84.23-1.42.98-1.3 1.93.13 1.02 1.05 1.75 2.07 1.75zM12.499 22h12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-12c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm14.5 0h1.5v3h-1.5v-3zm4 0h-1.5v3h1.5v-3z"
      fillRule="evenodd"
    />
    <path d="M8.999 6h24v24h-24V6z" fill="none" />
    <path d="M8.464 8.354l25.038 25.039" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default NoSmokingSvg;
