import React, { useEffect, useState } from 'react';
import { adopt } from 'react-adopt';

import { CountriesQuery, StatesQuery } from './queries';

import {
  DeliveryTypeInlineForm,
  DeliverySmallFieldsContainer,
  DeliveryLargeFieldsContainer,
  DeliveryInput,
  DeliverySelect,
} from './styles';

const Data = adopt({
  countriesData: ({ render }) => <CountriesQuery>{render}</CountriesQuery>,
  statesData: ({ render, country }) => <StatesQuery country={country}>{render}</StatesQuery>,
});

function DeliveryForm({ errors, countryValue, setFieldValue, entity, register }) {
  const [countrySelect, setCountrySelect] = useState([]);
  const requiredField = 'This is a required field';

  useEffect(() => {
    if (countryValue) setCountrySelect(countryValue);
  }, [countryValue]);

  const handleCountryChange = e => {
    setCountrySelect(e.target.value);
    setFieldValue('state', '');
  };

  return (
    <>
      <DeliveryTypeInlineForm>
        <DeliveryLargeFieldsContainer>
          <DeliveryInput
            light
            label="Street Address"
            name={`${entity}['address1']`}
            type="text"
            placeholder="e.g. 580 Church Street"
            ref={register({ required: true })}
            error={errors[entity]?.address1 && requiredField}
          />
        </DeliveryLargeFieldsContainer>
        <DeliveryLargeFieldsContainer>
          <DeliveryInput
            light
            label="Apt. Suite or Floor (optional)"
            name={`${entity}['address2']`}
            ref={register({ required: false })}
            type="text"
            placeholder="e.g. 5"
          />
        </DeliveryLargeFieldsContainer>
      </DeliveryTypeInlineForm>
      <DeliveryTypeInlineForm>
        <DeliverySmallFieldsContainer>
          <Data>
            {({ countriesData = [] }) => {
              return (
                <DeliverySelect
                  data={countriesData.map(country => ({
                    defaultValue: country.country_name,
                    label: country.country_name,
                  }))}
                  label="Country"
                  name={`${entity}['country']`}
                  placeholder="Select Country"
                  onChange={handleCountryChange}
                  ref={register({ required: true })}
                  error={errors[entity]?.country && requiredField}
                />
              );
            }}
          </Data>
        </DeliverySmallFieldsContainer>
        <DeliverySmallFieldsContainer>
          <DeliveryInput
            light
            label="City"
            name={`${entity}['city']`}
            type="text"
            placeholder="e.g. Richmond"
            ref={register({ required: true })}
            error={errors[entity]?.city && requiredField}
          />
        </DeliverySmallFieldsContainer>
        <DeliverySmallFieldsContainer>
          <Data country={countrySelect}>
            {({ statesData = [] }) => {
              return (
                <DeliverySelect
                  data={statesData.map(state => ({
                    defaultValue: state.state_name,
                    label: state.state_name,
                  }))}
                  label="State/Province"
                  name={`${entity}['state']`}
                  placeholder="Select Region"
                  disabled={!statesData.length}
                  ref={register({ required: true })}
                  error={errors[entity]?.state && requiredField}
                />
              );
            }}
          </Data>
        </DeliverySmallFieldsContainer>
        <DeliverySmallFieldsContainer>
          <DeliveryInput
            light
            label="Postal Code"
            maxLength="4"
            name={`${entity}['postCode']`}
            type="text"
            placeholder="e.g. 3121"
            ref={register({
              required: true,
              min: 4,
              max: 4,
            })}
            error={errors[entity]?.postCode && requiredField}
          />
        </DeliverySmallFieldsContainer>
      </DeliveryTypeInlineForm>
    </>
  );
}

export default DeliveryForm;
