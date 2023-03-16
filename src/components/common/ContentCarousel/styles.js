import styled from '@emotion/styled';
import CarouselControls from '@components/common/CarouselControls';

const getCommonFontStyles = ({ theme }) => `
  color: ${theme.colors.white};
`;

const CarouselStyles = styled.section`
  background: ${({ theme }) => theme.colors.swiamBlue};
  min-height: 256px;
  background-size: contain;
  display: flex;
  flex-wrap: wrap;
  padding-right: 2rem;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    padding-right: 0;
  `}
`;

const CarouselFigure = styled.figure`
  display: block;
  max-width: 720px;
  width: 100%;
  position: relative;
  margin: 0;
  margin-right: 37px;
  min-height: 256px;

  ${({ theme }) => theme.generateBreakpoint(1240, `max-width: 600px;`)}
  ${({ theme }) => theme.generateBreakpoint(1030, `max-width: 500px;`)}
  ${({ theme }) => theme.media.tablet`
    max-width: 100%;
    margin-right: 0;
    min-height: 131px;
  `}
`;

const CarouselImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  transition: all ease-in 0.2s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const CarouselContainer = styled.article`
  max-width: 521px;
  flex: 1;
  padding-top: 15px;

  ${({ theme }) => theme.media.tablet`
    max-width: 100%;
    text-align: center;
    padding: 0 50px;
    margin-top: 24px;
  `}
`;

const CarouselTitle = styled.h1`
  ${getCommonFontStyles}

  margin: 0;
  font-size: 28px;
  letter-spacing: -0.2px;
`;

const CarouselText = styled.p`
  ${getCommonFontStyles}

  font-size: 14px;
  letter-spacing: -0.1px;
  margin: 13px 0 16px;

  ${({ theme }) => theme.media.tablet`
    margin-bottom: 29px;
  `}
`;

const CarouselLink = styled.div`
  a {
    ${getCommonFontStyles}
    cursor: pointer;
    width: 100px;
    height: 39px;
    border-radius: 19.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    border: solid 2px ${({ theme }) => theme.colors.white};
    transition: all ease-in 0.2s;
    margin-bottom: 28px;
    &:hover {
      text-decoration: none;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.swiamBlue};
    }

    @media (max-width: 960px) {
      width: 100%;
      height: 39px;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 32px;
      font-family: ${({ theme }) => theme.fonts.DINAlternate};
    }
  }
`;

const CarouselControl = styled(CarouselControls)`
  ${({ theme }) => theme.media.tablet`
    justify-content: center;
  `}
`;

export {
  CarouselControl,
  CarouselContainer,
  CarouselStyles,
  CarouselFigure,
  CarouselImage,
  CarouselLink,
  CarouselTitle,
  CarouselText,
};
