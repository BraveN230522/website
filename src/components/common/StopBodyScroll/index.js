import React from 'react';
import { Global, css } from '@emotion/core';

const StopBodyScroll = () => (
  <Global
    styles={css`
      body {
        overflow: hidden;
      }
    `}
  />
);

export default StopBodyScroll;
