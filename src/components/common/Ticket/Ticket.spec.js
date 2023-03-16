import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import MCGImage from '@images/mcg-partnership.jpg';
import Ticket from './index';

const ticket = {
  average: 8.5,
  price: '129',
  discount: 20,
  title: 'Hilton Garden Inn',
  subtitle: 'Near Yankee Stadium',
  image: MCGImage,
};

describe('<Ticket />', () => {
  it('Renders the Ticket unchanged', () => {
    const { container } = render(<Ticket {...ticket} />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });

  it('Renders a Ticket without discount', () => {
    const { container } = render(<Ticket {...ticket} discount={null} />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
