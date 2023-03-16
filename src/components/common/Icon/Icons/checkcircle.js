import React from 'react';

const SvgCheckCircle = props => (
  <svg width="32" height="32" {...props}>
    <path
      d="M2 16C2 8.269 8.269 2 16 2s14 6.269 14 14-6.269 14-14 14S2 23.731 2 16zm13.466 4.553l6.581-9.125a.25.25 0 00-.203-.397h-1.466a1 1 0 00-.809.416l-4.912 6.812-2.225-3.087a.995.995 0 00-.81-.416h-1.465c-.203 0-.322.232-.203.397l3.896 5.4a.994.994 0 001.616 0z"
      fill="#FFF"
      fillRule="evenodd"
    />
    <path d="M0 0h32v32H0V0z" fill="none" />
  </svg>
);

export default SvgCheckCircle;
