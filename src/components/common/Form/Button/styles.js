import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Icon from '@components/common/Icon';

const dynamicVariants = ({ variant, theme, outline }) =>
  ({
    primary: css`
      border: solid 2px ${theme.colors.swiamBlue};
      color: ${outline ? theme.colors.swiamBlue : theme.colors.white};
      background: ${outline ? 'transparent' : theme.colors.swiamBlue};

      &:hover {
        border-color: ${theme.colors.swiamBlue};
        background: ${outline ? theme.colors.swiamBlue : theme.colors.white};
        color: ${outline ? theme.colors.white : theme.colors.swiamBlue};
      }
    `,

    secondary: css`
      border: solid 2px ${theme.colors.white};
      color: ${outline ? theme.colors.white : theme.colors.black};
      background: ${outline ? 'transparent' : theme.colors.white};

      &:hover {
        background: ${outline ? theme.colors.white : theme.colors.black};
        color: ${outline ? theme.colors.black : theme.colors.white};
      }
    `,

    tertiary: css`
      border: solid 2px ${theme.colors.swiamBlue};
      color: ${theme.colors.swiamBlue};
      background: ${theme.colors.white};
      padding: 0 15px;

      &:hover {
        border: solid 2px ${theme.colors.white};
      }
    `,

    dark: css`
      border: solid 2px ${theme.colors.black};
      color: ${outline ? theme.colors.black : theme.colors.black};
      background: ${outline ? 'transparent' : theme.colors.white};

      &:hover {
        border-color: transparent;
        background: ${outline ? theme.colors.black : theme.colors.black};
        color: ${outline ? theme.colors.white : theme.colors.black};
      }
    `,
  }[variant]);

const dynamicSizes = ({ size }) =>
  ({
    sm: css`
      height: 27px;
      letter-spacing: -0.08px;
      font-size: 12px;
      font-weight: 500;
    `,

    md: css`
      height: 45px;
      font-weight: 600;
      font-size: 16px;
    `,
  }[size]);

const ButtonWrapper = styled.button`
  ${dynamicVariants};
  ${dynamicSizes};

  display: inline-flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.Inter};
  border-radius: 25px;
  user-select: none;
  outline: none;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  min-width: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      top: 10px;
      margin: 25px auto;
      font-size: 12px;
    `
    )};
  ${({ theme }) =>
    theme.generateBreakpoint(
      375,
      `
      margin: 0 auto;
      margin: 25px auto;
      font-size: 12px;
    `
    )};
  svg {
    margin-right: -6px;
  }

  &:hover {
    path {
      stroke: ${({ theme }) => theme.colors.black};
    }
  }
`;

const RightButtonIcon = styled(Icon)`
  margin-right: 6px;

  path {
    transition: all 0.3s ease-in;
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

const LeftButtonIcon = styled(Icon)`
  margin-left: 6px;

  path {
    transition: all 0.3s ease-in;
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

export { ButtonWrapper, RightButtonIcon, LeftButtonIcon };
