import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import { MockedProvider } from '@apollo/react-testing';

import { ADD_SUBSCRIBE } from '@graphql/mutation/subscribe';

import Subscribe from './index';

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

describe('<Subscribe />', () => {
  it('Renders the Subscribe unchanged', () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Subscribe />
      </MockedProvider>,
      {
        wrapper: withGlobals,
      }
    );

    expect(container).toMatchSnapshot();
  });
});
