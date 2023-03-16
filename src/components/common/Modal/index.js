import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import StopBodyScroll from '@components/common/StopBodyScroll';

import { ModalWrapper, ModalHeader, ContentWrapper } from './style';

const Modal = ({ children, isInitiallyOpened, onOpening, onClosing }) => {
  const [isOpened, setOpeningStatus] = useState(isInitiallyOpened);

  useEffect(() => {
    setOpeningStatus(isInitiallyOpened);
  }, [isInitiallyOpened]);

  useEffect(() => {
    if (isOpened) {
      onOpening();
      setOpeningStatus(true);
    }
  }, [isOpened]);

  const handleClosingClick = useCallback(() => {
    onClosing();
    setOpeningStatus(false);
  }, []);

  const handleDismiss = useCallback(e => {
    if (e.target.id === 'dismiss-modal') {
      handleClosingClick();
    }
  }, []);

  if (!isOpened) {
    return null;
  }

  return (
    <>
      <StopBodyScroll />
      <ModalWrapper
        id="dismiss-modal"
        onClick={handleDismiss}
        role="dialog"
        aria-modal={isOpened}
        data-testid="modal-component"
      >
        <ContentWrapper>
          <ModalHeader onClick={handleClosingClick} />

          {Boolean(children) && children(setOpeningStatus)}
        </ContentWrapper>
      </ModalWrapper>
    </>
  );
};

Modal.defaultProps = {
  isInitiallyOpened: false,
  onOpening: () => {},
  onClosing: () => {},
};

Modal.propTypes = {
  isInitiallyOpened: PropTypes.bool,
  onOpening: PropTypes.func,
  onClosing: PropTypes.func,
};

export default Modal;
