import React from 'react';

const SvgMasterCard = ({ className, props }) => (
  <svg className={className} width="70px" height="45px" viewBox="0 0 70 45" {...props}>
    <defs>
      <image
        width="140"
        height="88"
        xlinkHref="data:image/png;base64,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"
        id="img_1"
      />
    </defs>
    <use xlinkHref="#img_1" fill="#FFFFFF" stroke="none" transform="scale(0.5 0.5113636)" />
  </svg>
);

export default SvgMasterCard;