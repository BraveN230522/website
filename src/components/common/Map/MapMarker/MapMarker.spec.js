import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import MapMarker from './index';

jest.mock('crypto', () => ({
  randomBytes: num => new Array(num).fill(0),
}));

describe('<MapMarker />', () => {
  it('Renders the MapMarker', () => {
    const { container } = render(
      <MapMarker id="id-123" headline="Great event" venueName="Online" venueAddress="Your web browser" />,
      {
        wrapper: withGlobals,
      }
    );

    expect(container).toMatchSnapshot();
  });
});
