import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import Select from './index';

export const mockSelectOption = ['', 'New York', 'Kansas', 'Chicago', 'Los Angeles'];

describe('<Select />', () => {
  it('Renders the select unchanged', () => {
    const { container } = render(<Select data={mockSelectOption} />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
