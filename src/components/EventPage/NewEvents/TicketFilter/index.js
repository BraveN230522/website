import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TicketFilterTopic,
  TicketFilterText,
  TicketFilterSection,
  TicketFilterSelect,
  TicketFilterInput,
} from './styles';
import { TicketDetailCartButton, TicketDetailContainer } from '../TicketDetail/styles';
import QuantitySlider from '../QuantitySlider';

const quantityOptions = ['any', 1, 2, 3, '+4'];
const INITIAL_QUANTITY = quantityOptions[0];
const priceOptions = [
  {
    label: 'Price - Low to High',
    value: 'price-low',
  },
  {
    label: 'Price - High to Low',
    value: 'price-high',
  },
  {
    label: 'Section - Low to High',
    value: 'section-low',
  },
  {
    label: 'Section - High to Low',
    value: 'section-high',
  },
  {
    label: 'Row - Low to High',
    value: 'row-low',
  },
  {
    label: 'Row - High to Low',
    value: 'row-high',
  },
];

function TicketFilter({ onFilterSave, visible }) {
  const [selectedQuantity, setSelectedQuantity] = useState(INITIAL_QUANTITY);
  const [lastSelectedValue, setLastSelectedValue] = useState({});
  const { register, handleSubmit, reset, errors, setValue, watch } = useForm();

  useEffect(() => {
    reset(lastSelectedValue);
    setSelectedQuantity(lastSelectedValue.quantity || INITIAL_QUANTITY);
  }, [visible]);

  const minPrice = useRef({});
  minPrice.current = watch('minPrice', '');

  const maxPrice = useRef({});
  maxPrice.current = watch('maxPrice', '');

  const handleQuantityClicked = quantity => () => setSelectedQuantity(quantity);

  const handleClearFilterClicked = e => {
    e.preventDefault();
    setSelectedQuantity(INITIAL_QUANTITY);
    setValue('minPrice', '');
    setValue('maxPrice', '');
  };

  const handleFilterSave = form => {
    const filter = {
      ...form,
      quantity: parseInt(selectedQuantity),
    };

    setLastSelectedValue(filter);
    onFilterSave(filter);
  };

  return (
    <TicketDetailContainer onSubmit={handleSubmit(handleFilterSave)}>
      <TicketFilterSection direction="row" bordered>
        <TicketFilterTopic>Filter & Sort</TicketFilterTopic>

        <TicketFilterText href="#" as="a" onClick={handleClearFilterClicked}>
          Clear Filters
        </TicketFilterText>
      </TicketFilterSection>

      <TicketFilterSection bordered>
        <TicketFilterTopic>Quantity</TicketFilterTopic>
        <QuantitySlider activeItem={selectedQuantity} onClick={handleQuantityClicked} options={quantityOptions} />
      </TicketFilterSection>

      <TicketFilterSection bordered justify="space-between" direction="row">
        <TicketFilterInput
          name="minPrice"
          ref={register({
            validate: () => {
              if (minPrice.current && parseFloat(minPrice.current) < 0) {
                return 'hahaa';
              }
              return true;
            },
          })}
          type="number"
          placeholder="193"
          light
          label="Min Price"
        />
        <TicketFilterInput
          name="maxPrice"
          ref={register({
            validate: value => {
              if (minPrice.current && parseFloat(minPrice.current) > parseFloat(value)) {
                return 'Max price should be greatter than min price';
              }
              if (maxPrice.current && parseFloat(maxPrice.current) <= 0) {
                return false;
              }
              return true;
            },
          })}
          error={errors.maxPrice && errors.maxPrice.message}
          type="number"
          placeholder="849"
          light
          label="Max Price"
        />
      </TicketFilterSection>

      <TicketFilterSection bordered>
        <TicketFilterSelect
          data={priceOptions}
          name="sortBy"
          ref={register()}
          disableUnselect
          defaultValue={priceOptions[0].value}
          label="Sort by"
          icon="chevronDown"
        />
      </TicketFilterSection>

      <TicketDetailCartButton>Done</TicketDetailCartButton>
    </TicketDetailContainer>
  );
}

export default TicketFilter;
