import React from 'react';

const ParkingHotelSvg = ({ props }) => (
  <svg width="40" height="40" {...props}>
    <defs>
      <clipPath id="b">
        <use xlinkHref="#a" />
      </clipPath>
      <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" id="a" />
    </defs>
    <use fill="#FFF" xlinkHref="#a" />
    <g clipPath="url(#b)">
      <use xlinkHref="#a" fill="none" stroke="#000" strokeWidth="4" />
    </g>
    <path
      d="M17.566 23.262v6.647h-2.852V11h6.74q2.207 0 3.656.803 1.45.804 2.17 2.193c.48.926.72 1.968.72 3.125q0 1.745-.725 3.135-.725 1.39-2.179 2.197l-.247.13q-1.39.678-3.404.678l-3.88.001zm3.584-9.815h-3.583v7.396h3.62q1.394 0 2.262-.485c.578-.324 1.003-.765 1.274-1.325.27-.56.406-1.198.406-1.912q0-1.07-.406-1.902c-.271-.554-.697-.987-1.279-1.301q-.872-.471-2.294-.471z"
      fillRule="evenodd"
    />
  </svg>
);

export default ParkingHotelSvg;
