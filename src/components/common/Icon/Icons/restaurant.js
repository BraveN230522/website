import React from 'react';

const RestaurantSvg = ({ props }) => (
  <svg width="40" height="40" {...props}>
    <defs>
      <clipPath id="restaurantB">
        <use xlinkHref="#restaurantA" />
      </clipPath>
      <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" id="restaurantA" />
    </defs>
    <use fill="#FFF" xlinkHref="#restaurantA" />
    <g clipPath="url(#restaurantB)">
      <use xlinkHref="#restaurantA" fill="none" stroke="#000" strokeWidth="4" />
    </g>
    <g>
      <path
        d="M12.501 16.833l1.4-7.333h.7l-.35 5.333 1.05.667.35-6h.7l.35 6 1.05-.667-.35-5.333h.7l1.4 7.333c-.012.542-.624.934-1.233 1.324-.621.397-1.239.793-1.217 1.343l.35 8.667c.053 1.333-1.4 1.333-1.4 1.333s-1.453 0-1.4-1.333l.35-8.667c.022-.537-.619-.93-1.252-1.32-.655-.403-1.302-.8-1.198-1.347zm9.863-5.15c.687-1.31 2.407-2.183 3.437-2.183v18.667c0 1.333-1.4 1.333-1.4 1.333s-1.526-.005-1.4-1.333l.7-7.334c-.574 0-2.1-.242-2.1-1.333v-3.333c0-1.31.189-3.503.763-4.484z"
        fillRule="evenodd"
      />
      <path d="M9.001 9.5h21v20h-21v-20z" fill="none" />
    </g>
  </svg>
);

export default RestaurantSvg;
