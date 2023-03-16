import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import Tag from './index';

describe('<Tag />', () => {
  it('Renders a tag tag with variant light', () => {
    const { container } = render(<Tag variant="light">One tag</Tag>, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });

  it('Renders a tag tag without variant', () => {
    const { container } = render(<Tag variant="light">Another tag</Tag>, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
