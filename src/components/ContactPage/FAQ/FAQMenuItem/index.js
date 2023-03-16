import React, { useState } from 'react';
import Icon from '@components/common/Icon';

import { FAQWrapper, FieldWrapper, TitleWrapper, ContentWrapper, TextWrapper } from './styles';

const FAQMenuItem = props => {
  const [opened, setOpened] = useState();

  const toggleAccordion = () => {
    setOpened(!opened);
  };

  return (
    <FAQWrapper>
      <FieldWrapper opened={opened} onClick={toggleAccordion}>
        <TitleWrapper>{props.title}</TitleWrapper>

        <Icon name="chevronDown" color="#000" />
      </FieldWrapper>
      <ContentWrapper opened={opened}>
        <TextWrapper>{props.children}</TextWrapper>
      </ContentWrapper>
    </FAQWrapper>
  );
};

export default FAQMenuItem;
