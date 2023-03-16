import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import MapTooltip from './index';

jest.mock('crypto', () => ({
  randomBytes: num => new Array(num).fill(0),
}));

describe('<MapTooltip />', () => {
  it('Renders the MapTooltip', () => {
    const { container } = render(
      <MapTooltip id="id-123" headline="Great event" venueName="Online" venueAddress="Your web browser" />,
      {
        wrapper: withGlobals,
      }
    );

    expect(container).toMatchSnapshot();
  });
});
