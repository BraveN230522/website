import React from 'react';

const SvgTicket = ({ color }) => (
  <svg width="12" height="21">
    <defs>
      <path
        d="M8.379 10.5l-7.94 7.94a1.5 1.5 0 002.122 2.12l9-9a1.5 1.5 0 000-2.12l-9-9A1.5 1.5 0 00.439 2.56l7.94 7.94z"
        id="steps-a"
      />
    </defs>
    <g fill="none" fillRule="evenodd" opacity=".278">
      <mask id="steps-b" fill={color}>
        <use xlinkHref="#steps-a" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#steps-a" />
      <g mask="url(#steps-b)" fill="#000">
        <path d="M-12-7.5h36v36h-36z" />
      </g>
    </g>
  </svg>
);

export default SvgTicket;
