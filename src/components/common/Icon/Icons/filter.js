import React from 'react';

const SvgFilter = props => (
  <svg width="43" height="20">
    <defs>
      <path
        d="M8.002 10.826L.238 1.646A1 1 0 011.002 0h20a1 1 0 01.763 1.646l-7.763 9.18V19a1 1 0 01-1.447.894l-4-2A1 1 0 018.002 17v-6.174z"
        id="a-filter"
      />
      <path
        d="M10.5 13.586L5.869 8.293a.8.8 0 00-1.238 0 1.104 1.104 0 000 1.414l5.25 6a.8.8 0 001.238 0l5.25-6a1.104 1.104 0 000-1.414.8.8 0 00-1.238 0L10.5 13.586z"
        id="b-filter"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path stroke="#000" strokeWidth="2" d="M21.001.997L1 1.003l8.002 9.457V17l4 2v-8.54l8-9.463z" />
      <g transform="translate(26 -2)">
        <mask id="c-filter" fill="#fff">
          <use xlinkHref="#b-filter" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#b-filter" />
        <g mask="url(#c-filter)" fill="#000">
          <path d="M0 0h21v24H0z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgFilter;
