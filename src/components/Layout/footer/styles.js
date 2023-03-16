import styled from '@emotion/styled';
import theme from '@utils/styles/theme';

const FooterStyles = styled('footer')`
  background: black;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  padding: 45px 22px 26px;
`;

const FooterContainer = styled('div')`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;

  > div {
    display: flex;

    ${({ theme }) => theme.media.tablet`
      flex-direction: column;
    `}
  }
`;

const FooterMenu = styled('div')`
  order: 1;
  flex: 1;
  display: flex;
  height: 70%;

  ${({ theme }) => theme.media.tablet`
    order: 2;
    justify-content: center;
    width: 100%;
  `}

  ${({ theme }) => theme.media.phone`
    flex-wrap: wrap;
    padding: 20px;
    text-align: center;
  `};
`;

const ListMenu = styled('ul')`
  list-style-type: none;
  padding: 0;

  &:nth-of-type(1) {
    width: 15%;
  }

  &:nth-of-type(2) {
    width: 17%;
  }

  &:nth-of-type(3) {
    width: 23%;
  }

  &:nth-of-type(4) {
    width: 20%;
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
    &:first-of-type {
      order: 1;
      border-bottom: 1px solid ${theme.colors.charcoal};
      width: 50%;
    }

    &:nth-of-type(2) {
      order: 2;
      border-bottom: 1px solid ${theme.colors.charcoal};
      width: 50%;
    }

    &:nth-of-type(3) {
      order: 3;
      width: 50%;
    }

    &:nth-of-type(4) {
      order: 4;
      width: 50%;
    }
  `
    )};
`;

const ItemMenu = styled('li')``;

const LinkMenu = styled('a')`
  color: ${theme.colors.white};
  display: block;
  font-family: ${theme.fonts.Helvetica};
  font-size: 17px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 16px;
  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.media.tablet`
    font-size: 18px;
    line-height: 40px;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  `};
`;

const ContainerMedia = styled('div')`
  order: 2;
  justify-content: flex-end;
  height: 70%;

  ${({ theme }) => theme.media.tablet`
    order: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    padding: 0.5em 0 1.5em;
  `}
`;

const ContainerLogo = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 22px;

  ${({ theme }) => theme.media.tablet`
    justify-content: center;
  `};
`;

const ContainerSocialsShare = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    margin: 0 10px;
    transition: fill ease-out 0.3s;

    &:hover {
      fill: ${theme.colors.white};
    }
  }

  ${({ theme }) => theme.media.tablet`
    justify-content: space-around;
    padding: 2rem 2rem 1rem;
  `};
`;

const Details = styled('p')`
  order: 3;
  opacity: 0.3;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.Helvetica};
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  margin: 2em auto 0;
  text-align: center;
  letter-spacing: -0.1116279px;
`;

export {
  FooterMenu,
  ContainerMedia,
  ContainerLogo,
  ContainerSocialsShare,
  Details,
  FooterStyles,
  ItemMenu,
  LinkMenu,
  ListMenu,
  FooterContainer,
};
