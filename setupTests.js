// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/index.test.js
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom/extend-expect';

window.matchMedia = () => ({
  media: '(max-width: 1680px)',
  matches: true,
  onchange: null,
  addListener: () => null,
  removeListener: () => null,
});

jest.mock('next/router', () => ({
  useRouter: () => ({ pathname: 'mocked-router' }),
}));

jest.mock('react-dates', () => ({
  DateRangePicker: () => 'MOCKED RANGE PICKER',
}));
