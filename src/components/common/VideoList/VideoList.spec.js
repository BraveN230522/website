import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import VideoList from './index';

const mockVideos = Array.from({ length: 5 }, (v, index) => ({
  id: index,
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjAc88BYEOIl8QotTivsJFqGGZ7KBpHGACR0OeDbVtZ0_6OfIg&usqp=CAU',
  video: 'https://www.youtube.com/watch?v=vex93RMhe-Y',
}));

describe('<VideoList />', () => {
  it('Renders the popular players unchanged', () => {
    const { container } = render(<VideoList title="Test title for VideoList component" data={mockVideos} />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
