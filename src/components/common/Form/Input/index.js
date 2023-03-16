import React, { forwardRef } from 'react';

import Message from '../Message';

import { InputGroup, InputComponent, MessageContainer, InputLabel, AdviceMessage } from './styles';

const Input = forwardRef(
  (
    {
      advice,
      className,
      error,
      label,
      icon,
      id,
      placeholder,
      value,
      name,
      onChange,
      onFocus,
      type = 'text',
      onBlur = () => null,
      light,
    },
    ref
  ) => (
    <InputGroup className={className}>
      {Boolean(label) && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputComponent
        light={light}
        className={className}
        icon={icon}
        name={name}
        ref={ref}
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        value={value}
      />
      {!!error && <Message type="error">{error}</Message>}
      {Boolean(advice) && (
        <MessageContainer>
          <AdviceMessage>{advice}</AdviceMessage>
        </MessageContainer>
      )}
    </InputGroup>
  )
);

export default Input;
