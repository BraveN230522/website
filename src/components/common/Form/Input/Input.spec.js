import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import Input from './index';

/**
 * TODO: When graphql request is configured,
 * this toHaveContent tests will be changed for a mock response
 */
describe('<Input />', () => {
  it('Renders the Input unchanged', () => {
    const { container } = render(<Input />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
