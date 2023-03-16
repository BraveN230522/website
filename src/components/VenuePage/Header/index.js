import React from 'react';

import { VenueHeader, VenueCalendar, HeroWithSpacing, SubTitle } from './styles';
import TruncateText from '../../common/TruncateText';

const HeaderSection = ({
  fromDate,
  toDate,
  handleChangeDates,
  data: { title, location, description, imageURL, mobileImageURL },
}) => {
  return (
    <VenueHeader
      withMenu
      dark
      carouselItems={[
        {
          title,
          location,
          description,
          imageURL,
          mobileImageURL,
        },
      ]}
    >
      {activeItem => (
        <HeroWithSpacing direction="center" title={`${activeItem.title} Tickets`}>
          <SubTitle>{activeItem.location}</SubTitle>
          <VenueCalendar
            onChangeDateCallback={handleChangeDates}
            lightMode
            initialDates={{
              startDate: fromDate || null,
              endDate: toDate || null,
            }}
          />
          {/* TODO: Create 'InlineMore' component */}
          <SubTitle>
            <TruncateText>{activeItem.description}</TruncateText>
          </SubTitle>
        </HeroWithSpacing>
      )}
    </VenueHeader>
  );
};

export default HeaderSection;
