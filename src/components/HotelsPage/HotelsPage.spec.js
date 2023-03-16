import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { ADD_SUBSCRIBE } from '@graphql/mutation/subscribe';
import withGlobals from '@swiamTestUtils/withGlobals';

import Hotels from './index';

const mockData = {
  email: 'test@test.com',
  fullName: 'Mocked Name',
};
const mocks = [
  {
    request: {
      query: ADD_SUBSCRIBE,
      variables: mockData,
    },
    result: {
      data: {
        allSports: Array.from({ length: 1 }, () => mockData),
      },
    },
  },
];

describe('<Hotels />', () => {
  it('Renders the hotels page unchanged', () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Hotels />
      </MockedProvider>,
      {
        wrapper: withGlobals,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
