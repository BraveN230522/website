import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import CardHorizontal from './index';

const mockCardHorizontal = [
  {
    id: 1,
    img:
      'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2017/8/0/CI_Juniors-49thBroadwayInterior.jpg.rend.hgtvcom.616.462.suffix/1501638474622.jpeg',
    title: 'Restaurants near Madison Square Garden',
    info:
      'For years the area around Manhattan’s premier entertainment venue has been criticised for a lack of decent food options.',
  },
  {
    id: 2,
    img:
      'https://content.r9cdn.net/rimg/kimg/f1/0b/34800236-58e51e7e.jpg?width=1004&crop=true&caller=HotelDetailsPhoto',
    title: 'Hotels near Madison Square Garden',
    info:
      'Now, you might have heard that Manhattan isn’t exactly the cheapest place in the world, and a night or two in a hotel could ..',
  },
];

describe('<CardHorizontal />', () => {
  it('Renders a card horizontal component', () => {
    const { container } = render(
      mockCardHorizontal.map(item => <CardHorizontal key={item.id} cardData={item} />),
      {
        wrapper: withGlobals,
      }
    );
    expect(container).toMatchSnapshot();
  });
});
