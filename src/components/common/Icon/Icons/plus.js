import React from 'react';

const PlusSign = ({ className }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 8.25V3.75C8.25 3.33579 8.58579 3 9 3C9.41421 3 9.75 3.33579 9.75 3.75V8.25H14.25C14.6642 8.25 15 8.58579 15 9C15 9.41421 14.6642 9.75 14.25 9.75H9.75V14.25C9.75 14.6642 9.41421 15 9 15C8.58579 15 8.25 14.6642 8.25 14.25V9.75H3.75C3.33579 9.75 3 9.41421 3 9C3 8.58579 3.33579 8.25 3.75 8.25H8.25Z"
      fill="black"
    />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="12" height="12">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 8.25V3.75C8.25 3.33579 8.58579 3 9 3C9.41421 3 9.75 3.33579 9.75 3.75V8.25H14.25C14.6642 8.25 15 8.58579 15 9C15 9.41421 14.6642 9.75 14.25 9.75H9.75V14.25C9.75 14.6642 9.41421 15 9 15C8.58579 15 8.25 14.6642 8.25 14.25V9.75H3.75C3.33579 9.75 3 9.41421 3 9C3 8.58579 3.33579 8.25 3.75 8.25H8.25Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect width="18" height="18" fill="#000" />
    </g>
  </svg>
);

export default PlusSign;
