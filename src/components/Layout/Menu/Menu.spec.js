import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import Menu from './index';

describe('<Menu />', () => {
  it('Renders a Menu component', () => {
    const { container } = render(<Menu />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
