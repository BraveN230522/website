import styled from '@emotion/styled';

const getCommonCaroulselStyles = () => `
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: cover;
  background-repeat: no-repeat;
  transition: all ease-out .3s;
`;

const HeaderStyles = styled.header`
  width: 100%;
  min-height: ${({ short }) => (typeof short === 'string' ? short : short ? '168px' : '736px')};
  padding-top: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;

  &:after,
  &:before {
    content: '';
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }

  &:after {
    display: ${({ light }) => (light ? 'none' : 'none')};
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    min-height: 580px;
    ${({ short }) =>
      typeof short === 'string'
        ? `min-height: ${short}`
        : short &&
          `
      min-height: auto;
    `};
  }

  figure {
    margin: 0;
  }
`;

const HeaderImage = styled.img`
  ${props => getCommonCaroulselStyles(props)}

  object-position: center center;
  opacity: ${({ active, isHomePage }) => (active ? (isHomePage ? 1 : 0.4) : 0)};

  ${({ theme }) => theme.generateBreakpoint(768, `display: none;`)}
`;

const HeaderMobileImage = styled.img`
  ${props => getCommonCaroulselStyles(props)}

  display: none;
  opacity: ${({ active, isHomePage }) => (active ? (isHomePage ? 1 : 0.4) : 0)};

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
        display: block;
        object-position: center center;
        object-fit: cover;
      `
    )}

  ${({ theme }) => theme.media.phone`
    object-position: center 0;
  `}
`;

const HeaderContainer = styled.div`
  max-width: 1323px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 46px 20px 0;
  margin-bottom: 38px;
  position: relative;
  z-index: 3;

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  height: 73px;
  width: 179px;
  // height: auto;
  // width: 100%;

  ${({ theme }) => theme.media.phone`
    height: 64px;
    width: 149px;
  `}
`;

const HeaderSearchContainer = styled.div`
  position: relative;
  z-index: 5;
`;

const HeaderChildrenContainer = styled.div`
  position: relative;
  /* z-index: 1; */
  z-index: ${({ openCurrency }) => (openCurrency ? 1 : 4)};
`;

const HeaderCarouselContainer = styled.div`
  position: absolute;
  bottom: 12rem;
  left: 0;
  z-index: 3;
  width: 100%;
  justify-content: center;
  display: flex;

  ${({ theme }) => theme.media.tablet`
    bottom: 8rem;
  `}
`;

const HeaderMobileTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 21px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.14px;
`;

const HeaderBackButton = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.08px;
  vertical-align: middle;
`;

export {
  Image,
  HeaderStyles,
  HeaderCarouselContainer,
  HeaderImage,
  HeaderMobileImage,
  HeaderContainer,
  HeaderChildrenContainer,
  HeaderSearchContainer,
  HeaderMobileTitle,
  HeaderBackButton,
};
