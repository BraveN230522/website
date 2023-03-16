import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { act, render, waitFor, fireEvent, screen } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';

import { GET_EVENTS } from '@graphql/queries/events';

import Events from './index';

const mockResponseFormat = (entity, index) => ({
  eventID: index,
  venue: {
    venueName: `Minute Maid Park ${index}`,
    venueImage: 'https://sportswhereiam.com/wp-content/uploads/2015/06/Minute-Maid-Park.jpg',
    city: {
      cityID: 24,
      cityName: 'Houston',
      country: {
        countryID: 'US',
      },
    },
  },
  eventName: `Houston Astros vs. Seattle Mariners ${index} - ${entity}`,
  eventImage: null,
  eventDateTime: '2020-08-18 19:10',
  fromPrice: {
    amount: 10,
  },
});

const mocks = [
  {
    request: {
      query: GET_EVENTS,
      variables: {},
    },
    result: {
      data: {
        allPopularEvents: Array.from({ length: 20 }, (v, index) => mockResponseFormat('popular', index)),
        allExperiences: Array.from({ length: 20 }, (v, index) => mockResponseFormat('experiences', index)),
      },
    },
  },
];

describe('<Events />', () => {
  it('Renders Eventspage unchanged', async () => {
    let container;
    let getByText;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Events />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByText = component.getByText;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/Houston Astros vs. Seattle Mariners 0 - popular/));

    expect(container).toMatchSnapshot();
  });

  it('Shows more events when more option is clicked', async () => {
    let container;
    let getByText;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Events />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByText = component.getByText;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/Houston Astros vs. Seattle Mariners 0 - popular/));

    fireEvent.click(screen.getByLabelText('more tab data'));

    await waitFor(() => screen.getAllByLabelText('card').length > 10);

    expect(container).toMatchSnapshot();
  });
});
