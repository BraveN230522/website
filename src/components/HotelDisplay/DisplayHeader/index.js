import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Icon from '@components/common/Icon';

import {
  HeroWithSpacing,
  HotelHeaderDetails,
  HotelResume,
  HotelResumeExpand,
  HotelNights,
  HotelBookNow,
  HotelSearchButton,
  SubTitle,
  HotelFiltersContainer,
  HotelCalendar,
  HotelAccommodationContainer,
  HotelControlsContent,
  HotelLabel,
  HotelSelect,
  ChildSelect,
  HotelHeader,
  HotelHeaderDetailsContainer,
  HotelHeaderOptionsContainer,
  HotelHeaderOptionsPanel,
  ChildrenAges,
} from './styles';

const DisplayHeader = ({
  activeItem,
  selectAdult,
  selectChildren,
  handleDateChange,
  handleAdultChange,
  handleChildrenChange,
  handleChildAgeChange,
  fromDate,
  toDate,
  searchMatches,
  selectAdultOptions,
  selectChildrenOptions,
  selectChildAgeOptions,
  childAges,
  enableHotelSearch,
  handleSearch,
  setDates,
  dateRef,
}) => {
  const bookNowClick = () => {
    // scroll down to room selection
    document.querySelector('#hotelRooms').scrollIntoView();
  };
  const [resumeReadMoreIcon, setResumeReadMoreIcon] = useState('carretDown');
  const [resumeClass, setResumeClass] = useState('collapsed');
  const [resumeLabel, setResumeLabel] = useState('Read More');
  const hotelResumeExpandHandler = e => {
    const newIcon = resumeReadMoreIcon === 'carretDown' ? 'carretUp' : 'carretDown';
    const newClass = resumeClass === 'collapsed' ? '' : 'collapsed';
    const newLabel = resumeLabel === 'Read More' ? 'Read Less' : 'Read More';
    setResumeReadMoreIcon(newIcon);
    setResumeClass(newClass);
    setResumeLabel(newLabel);
  };
  console.log('enableHotelSearch', searchMatches);
  // animation to map
  useEffect(() => {
    if (searchMatches) {
      document.querySelector('#hotelRooms').scrollIntoView();
    }
  }, [enableHotelSearch]);
  return (
    <HotelHeader>
      <HotelHeaderDetailsContainer>
        <HeroWithSpacing direction="center" title={activeItem.title} rating={activeItem.rating}>
          <br />
          <span>
            <Icon name="locationPinPrimary" />
          </span>
          <SubTitle>{activeItem.description}</SubTitle>
          <HotelHeaderDetails>
            <HotelResume className={resumeClass}>{activeItem.resume}</HotelResume>
            <HotelResumeExpand onClick={hotelResumeExpandHandler}>
              {resumeLabel}
              <Icon name={resumeReadMoreIcon} />
            </HotelResumeExpand>
            {fromDate &&
              toDate &&
              searchMatches &&
              activeItem.bed &&
              activeItem.nights &&
              activeItem.price(
                <HotelNights>{`${activeItem.bed}, ${activeItem.nights} Nights, $${activeItem.price}`}</HotelNights>
              )}
            {/* {(!fromDate || !toDate) && !searchMatches && ( */}
            <HotelResume>Enter your required dates to display available rooms</HotelResume>
            {/* )} */}
            {fromDate && toDate && !searchMatches && (
              <HotelResume>This hotel is not available on the chosen dates</HotelResume>
            )}
          </HotelHeaderDetails>
        </HeroWithSpacing>
      </HotelHeaderDetailsContainer>
      <HotelHeaderOptionsContainer>
        <HotelHeaderOptionsPanel>
          {(!fromDate || !toDate) && !searchMatches && (
            <HotelResume className="heading">Enter your required dates to display available rooms</HotelResume>
          )}
          {fromDate && toDate && !searchMatches && (
            <HotelResume className="heading">This hotel is not available on the chosen dates</HotelResume>
          )}
          <HotelFiltersContainer>
            <HotelCalendar
              // onChangeDateCallback={handleDateChange}
              onChangeDateCallback={(startDate, endDate) => {
                dateRef.current = {
                  startDate: startDate?.format('YYYY-MM-DD'),
                  endDate: endDate?.format('YYYY-MM-DD'),
                };
                // setDates(startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'));
              }}
              lightMode
              initialDates={{
                startDate: fromDate || new Date(),
                endDate: toDate || null,
              }}
            />
          </HotelFiltersContainer>
          <HotelAccommodationContainer align="center">
            <HotelControlsContent>
              <HotelLabel>Adults</HotelLabel>
              <HotelSelect onChange={handleAdultChange} defaultValue={selectAdult} data={selectAdultOptions} />
            </HotelControlsContent>
            <HotelControlsContent>
              <HotelLabel>Children</HotelLabel>
              <HotelSelect onChange={handleChildrenChange} defaultValue={selectChildren} data={selectChildrenOptions} />
            </HotelControlsContent>
          </HotelAccommodationContainer>
          {parseInt(selectChildren) > 0 && (
            <ChildrenAges>
              <HotelAccommodationContainer align="center">
                {Array.from({ length: parseInt(selectChildren) }, (v, index) => (
                  <HotelControlsContent key={`child-ages-header-${index}`}>
                    <HotelLabel>Child {index + 1} Age</HotelLabel>
                    <ChildSelect
                      onChange={handleChildAgeChange}
                      value={childAges.split('-')[index]}
                      dataIndex={index}
                      data={selectChildAgeOptions}
                    />
                  </HotelControlsContent>
                ))}
              </HotelAccommodationContainer>
            </ChildrenAges>
          )}
          <HotelSearchButton outline variant="secondary" disabled={!enableHotelSearch} onClick={handleSearch}>
            Search
          </HotelSearchButton>
          <HotelBookNow outline variant="secondary" onClick={bookNowClick}>
            Go to rooms
          </HotelBookNow>
        </HotelHeaderOptionsPanel>
      </HotelHeaderOptionsContainer>
    </HotelHeader>
  );
};

export default DisplayHeader;
