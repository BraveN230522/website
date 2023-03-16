import React from 'react';
import { render, act, waitFor, fireEvent } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import { GET_BLOG_POST } from '@graphql/queries/blog-post';
import { MockedProvider } from '@apollo/react-testing';

import Partnership from './index';

const mocks = [
  {
    request: {
      query: GET_BLOG_POST,
      variables: {},
    },
    result: {
      data: {
        allBlogPosts: Array.from({ length: 5 }, (v, k) => ({
          id: k,
          title: `Trip Ideas ${k}`,
          summary: `Atalanta B.C. fans: One of the most extreme Ultra cultures in European Football ${k}`,
          imageURL:
            'https://i0.wp.com/blog.sportswhereiam.com/wp-content/uploads/2020/01/Atalanta-BC-Ultras-Fans-Bergamo-Serie-A.jpg?w=1920&ssl=1',
          link:
            'https://blog.sportswhereiam.com/2020/01/atalanta-b-c-fans-one-of-the-most-extreme-ultra-cultures-in-european-football/',
        })),
      },
    },
  },
];

/**
 * TODO: When graphql request is configured,
 * this toHaveContent tests will be changed for a mock response
 */
describe('<Partnership />', () => {
  it('Renders the Partnership unchanged', async () => {
    let container;
    let getByText;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Partnership />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByText = component.getByText;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/Trip Ideas 0/));

    expect(container).toMatchSnapshot();
  });

  it('Changes the visible partner information', async () => {
    let container;
    let getByText;
    let getByRole;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Partnership />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByText = component.getByText;
      getByRole = component.getByRole;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/Trip Ideas 0/));

    fireEvent.click(getByRole('control-2'));

    expect(container).toHaveTextContent('Trip Ideas 1');
  });

  it('Does not change the visible partner information', async () => {
    let container;
    let getByRole;
    let getByText;

    act(() => {
      const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Partnership />
        </MockedProvider>,
        {
          wrapper: withGlobals,
        }
      );

      container = component.container;
      getByRole = component.getByRole;
      getByText = component.getByText;
    });

    expect(container).toHaveTextContent('Loading');

    await waitFor(() => getByText(/Trip Ideas 0/));

    fireEvent.click(getByRole('control-1'));

    expect(container).toHaveTextContent('Trip Ideas 0');
  });
});
