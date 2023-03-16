const RELATIVE_UNIT_BASE = 16;
const MAX_WIDTH = '1255px';
const MOBILE_HEADER_HEIGHT = '93px';

const breakpoints = {
  tablet: 960,
  phone: 768,
};

const generateBreakpoint = (width, cssMarkup) => `
  @media (max-width: ${width / RELATIVE_UNIT_BASE}em) {
    ${cssMarkup};
  }
`;

const theme = {
  baseline: RELATIVE_UNIT_BASE,
  setContainer: () => `
    max-width: ${MAX_WIDTH};
    width: 100%;
    margin-left:auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;

    @media (max-width: 48em) {
      padding-left: 12px;
      padding-right: 12px;
    } 
  `,
  stripe: {
    fonts: [
      {
        family: 'Inter',
        src: 'url(https://fonts.googleapis.com/css2?family=Inter&display=swap)',
        weight: '400',
      },
    ],
  },
  maxWidth: MAX_WIDTH,
  mobileHeaderHeight: MOBILE_HEADER_HEIGHT,
  fonts: {
    Abril: 'Abril Fatface, cursive',
    Lato: 'Lato, sans-serif',
    Inter: 'Inter, sans-serif',
    DINAlternate: 'DINAlternateRegular, sans-serif',
    DINAlternateBold: 'DINAlternateBold, sans-serif',
    Helvetica: 'Helvetica, sans-serif',
    Trueno: 'TruenoRg, sans-serif',
  },
  colors: {
    lightStone: '#eeeeee',
    stone: '#d1d1d1',
    browGray: '#9c9c9c',
    gray: '#999999',
    grey: '#7D7D7D',
    lightGrey: '#7c7c7c',
    lightTooltip: '#6c6b6b',
    normalGrey: '#383838',
    greyishBrown: '#565656',
    nightRider: '#2E2E2E',
    charcoal: '#272727',
    controlColor: '#53A7FF',
    swiamBlue: '#2891ff',
    swiamDarkBlue: '#066cda',
    swiamBlueHover: 'rgba(40, 145, 255, 0.2)',
    bluish: '#2079d6',
    lightNavy: '#12457a',
    lightGreyBlue: '#b8bcbf',
    positive: '#b1ca46',
    dark: '#1c2226',
    blue: '#328ed9',
    lightBlue: '#ebeced',
    iceBlue: '#e6f4ff',
    white: '#ffffff',
    whiteSmoke: '#f4f4f4',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.5)',
    error: '#d03a2d',
    success: '#28a745',
    suvaGrey: '#929292',
    nobel: '#979797',
    whisper: '#EDEDED',
    feedbackAlert: '#d07b2d',
    feedbackDanger: '#d03a2d',
    feedbackSuccess: '#84d02d',
    feedbackWarning: '#d0c32d',
  },
  generateBreakpoint,
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => generateBreakpoint(breakpoints[label], args);
    return acc;
  }, {}),
};

export default theme;
