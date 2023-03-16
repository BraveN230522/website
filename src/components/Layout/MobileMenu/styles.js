import styled from '@emotion/styled';

export const MobileMenuLeft = styled.aside`
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  width: 80%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 502;
  padding-bottom: 24px;
  border-radius: 12px 0 0 12px;
  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
    max-width: 338px;
  `
    )};
`;

export const MobileMenuStyles = styled.div`
  &:after {
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-100rem')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  width: 100%;
  height: 100%;
  z-index: 500;
  transition: all 0.32s ease-in-out;
`;

export const MobileMenuHeader = styled.div`
  background-color: ${props => props.theme.colors.swiamBlue};
  min-height: 93px;
  padding: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-top-left-radius: 12px;
  letter-spacing: -0.17px;
  color: ${props => props.theme.colors.white};
  position: relative;
  > span {
    font-family: ${props => props.theme.fonts.DINAlternate};
    font-size: 24px;
  }
`;

export const MobileMenuClose = styled.button`
  border: 0;
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -41px;
  top: 57px;
  outline: 0;
  &:focus {
    outline: 0;
  }

  g {
    fill: transparent;
  }
`;

export const MobileMenuBack = styled.button`
  border: 0;
  background-color: transparent;
  /* width: 40px;
  height: 40px; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  &:focus {
    outline: 0;
  }

  g {
    fill: transparent;
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  text-align: right;
  flex: 1;
  height: 100%;
  overflow-y: auto;
`;

export const MobileMenuItems = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 60px;
`;

export const MobileMenuItem = styled.a`
  font-family: ${props => props.theme.fonts.DINAlternateBold};
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: ${({ featured }) => featured && `24px`};
  color: ${props => props.theme.colors.black};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
  }
  > svg {
    margin-left: 25px;
  }
`;
