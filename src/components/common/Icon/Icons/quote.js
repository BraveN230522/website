import React from 'react';

const SvgQuote = props => (
  <svg width="30" height="16" {...props}>
    <text
      transform="translate(-4 -14)"
      fill="#000"
      fillRule="evenodd"
      fontFamily="Helvetica"
      fontSize="60"
      letterSpacing="-.419"
    >
      <tspan x="2.219" y="58">
        “
      </tspan>
    </text>
  </svg>
);

export default SvgQuote;
