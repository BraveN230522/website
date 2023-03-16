import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';

import Page from './Page';

describe('<Page />', () => {
  it('renders Page layout unchanged', () => {
    const { container } = render(<Page />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
