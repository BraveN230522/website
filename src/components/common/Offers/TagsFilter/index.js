import React, { useState } from 'react';

import Button from '@components/common/Form/Button';
import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';

import {
  OffersHeadFilter,
  OffersTag,
  OffersButtonTag,
  FilterView,
  ViewModeButton,
  TagsFilterContent,
  TagsFilterHeader,
  TagsFilterTitle,
  TagsFilterBody,
  TagsFilterList,
  TagsFilterListItem,
  TagsFilterItem,
  TagsFilterControlsContainer,
  TagsFilterControl,
  TagsFilterquantity,
  TagsFilterFooter,
  TagsFilterItemsClear,
} from './styles';

const FilterHotelFeatures = ({ defaultCategories, onFilter, data }) => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState(data);
  const [rooms, setRooms] = useState(data.rooms);

  const applyFilter = key => () => {
    const newValue = {
      ...value,
      categories: {
        ...value.categories,
        [key]: !value.categories[key],
      },
    };

    if (!newValue.categories[key]) {
      delete newValue.categories[key];
    }

    setValue(newValue);

    onFilter(newValue);
  };

  const applyRoomsQuantity = () => {
    const newRooms = {
      ...value,
      rooms,
    };

    setValue(newRooms);
    onFilter(newRooms);
    setOpened(false);
  };

  const changeQuantity = (key, increment) => () => {
    setRooms({
      ...rooms,
      [key]: increment ? rooms[key] + 1 : rooms[key] > 0 ? rooms[key] - 1 : 0,
    });
  };

  const clearQuatity = () => {
    setRooms(
      Object.keys(rooms).reduce(
        (acc, current) => ({
          ...acc,
          [current]: 0,
        }),
        {}
      )
    );
  };

  return (
    <>
      <OffersHeadFilter className="className">
        <OffersTag>
          {Object.keys(defaultCategories).map(key => (
            <OffersButtonTag key={key} click={applyFilter(key)} variant={value.categories[key] ? 'dark' : 'light'}>
              <Icon name="plus" /> {key}
            </OffersButtonTag>
          ))}
        </OffersTag>
        {/* TODO: Put it back when API returns available data */}
        {/* <FilterView>
          <ViewModeButton onClick={() => setOpened(!opened)}>
            <Icon name="filter" />
          </ViewModeButton>
        </FilterView> */}
      </OffersHeadFilter>

      <Modal isInitiallyOpened={opened}>
        {() => (
          <TagsFilterContent>
            <TagsFilterHeader>
              <TagsFilterTitle>Rooms and Beds</TagsFilterTitle>
            </TagsFilterHeader>
            <TagsFilterBody>
              <TagsFilterList>
                {Object.keys(rooms).map((key, index) => (
                  <TagsFilterListItem key={key}>
                    <TagsFilterItem>{key}</TagsFilterItem>
                    <TagsFilterControlsContainer>
                      <TagsFilterControl onClick={changeQuantity(key)}>
                        <Icon name="minusCircleOutline" />
                      </TagsFilterControl>
                      <TagsFilterquantity>{rooms[key]}</TagsFilterquantity>
                      <TagsFilterControl onClick={changeQuantity(key, true)}>
                        <Icon name="plusCircleOutline" />
                      </TagsFilterControl>
                    </TagsFilterControlsContainer>
                  </TagsFilterListItem>
                ))}
              </TagsFilterList>
            </TagsFilterBody>
            <TagsFilterFooter>
              <TagsFilterItemsClear onClick={clearQuatity}>Clear</TagsFilterItemsClear>
              <Button onClick={applyRoomsQuantity}>Save</Button>
            </TagsFilterFooter>
          </TagsFilterContent>
        )}
      </Modal>
    </>
  );
};

export default FilterHotelFeatures;
