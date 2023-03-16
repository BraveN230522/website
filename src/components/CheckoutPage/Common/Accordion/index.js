import React from 'react';

import Icon from '@components/common/Icon';
import CheckoutSection from '../CheckoutSection';
import { AccordionStyles, Header, Title, AccordionContent, AccordionSelect } from './styles';

const Accordion = ({
  onSelectChange = () => null,
  className,
  hasSelect,
  activeSelectItem,
  selectItems,
  children,
  icon,
  title,
}) => {
  return (
    <CheckoutSection className={className}>
      <AccordionStyles>
        <Header>
          <Icon name={icon} />
          <Title>{title}</Title>

          {hasSelect && (
            <AccordionSelect value={activeSelectItem.value} onChange={onSelectChange}>
              {selectItems.map(item => (
                <option key={item} value={item.value}>
                  {item.label}
                </option>
              ))}
            </AccordionSelect>
          )}
        </Header>
        <AccordionContent>{children}</AccordionContent>
      </AccordionStyles>
    </CheckoutSection>
  );
};

export default Accordion;
