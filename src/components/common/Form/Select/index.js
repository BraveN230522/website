import React, { forwardRef } from 'react';

import { SelectComponent, SelectStyles, SelectIcon, ErrorContainer, ErrorMessage, SelectLabel } from './styles';

const Select = forwardRef(
  (
    {
      data,
      icon,
      className,
      label,
      defaultValue,
      value,
      placeholder,
      name,
      onChange,
      disableUnselect,
      onFocus,
      error,
      disabled,
      dataIndex,
    },
    ref
  ) => (
    <SelectStyles>
      {Boolean(label) && <SelectLabel htmlFor={name}>{label}</SelectLabel>}
      {!!icon && <SelectIcon name={icon} />}
      <SelectComponent
        className={className}
        defaultValue={defaultValue}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        ref={ref}
        disabled={disabled}
        data-index={dataIndex}
      >
        <option value="" disabled={disableUnselect}>
          {placeholder}
        </option>

        {!!data.length &&
          data.map((current, index) => (
            <option key={index} value={current.value}>
              {current.label}
            </option>
          ))}
      </SelectComponent>
      {Boolean(error) && (
        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      )}
    </SelectStyles>
  )
);

export default Select;
