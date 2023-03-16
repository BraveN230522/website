import React from 'react';

const SvgClose = ({ fill, ...props }) => (
  <svg width="24" height="24" {...props}>
    <defs>
      <path
        id="prefix__a"
        d="M.293.293c.39-.39 1.024-.39 1.414 0L7 5.585 12.293.293c.36-.36.928-.388 1.32-.083l.094.083c.39.39.39 1.024 0 1.414L8.415 7l5.292 5.293c.36.36.388.928.083 1.32l-.083.094c-.39.39-1.024.39-1.414 0L7 8.415l-5.293 5.292c-.36.36-.928.388-1.32.083l-.094-.083c-.39-.39-.39-1.024 0-1.414L5.585 7 .293 1.707C-.067 1.347-.095.78.21.387z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(5 5)">
      <mask id="prefix__b" fill={fill}>
        <use xlinkHref="#prefix__a" />
      </mask>
      <use fill={fill} fillRule="nonzero" xlinkHref="#prefix__a" />
      <g fill={fill} mask="url(#prefix__b)">
        {/* <path d="M0 0H24V24H0z" transform="translate(-5 -5)" /> */}
      </g>
    </g>
  </svg>
);

export default SvgClose;
