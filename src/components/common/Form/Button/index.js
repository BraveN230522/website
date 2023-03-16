import React from 'react';

import { ButtonWrapper, RightButtonIcon, LeftButtonIcon } from './styles';

const Button = ({
  children,
  rightIcon,
  leftIcon,
  size = 'md',
  variant = 'primary',
  outline = false,
  disabled,
  iconColor,
  className,
  onClick,
  target,
  as,
  href,
}) => {
  return (
    <ButtonWrapper
      size={size}
      as={as}
      target={target}
      href={href}
      variant={variant}
      outline={outline}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {!!rightIcon && <RightButtonIcon color={iconColor} name={rightIcon} />}
      {children}
      {!!leftIcon && <LeftButtonIcon color={iconColor} name={leftIcon} />}
    </ButtonWrapper>
  );
};

export default Button;
