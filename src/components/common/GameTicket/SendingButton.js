import React from 'react';

const SendingButton = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34px"
    height="34px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    className={className}
  >
    <circle cx="50" cy="50" r="13.1281" fill="none" stroke="#2891ff" strokeWidth="6">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        values="0;43"
        keyTimes="0;1"
        keySplines="0 0.2 0.8 1"
        calcMode="spline"
        begin="-0.5s"
      />
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1s"
        values="1;0"
        keyTimes="0;1"
        keySplines="0.2 0 0.8 1"
        calcMode="spline"
        begin="-0.5s"
      />
    </circle>
    <circle cx="50" cy="50" r="34.7468" fill="none" stroke="#2891ff" strokeWidth="6">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="1s"
        values="0;43"
        keyTimes="0;1"
        keySplines="0 0.2 0.8 1"
        calcMode="spline"
      />
      <animate
        attributeName="opacity"
        repeatCount="indefinite"
        dur="1s"
        values="1;0"
        keyTimes="0;1"
        keySplines="0.2 0 0.8 1"
        calcMode="spline"
      />
    </circle>
  </svg>
);

export default SendingButton;
