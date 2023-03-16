import React from 'react';

import allIcons from './Icons/index';

const Icon = ({ className, color, name, size }) => {
  const iconSize = size ? { width: size, height: size } : {};

  const SelectedIcon = allIcons[`${name}`];

  return <SelectedIcon className={className} color={color} fill={color} size={iconSize} />;
};

Icon.defaultProps = {
  color: '#000',
};

export default Icon;
