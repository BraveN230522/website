import React from 'react';
import { render } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import Mosaic from './index';

export const mockMosaicCities = [
  {
    id: 1,
    img:
      'https://edc.nyc/sites/default/files/styles/16x9_md/public/2019-05/Landing-Why-NYC%3F-Brooklyn-Bridge-Photo-Julienne-Schaer-NYC-and-Company-NYCEDC-02.jpg?itok=i6pWykbu',
    alt: 'New York City USA',
    legend: 'New York City USA',
  },
  {
    id: 2,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR-zPuUy3MV8gRm2VClF_5nsF7-TmjcwUSW2AhgTVpepglumYc&usqp=CAU',
    alt: 'Chicago USA',
    legend: 'Chicago USA',
  },
  {
    id: 3,
    img:
      'https://www.tripsavvy.com/thmb/uxndpaB3e4BaNrS4R3f03OXXA-s=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/thingstodoinmadridskyline-d05bf06ef9144f04973d5bfc50fbcee6.jpg',
    alt: 'Madrid Spain',
    legend: 'Madrid Spain',
  },
  {
    id: 4,
    img:
      'https://doubletree3.hilton.com/resources/media/dt/LONTLDI/en_US/img/shared/full_page_image_gallery/main/HL_towerbridge_30_677x380_FitToBoxSmallDimension_Center.jpg',
    alt: 'London United Kingdom',
    legend: 'London United Kingdom',
  },
  {
    id: 5,
    img: 'https://i.ytimg.com/vi/hNJr6qvUX6M/maxresdefault.jpg',
    alt: 'Houston USA',
    legend: 'Houston USA',
  },
  {
    id: 6,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHlbPiHfJDLYlVEWVq_H7-9xuGyFrzu8BQGGXHm_PQarHy_bJS&usqp=CAU',
    alt: 'Los Angeles USA',
    legend: 'Los Angeles USA',
  },
  {
    id: 7,
    img: 'https://www.global-business-school.org/sites/default/files/reasons-pursue-degree-barcelona-1.jpg',
    alt: 'Barcelona Spain',
    legend: 'Barcelona Spain',
  },
  {
    id: 8,
    img: 'https://www.terryferreira.ca/wp-content/uploads/2019/03/toronto.jpg',
    alt: 'Toronto Canada',
    legend: 'Toronto Canada',
  },
];

describe('<Mosaic />', () => {
  it('Renders a mosaic component', () => {
    const { container } = render(<Mosaic title="Title Test for mosaic component" data={mockMosaicCities} />, {
      wrapper: withGlobals,
    });
    expect(container).toMatchSnapshot();
  });
});
