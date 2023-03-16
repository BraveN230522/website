import React from 'react';
import { render } from '@testing-library/react';

import withGlobals from '@swiamTestUtils/withGlobals';
import MapView from './index';
import mockedEventsByVenue from './mock';

jest.mock('crypto', () => ({
  randomBytes: num => new Array(num).fill(0),
}));

describe('<MapView />', () => {
  it('Renders the MapView', () => {
    const { container } = render(<MapView events={mockedEventsByVenue} />, {
      wrapper: withGlobals,
    });

    expect(container).toMatchSnapshot();
  });
});
