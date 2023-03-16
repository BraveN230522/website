import React, { forwardRef } from 'react';

import { CheckboxContainer, CheckboxMark, CheckboxLabel } from './styles';

const Checkbox = forwardRef(
  ({ className, id, onChange = () => null, type = 'checkbox', label, name, value, labelFirst, checked }, ref) => {
    return (
      <CheckboxContainer className={className}>
        <CheckboxMark
          id={id}
          labelFirst={labelFirst}
          name={name}
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          checked={checked}
        />

        <CheckboxLabel htmlFor={id} labelFirst={labelFirst}>
          {label}
        </CheckboxLabel>
      </CheckboxContainer>
    );
  }
);

export default Checkbox;
