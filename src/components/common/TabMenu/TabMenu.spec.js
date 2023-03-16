import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';

import TabMenu from './index';

const menu = [
  { name: 'Popular', renderContent: () => 'Popular content' },
  { name: 'Events', renderContent: () => 'Events content' },
  { name: 'Cities', renderContent: () => 'Cities content' },
  { name: 'Hotels', renderContent: () => 'Hotels content' },
  { name: 'Experiences', renderContent: () => 'Experiences content' },
];

describe('<TabMenu />', () => {
  it('Renders TabMenupage unchanged', () => {
    const { container } = render(<TabMenu items={menu} />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });

  it('Changes the active item when an item is clicked', () => {
    const { name, renderContent } = menu[1];
    const { getByText, container } = render(<TabMenu items={menu} />, {
      wrapper: withGlobals,
    });

    fireEvent.click(getByText(name));

    screen.getByText(renderContent());

    expect(container).toHaveTextContent(renderContent());
  });

  it('Should keep the same content when an active item is clicked', () => {
    const { name, renderContent } = menu[0];
    const { getByText, container } = render(<TabMenu items={menu} />, {
      wrapper: withGlobals,
    });

    fireEvent.click(getByText(name));

    screen.getByText(renderContent());

    expect(container).toHaveTextContent(renderContent());
  });
});
