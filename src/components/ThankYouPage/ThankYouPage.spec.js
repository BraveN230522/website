import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, waitFor, act } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import { GET_BOOKING } from '@graphql/queries/booking';
import ThankYouPage from './index';

const bookingId = 'xY123';
const email = 'tester@test.com';
const fullName = 'John Doe Tester';

const mockBooking = {
  bookingId,
  bookerFullName: fullName,
  bookerEmail: email,
  ticketClassID: 'ABC',
  ticketDeliveryAddress: '',
  numberOfTickets: 5,
  eventID: '1670',
  eventDate: '1591121741',
  eventName: 'New York Knicks vs. Chicago Bulls',
  ticketDescription: '',
  venueName: 'Madison Square Garden',
  venueAddress: '4 Pennsylvania Plaza, New York, NY 10001, United States',
  tickets: [
    {
      id: '1',
      fullName,
      email,
    },
    {
      id: '2',
      fullName: null,
      email: null,
    },
    {
      id: '3',
      fullName: null,
      email: null,
    },
    {
      id: '4',
      fullName: null,
      email: null,
    },
    {
      id: '5',
      fullName: null,
      email: null,
    },
  ],
};

const mocks = [
  {
    request: {
      query: GET_BOOKING,
      variables: {
        bookingId,
        email,
        fullName,
      },
    },
    result: {
      data: {
        getBooking: mockBooking,
      },
    },
  },
];

describe('<ThankYouPage />', () => {
  it('Renders the ThankYouPage unchanged', async () => {
    let container;
    let getByText;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <ThankYouPage bookingId={bookingId} email={email} fullName={fullName} />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByText = component.getByText;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/4 Pennsylvania Plaza, New York, NY 10001, United States/));
    expect(container).toMatchSnapshot();
  });
});
