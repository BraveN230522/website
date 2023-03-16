import styled from '@emotion/styled';

const MenuStyles = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;

  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: block;
  font-family: ${({ theme }) => theme.fonts.DINAlternate};
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.14px;
  line-height: 28px;
  margin: 0 16px;
  text-align: center;
  transition: all 0.3s ease-in;

  &:hover {
    text-decoration: none;
    border-bottom: 2px solid ${({ activeLink, theme }) => (activeLink ? theme.colors.swiamBlue : theme.colors.white)};
  }

  & {
    opacity: ${({ activeLink }) => activeLink && 1};
    ${({ theme, activeLink }) =>
      activeLink &&
      `
        border-bottom: 2px solid ${theme.colors.swiamBlue};
      `};
  }
`;

export { MenuStyles, MenuItem, MenuLink };
