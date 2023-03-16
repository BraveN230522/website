import React from 'react';
import { MoreContainer, MoreText } from './style';

const More = ({ className, onClick, dark, ...props }) => {
  return (
    <MoreContainer className={className} onClick={onClick} aria-label={props['aria-label']}>
      <MoreText dark={dark}>More</MoreText>
    </MoreContainer>
  );
};

export default More;
