import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import CarouselControls from './index';

const mockItems = [
  {
    image: 'some-image.jpg',
    title: 'New MCG Partnership',
    description:
      'Explore the inner sanctum of the MCG, walk on the hallowed arena and experience where legends play by taking a guided MCG tour.',
    link: '#',
  },
  {
    image: 'another-image.jpg',
    title: 'Item while we dont have graphql',
    description: 'Explore the inner sanctum of the MCG, walk on the hallowed arena.',
    link: '#',
  },
];

describe('<CarouselControls />', () => {
  describe('Snapshot Tests -', () => {
    it('Renders the CarouselControls without items', () => {
      const { container } = render(<CarouselControls />, {
        wrapper: withGlobals,
      });

      expect(container).toMatchSnapshot();
    });

    it('Renders the first control as selected when no activeIndex is passed', () => {
      const { container } = render(<CarouselControls items={mockItems} onItemClick={jest.fn()} />, {
        wrapper: withGlobals,
      });

      expect(container).toMatchSnapshot();
    });

    it('Renders a selected control item when an activeIndex is passed', () => {
      const { container } = render(<CarouselControls activeIndex={1} items={mockItems} onItemClick={jest.fn()} />, {
        wrapper: withGlobals,
      });

      expect(container).toMatchSnapshot();
    });
  });

  describe('Functional Tests -', () => {
    it('Calls onItemClick function passing the clicked control index as argument', () => {
      const onItemClickFn = jest.fn(() => () => null);
      const { getByRole } = render(<CarouselControls activeIndex={1} items={mockItems} onItemClick={onItemClickFn} />, {
        wrapper: withGlobals,
      });

      expect(onItemClickFn).toBeCalledWith(0);

      fireEvent.click(getByRole('control-2'));

      expect(onItemClickFn).toBeCalledWith(1);
    });
  });
});
