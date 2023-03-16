import React from 'react';
import { render } from '@testing-library/react';

import withGlobals from '@swiamTestUtils/withGlobals';

import Header from './index';

describe('<Header />', () => {
  it('renders Header layout unchanged', () => {
    const { container } = render(<Header>{activeItem => <p>something</p>}</Header>, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
