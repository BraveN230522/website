import styled from '@emotion/styled';
import { css } from '@emotion/core';

const dynamicVariants = ({ variant, theme, isSelected }) =>
  ({
    light: css`
      border: solid 2px ${theme.colors.black};
      color: ${theme.colors.black};
      background: ${isSelected ? theme.colors.white : 'transparent'};

      &:hover {
        background: ${theme.colors.greyishBrown};
        color: ${theme.colors.white};

        svg {
          fill: ${theme.colors.white};
        }
      }
    `,

    dark: css`
      border: solid 2px ${theme.colors.white};
      color: ${isSelected ? theme.colors.black : theme.colors.white};
      background: ${isSelected ? theme.colors.white : theme.colors.black};

      &:hover {
        background: ${theme.colors.greyishBrown};
        color: ${theme.colors.white};

        svg {
          fill: ${theme.colors.white};
        }
      }
    `,
  }[variant]);

const TagStyles = styled.button`
  ${dynamicVariants};

  border-radius: 25px;
  cursor: pointer;
  display: flex;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.DINAlternateBold};
  font-size: 14px;
  font-weight: 400;
  height: 32px;
  justify-content: space-around;
  letter-spacing: -0.1px;
  align-items: center;
  padding: 0 8px;
  text-decoration: none;
  transition: all 0.3s ease-in;
  user-select: none;
  white-space: nowrap;
  background: ${({ isSelected, theme }) => (isSelected ? theme.colors.greyishBrown : undefined)};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.white : undefined)};
`;

export { TagStyles };
