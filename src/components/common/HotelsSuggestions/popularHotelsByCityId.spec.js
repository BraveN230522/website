import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, waitFor, act } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import MCGImage from '@images/mcg-partnership.jpg';
import { GET_HOTELS } from '@graphql/queries/hotel';
import BookHotel from './index';

const mockTickets = Array.from({ length: 5 }, (v, index) => ({
  fromPrice: {
    amount: 43,
  },
  hotelID: index,
  hotelImage: MCGImage,
  hotelName: 'Mocked name',
  nearbyVenue: {
    cityName: 'Mocked city name',
    country: {
      countryID: 43,
    },
  },
  venueAddress: `Mocked street n ${index}`,
  venueImage: MCGImage,
}));

const mocks = [
  {
    request: {
      query: GET_HOTELS,
      variables: {},
    },
    result: {
      data: {
        allHotels: mockTickets,
      },
    },
  },
];

describe('<BookHotel />', () => {
  it('Renders the BookHotel unchanged', async () => {
    let container;
    let getByText;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BookHotel />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByText = component.getByText;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/Mocked street n 4/));
    expect(container).toMatchSnapshot();
  });
});
