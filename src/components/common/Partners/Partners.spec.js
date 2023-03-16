import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import MCGImage from '@images/mcg-partnership.jpg';
import Partners from './index';

const mockTickets = Array.from({ length: 5 }, () => ({
  average: 8.5,
  price: '129',
  discount: 20,
  title: 'Hilton Garden Inn',
  subtitle: 'Near Yankee Stadium',
  image: MCGImage,
}));

describe('<Partners />', () => {
  it('Renders the Partners unchanged', () => {
    const { container } = render(<Partners tickets={mockTickets} />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });

  it('Renders the Partners without a ticket section', () => {
    const { container } = render(<Partners />, {
      wrapper: withGlobals,
    });

    expect(container).toMatchSnapshot();
  });
});
