import React from 'react';

import PhoneInput from 'react-phone-input-2';

import { InputPhoneMaskStyles, ErrorMessage } from './styles';

const InputPhoneMask = ({ className, error, onChange, value }) => {
  return (
    <InputPhoneMaskStyles>
      <PhoneInput className={className} country="au" onChange={onChange} value={value} />

      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </InputPhoneMaskStyles>
  );
};

export default InputPhoneMask;
