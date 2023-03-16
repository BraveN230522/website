import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import About from './index';

describe('<About />', () => {
  it('Renders the About componenent', () => {
    const { container } = render(<About />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
