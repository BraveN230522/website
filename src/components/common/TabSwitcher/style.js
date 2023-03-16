import styled from '@emotion/styled';

const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 60px;

  button {
    &:nth-of-type(1) {
      border-top-left-radius: 16px;
    }
    &:nth-of-type(2) {
      border-top-right-radius: 16px;
    }
    ${({ theme }) => theme.media.phone`
    &:nth-of-type(1) {
      border-top-left-radius: 0;
    }
    &:nth-of-type(2) {
      border-top-right-radius: 0;
    }
  `};
  }
`;

const TabButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.DINAlternate};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  border: none;

  ${({ theme, active }) => `
    background-color: ${active ? theme.colors.white : theme.colors.lightStone};
    color: ${active ? theme.colors.black : theme.colors.browGray};
  `};

  &:hover {
    text-decoration: none;
    cursor: pointer;
    border: none;
  }

  &:focus {
    outline: none;
    ${({ active }) =>
      !active &&
      `
      box-sizing: border-box;
      border: none;
    `};
  }
  ::-moz-focus-inner {
    border: 0;
  }
`;

export { Tabs, TabButton };
