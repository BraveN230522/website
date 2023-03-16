import React from 'react';

const SvgChevronLeft = ({ color = '#fff', ...props }) => (
  <svg width="32" height="32" {...props}>
    <defs>
      <clipPath id="chevron-left-b">
        <use xlinkHref="#chevron-left-a" />
      </clipPath>
      <path
        d="M9.333 7.448L2.276.39A1.333 1.333 0 10.391 2.276l8 8c.52.52 1.364.52 1.885 0l8-8A1.333 1.333 0 0016.39.391L9.333 7.448z"
        transform="translate(6.667 10.667)"
        id="chevron-left-a"
      />
    </defs>
    <path d="M13.886 16l7.057 7.057a1.333 1.333 0 11-1.886 1.886l-8-8a1.333 1.333 0 010-1.886l8-8a1.333 1.333 0 011.886 1.886L13.886 16z" />
    <g clipPath="url(#chevron-left-b)" transform="matrix(0 -1 -1 0 32 32)">
      <path d="M0 0h32v32H0V0z" fill={color} />
    </g>
  </svg>
);

export default SvgChevronLeft;
