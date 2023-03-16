import React from 'react';
import Link from 'next/link';

import Icon from '@components/common/Icon';
import { MosaicStyles, MosaicGrid, MosaicContent, MosaicImage, MosaicCity, MosaicCountry } from './styles';

const Mosaic = ({ data, title }) => {
  return (
    <MosaicStyles title={title} centered>
      <MosaicGrid>
        {!!data?.length &&
          data.map(item => (
            <Link key={item.id} href={item.url}>
              <MosaicContent>
                <MosaicImage src={item.img} alt={item.alt} />
                <MosaicCity>
                  {item.name}
                  <MosaicCountry>{item.country}</MosaicCountry>
                </MosaicCity>
                <Icon name="chevronRight" />
              </MosaicContent>
            </Link>
          ))}
      </MosaicGrid>
    </MosaicStyles>
  );
};

export default Mosaic;
