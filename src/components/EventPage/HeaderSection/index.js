import React from 'react';

import Header from '@components/Layout/Header';
import Bookmark from '@components/common/Bookmark';
import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';

import { HeroWithSpacing, DetailsWrapper, DetailsRow, Details, HorizontalSpace } from './styles';
import ClockIcon from './ClockIcon';
import LocationIcon from './LocationIcon';

const HeaderSection = ({ headerData, isBookmarked }) => {
  const [isMobile] = useDefaultMediaQueries();

  const handleToggleBookmark = () => {
    // TODO: handle toggle bookmark when API is ready
  };

  // construct carousel from default
  const carouselItems = headerData.length && headerData.push ? headerData : [headerData];

  return (
    <Header dark carouselItems={carouselItems} short={carouselItems.length > 1 ? '480px' : true}>
      {({ title, dateTime, venueName, location }) => (
        <HeroWithSpacing
          background={false}
          direction={isMobile ? 'center' : 'left'}
          title={title}
          left
          titleIcon={<Bookmark isBookmarked={isBookmarked} onClick={handleToggleBookmark} />}
        >
          <DetailsWrapper>
            {dateTime && (
              <DetailsRow direction={isMobile ? 'center' : 'left'}>
                <ClockIcon isMobile={isMobile} />
                <Details>{dateTime}</Details>
              </DetailsRow>
            )}
            {venueName && (
              <DetailsRow direction={isMobile ? 'center' : 'left'}>
                <LocationIcon isMobile={isMobile} />
                <Details>{venueName}</Details>
              </DetailsRow>
            )}
            {location && (
              <DetailsRow direction={isMobile ? 'center' : 'left'}>
                <HorizontalSpace />
                <Details>{location}</Details>
              </DetailsRow>
            )}
          </DetailsWrapper>
        </HeroWithSpacing>
      )}
    </Header>
  );
};

export default HeaderSection;
