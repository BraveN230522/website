import React from 'react';
import PropTypes from 'prop-types';

import { TagStyles } from './styles';

const Tag = ({ className, children, click, isSelected, variant }) => {
  return (
    <TagStyles className={className} variant={variant} onClick={click} isSelected={isSelected}>
      {children}
    </TagStyles>
  );
};

Tag.defaultProps = {
  click: () => {},
  variant: 'light',
};

Tag.propTypes = {
  click: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Tag;
