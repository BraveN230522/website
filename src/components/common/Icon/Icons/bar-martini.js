import React from 'react';

const BarMartiniSvg = ({ props }) => (
  <svg width="40" height="40" {...props}>
    <defs>
      <clipPath id="barMartiniB">
        <use xlinkHref="#barMartiniA" />
      </clipPath>
      <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" id="barMartiniA" />
    </defs>
    <use fill="#FFF" xlinkHref="#barMartiniA" />
    <g clipPath="url(#barMartiniB)">
      <use xlinkHref="#barMartiniA" fill="none" stroke="#000" strokeWidth="4" />
    </g>
    <path
      d="M20.739 12.825C20.942 10.692 22.696 9 24.857 9 27.144 9 29 10.9 29 13.242s-1.856 4.241-4.143 4.241c-.483 0-.966-.078-1.424-.26l-4.27 5.881v5.309l3.355-.026c.407 0 .763.364.763.78 0 .417-.33.781-.763.781l-8.16.052c-.406 0-.762-.364-.762-.78 0-.417.33-.781.763-.781l3.279-.026v-5.439l-6.482-8.9a.772.772 0 01-.077-.806.748.748 0 01.687-.443h8.973zm-5.578 4.17h7.275l1.655-2.341H13.453l1.707 2.423v-.083zm3.203 4.928l-2.455-3.23h4.91l-2.455 3.23z"
      fillRule="evenodd"
    />
  </svg>
);

export default BarMartiniSvg;
