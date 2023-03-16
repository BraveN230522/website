import React from 'react';

const LocationIcon = ({ isMobile }) => (
  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6364 5.71429C11.6364 8.8702 5.81818 16 5.81818 16C5.81818 16 0 8.8702 0 5.71429C0 2.55837 2.60489 0 5.81818 0C9.03148 0 11.6364 2.55837 11.6364 5.71429ZM8.72727 5.81818C8.72727 7.42483 7.42483 8.72727 5.81818 8.72727C4.21154 8.72727 2.90909 7.42483 2.90909 5.81818C2.90909 4.21154 4.21154 2.90909 5.81818 2.90909C7.42483 2.90909 8.72727 4.21154 8.72727 5.81818Z"
      fill={isMobile ? 'white' : '#2891FF'}
    />
  </svg>
);

export default LocationIcon;
