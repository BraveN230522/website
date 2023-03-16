import React from 'react';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import withGlobals from '@swiamTestUtils/withGlobals';
import { GET_SPORTS } from '@graphql/queries/sports';

import Sports from './index';

const mocks = [
  {
    request: {
      query: GET_SPORTS,
      variables: {},
    },
    result: {
      data: {
        allSports: Array.from({ length: 20 }, (v, k) => ({
          sportID: k,
          sportName: `Sport ${k}`,
          sportIconURL: 'Sport club',
          sportIconURLV4: 'Sport club',
        })),
      },
    },
  },
];

describe('<Sports />', () => {
  it('Renders sports unchanged', async () => {
    let container;
    let getByText;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Sports />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByText = component.getByText;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/Sport 1/));

    expect(container).toMatchSnapshot();
  });

  it('Shows more tickets items when more option is clickedRenders sports unchanged', async () => {
    let container;
    let getByText;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Sports />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByText = component.getByText;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/Sport 1/));

    fireEvent.click(screen.getByLabelText('more sports'));

    await waitFor(() => screen.getAllByLabelText('sport ticket').length > 10);

    expect(container).toMatchSnapshot();
  });
});
