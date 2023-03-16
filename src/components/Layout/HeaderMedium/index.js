import React from 'react';

import Header from '@components/Layout/Header';

import { HeroWithSpacing } from './styles';

const HeaderMedium = ({ withMenu, light = true, headerData, className }) => {
  return (
    <Header withMenu={withMenu} light={light} carouselItems={[headerData]} className={className} short>
      {({ title, subtitle, details }) => (
        <HeroWithSpacing direction="center" title={title} subtitle={subtitle} details={details} />
      )}
    </Header>
  );
};

export default HeaderMedium;
