import React from 'react';
import { css, Global } from '@emotion/react';
import theme from './theme';

const styles = css`
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,500,600&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Inter:300,400,500,600,800&display=swap');

  @font-face {
    font-family: Helvetica;
    src: local(Helvetica), url('/fonts/helvetica-1.otf');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: TruenoRg;
    src: local(TruenoRg), url('/fonts/TruenoRg.otf');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: DINAlternateRegular;
    src: local(DINAlternateRegular), url('/fonts/DINAlternateRegular.otf');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: DINAlternateBold;
    src: local(DINAlternateBold), url('/fonts/DINAlternateBold.ttf');
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
  }

  * {
    box-sizing: border-box;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body,
  html {
    margin: 0;
    scroll-behavior: smooth;
  }

  p,
  a,
  span,
  label,
  figure,
  section,
  div,
  input,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  button {
    font-family: ${theme.fonts.Inter};
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const globalStyles = <Global styles={styles} />;
