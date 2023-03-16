import React from 'react';

const SvgArrowDown = props => (
  <svg width="5" height="15" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M2.5 13.882L.809 10.5h3.382L2.5 13.882z" stroke="#FF2A39" fill="#EE4343" />
      <path stroke="#FF2A39" fill="#EE4343" strokeLinecap="square" d="M2.5 1v12" />
    </g>
  </svg>
);

export default SvgArrowDown;
