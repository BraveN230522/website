import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import Icon from '@components/common/Icon';
import mobileLogo from '@svg/logo-symbol-only.svg';

const revealAnimation = keyframes`
  0%, 3% {
    opacity: 0;
  }
 
  4%, 30% {
    opacity: 0.3;
  }

  60% {
    opacity: 0.8;
  }

  90% {
    opacity: 1;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.phone`
    bottom: initial;
    min-height: 100vh;
  `}
`;

const ContentWrapper = styled.div`
  overflow-y: auto; /* Enable scroll if needed (for the content only ) */
  -webkit-overflow-scrolling: touch;
  position: relative;
  z-index: 99;
  width: 800px;
  min-height: 472px;

  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.2);

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    max-height: unset;
  `
    )}

    ${({ theme }) => theme.media.phone`
      height: 100vh;
    `}

    animation: ${revealAnimation} 0.4s ease;
  `;

const CloseButtonWrapper = styled.a`
    position: absolute;
    bottom: 21px;
    left: 17px;
    
    :hover,
    :focus {
      cursor: pointer;
`;

const CloseButton = ({ onClick }) => (
  <CloseButtonWrapper onClick={onClick} data-testid="modal-close-button">
    <Icon name="close" color="#FFFFFF" />
  </CloseButtonWrapper>
);

const ModalHeaderWrapper = styled.div`
  position: relative;
  height: ${({ theme }) => theme.mobileHeaderHeight};
  width: 100vw;
  display: none;

  background-color: ${({ theme }) => theme.colors.swiamBlue};

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 12px;
  `
    )}
`;

const ModalHeader = ({ onClick }) => (
  <ModalHeaderWrapper data-testid="modal-header-mobile">
    <CloseButton onClick={onClick} />
    <img src={mobileLogo} alt="Sports where I am" />
  </ModalHeaderWrapper>
);

export { ModalWrapper, ContentWrapper, ModalHeader };
