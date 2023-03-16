import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import Button from './index';

/**
 * TODO: When graphql request is configured,
 * this toHaveContent tests will be changed for a mock response
 */
describe('<Button />', () => {
  it('Renders a primary button', () => {
    const { container } = render(<Button variant="primary" />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });

  it('Renders a primary button with an outline style', () => {
    const { container } = render(<Button variant="primary" outline />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });

  it('Renders a secondary button', () => {
    const { container } = render(<Button variant="secondary" />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });

  it('Renders a secondary button with an outline style', () => {
    const { container } = render(<Button variant="secondary" outline />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
