import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import LocalAdvice from './index';
import { mockLocal, mockAdvice } from './mocks';

describe.skip('<LocalAdvice />', () => {
  it('Renders a local advice component', () => {
    const { container } = render(
      <LocalAdvice
        tips={mockLocal.tips}
        local={mockLocal.local}
        adviceImage={mockLocal.adviceImage}
        cardData={mockAdvice}
      />,
      {
        wrapper: withGlobals,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
