import styled from '@emotion/styled';

const getCommonFontStyles = ({ theme }) => `
  font-family: ${theme.fonts.Inter};
`;

const HorizontalScrollStyles = styled.section`
  padding-top: 40px;

  ${({ theme }) => theme.media.tablet`
    padding: 32px 0 49px;
  `}
`;

const getCommonButton = `
  background: none;
  border: none;
  cursor: pointer;
  height: 50%;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const HorizontalScrollContainer = styled.div`
  ${({ theme }) => theme.setContainer()}

  ${({ theme }) => theme.media.phone`
    padding: 0px;
  `}
  div.BrainhubCarousel__container {
    height: 210px;
  }

  div.BrainhubCarousel {
    position: relative;
  }

  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowLeft {
    ${getCommonButton};
    border: none ${({ theme }) => theme.colors.white};
    left: 1%;
  }

  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowRight {
    ${getCommonButton};
    border: none ${({ theme }) => theme.colors.white};
    right: 1%;
  }
`;

const HorizontalCardScrollHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`;

const HorizontalScrollContainerTitle = styled.h1`
  ${getCommonFontStyles}
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.15px;
  line-height: 29px;
  margin: 0;

  ${({ theme }) =>
    theme.generateBreakpoint(
      378,
      `
        font-size: 20px;
      `
    )};
`;

const HorizontalCardScrollMore = styled.a`
  ${getCommonFontStyles}

  cursor:pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.1px;
  opacity: 0.5;
  transition: all ease-in 0.2s;

  &:hover {
    opacity: 1;
    text-decoration: none;
  }
`;

const SimpleCardStyles = styled.article`
  overflow-x: scroll;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

const SimpleCardContent = styled.a`
  cursor: pointer;
  position: relative;
  width: calc(20% - 14px);
  min-height: 160px;
  margin-right: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 8px;
  min-width: 216px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    img {
      transform: scale(1.25) rotate(10deg);
    }

    span {
      opacity: 1;
    }
  }

  ${({ theme }) => theme.media.tablet`
    width: calc(50% - 12px);
    max-width: 100%;

    // &:nth-of-type(2n + 2) {
    //   margin-right: 0;
    // }
  `}
`;

const SimpleCardImage = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  height: 100%;
  object-fit: cover;
  transition: ease-out 0.3s all;
`;

const SimpleCardLegend = styled.span`
  ${getCommonFontStyles}

  color: ${({ theme }) => theme.colors.white};
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.15px;
  line-height: 28px;
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  width: 100%;

  ${({ theme }) => theme.media.phone`
    opacity: .5;
    font-weight: 400;
  `}
`;

export {
  HorizontalScrollStyles,
  HorizontalScrollContainer,
  HorizontalCardScrollHeader,
  HorizontalScrollContainerTitle,
  HorizontalCardScrollMore,
  SimpleCardStyles,
  SimpleCardContent,
  SimpleCardImage,
  SimpleCardLegend,
};
