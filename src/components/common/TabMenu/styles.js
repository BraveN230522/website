import styled from '@emotion/styled';

const ListMenu = styled.ul`
  list-style-type: none;
  padding: 0;

  ${({ theme }) => theme.media.phone`
    li a {
      margin-right: 16px;
    }
    &:first-of-type a {
      margin-left: 10px;
    }
  `}
`;

const ItemMenu = styled.li`
  display: inline-block;

  &:last-of-type a {
    margin-right: 0;
  }
`;

const LinkMenu = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 21px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.1465116px;
  margin-right: 40px;
  padding-bottom: 2px;
  text-decoration: none;
  border-bottom: solid 2px transparent;
  transition: all 0.3s ease-in;

  &:hover {
    text-decoration: none;
    border-bottom: solid 2px ${({ theme, activeLink }) => (activeLink ? theme.colors.swiamBlue : theme.colors.white)};
  }

  li:last-child > & {
    padding-right: 0;
  }

  ${({ theme }) =>
    theme.media.phone(
      `
      font-size: 18px;
      line-height: 21px;
      letter-spacing: -0.1116279px;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
  `
    )};

  ${({ theme }) =>
    theme.generateBreakpoint(
      466,
      `
    font-size: 16px;
  `
    )};

  ${({ theme }) =>
    theme.generateBreakpoint(
      360,
      `
      font-size: 14px;
`
    )};

  & {
    opacity: ${({ activeLink }) => activeLink && 1};
    ${({ theme, activeLink }) =>
      activeLink &&
      `
      border-bottom: 2px solid ${theme.colors.swiamBlue};
      font-weight: 600;
      `};
  }
`;

const ContentMenu = styled('div')`
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => theme.generateBreakpoint(1252, `justify-content: center;`)}
`;

export { ListMenu, ItemMenu, LinkMenu, ContentMenu };
