import React from 'react';
import Icon from '@components/common/Icon';

import { BookTicketsModalWrapper, BookTicketsModalClose, VisibilityContainer } from './styles';

const BookTicketsModal = ({ children, onClose, visible }) => {
  return (
    <VisibilityContainer visible={visible}>
      <BookTicketsModalClose onClick={onClose}>
        <Icon name="close" />
      </BookTicketsModalClose>

      <BookTicketsModalWrapper>{children}</BookTicketsModalWrapper>
    </VisibilityContainer>
  );
};

export default BookTicketsModal;
