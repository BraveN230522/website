import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';

import { useDateQuery } from '@utils/hooks/useSearchQuery';
import LocationPinOutline from '@svg/location-pin-outline.svg';
import {
  SelectWhereTo,
  HotelFiltersContainer,
  HotelCalendar,
  HotelAccommodationContainer,
  HotelControlsContent,
  HotelLabel,
  HotelSelect,
  HotelSearchRooms,
  TextHotelSearchRooms,
} from './styles';

const selectAdultOptions = Array.from({ length: 6 }, (v, index) => ({
  label: index,
  value: `${index}A`,
}));

const selectChildrenOptions = Array.from({ length: 6 }, (v, index) => ({
  label: index,
  value: `${index}C`,
}));

const defaultAdult = '1A';
const defaultChildren = '0C';
const defaultCityId = 22;

const SearchHotel = ({ fromDate, toDate, setParentCityId }) => {
  const [adult, setAdult] = useState(defaultAdult);
  const [children, setChildren] = useState(defaultChildren);
  const [cityId, setCityId] = useState(defaultCityId);
  const [dataSearch, setDataSearch] = useState({ adult: '1A', children: '0C' });
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleDateQuery = useDateQuery({
    fromDate,
    toDate,
    concat: {
      query: cityId,
      qualifiers: `${adult}${children}`,
    },
    pageName: 'hotels/search',
  });
  console.log(router.query.value);
  const handleFiltersChange = (qualifiers, query, hotelSearchCityId, value) => {
    if (!hotelSearchCityId) hotelSearchCityId = Router.query.hotelSearchCityId;
    Router.push({
      pathname: `/hotels/search`,
      query: {
        fromDate,
        toDate,
        query,
        qualifiers,
        hotelSearchCityId,
        value,
      },
    });
  };

  const handleAdultChange = e => {
    const newValue = e.target.value || defaultAdult;

    setDataSearch(pre => ({
      ...pre,
      adult: newValue,
    }));
  };

  const handleChildrenChange = e => {
    const newValue = e.target.value || defaultChildren;
    setDataSearch(pre => ({
      ...pre,
      children: newValue,
    }));
  };
  const getCityId = (_cityId, value, hotelSearchId) => {
    setCity(value);
    const nexValue = _cityId.split('/city/')[1];
    setCityId(nexValue);
    if (setParentCityId) setParentCityId(nexValue);
    handleFiltersChange(adult + children, nexValue, hotelSearchId, value);
  };
  const handleSearch = () => {
    handleFiltersChange(dataSearch.adult + dataSearch.children, cityId || defaultCityId, city);
  };
  return (
    <>
      <HotelFiltersContainer>
        <SelectWhereTo
          getCityId={getCityId}
          icon={LocationPinOutline}
          placeholder="Where to?"
          entity="city"
          defaultValue={router?.query?.value}
        />
        <HotelCalendar
          onChangeDateCallback={handleDateQuery}
          lightMode
          initialDates={{
            startDate: fromDate || null,
            endDate: toDate || null,
          }}
        />
      </HotelFiltersContainer>
      <HotelAccommodationContainer>
        <HotelControlsContent>
          <HotelLabel>Adults</HotelLabel>
          {/* Replace the onChange prop for a state update later */}
          <HotelSelect defaultValue={adult} onChange={handleAdultChange} data={selectAdultOptions} />
        </HotelControlsContent>
        <HotelControlsContent>
          <HotelLabel>Children</HotelLabel>
          <HotelSelect defaultValue={children} onChange={handleChildrenChange} data={selectChildrenOptions} />
        </HotelControlsContent>
      </HotelAccommodationContainer>
      <HotelSearchRooms onClick={handleSearch}>
        <TextHotelSearchRooms>Search</TextHotelSearchRooms>
      </HotelSearchRooms>
    </>
  );
};

export default SearchHotel;
