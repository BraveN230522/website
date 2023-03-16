import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import Section from './index';

describe('<Section />', () => {
  it('Renders section Component', () => {
    const { container } = render(<Section />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
