import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import TopSportingLeagues from './index';

describe('<TopSportingLeagues />', () => {
  it('Renders the TicketsLeagues unchanged', () => {
    const { container } = render(<TopSportingLeagues />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
