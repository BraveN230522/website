import React, { useState } from 'react';

import {
  DropdownStyles,
  DropdownArrow,
  DropdownHeaderContainer,
  DropdownWrapper,
  DropdownHeader,
  StadiumIcon,
  DropdownContainer,
} from './style';

const Dropdown = ({ title, className, icon, children }) => {
  const [opened, setOpened] = useState();

  return (
    <DropdownStyles className={className}>
      <DropdownWrapper>
        <DropdownHeader onClick={() => setOpened(!opened)}>
          <DropdownHeaderContainer>
            {icon && <StadiumIcon name={icon} />}
            {title}
          </DropdownHeaderContainer>

          <DropdownArrow name="chevronDown" />
        </DropdownHeader>

        <DropdownContainer opened={opened}>{children}</DropdownContainer>
      </DropdownWrapper>
    </DropdownStyles>
  );
};

export default Dropdown;
