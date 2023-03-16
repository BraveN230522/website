import styled from '@emotion/styled';
import Section from '@components/common/Section';

const getCommonFontStyles = ({ theme }) => `
  font-family: ${theme.fonts.Inter};
  font-weight: 400;
`;

const MosaicStyles = styled(Section)`
  header {
    ${({ theme }) => theme.setContainer()};
  }

  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;
  grid-auto-rows: 160px;

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
        ${theme.setContainer()};
        display: flex;
        overflow-x: scroll;
        width: 100%;
      `
    )}
`;

const MosaicContent = styled.a`
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  svg {
    bottom: 24px;
    position: absolute;
    right: 24px;
    transition: ease-out 0.3s all;

    ${({ theme }) => theme.media.phone`
      display: none;
    `}
  }

  &:hover {
    img {
      transform: scale(1.55) rotate(10deg);
      transition: all linear 8s;
    }

    svg {
      transform: translateX(5px);
    }
  }

  &:nth-of-type(1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  &:nth-of-type(4) {
    grid-column: span 2;
  }

  ${({ theme }) => theme.media.phone`
    height: 176px;
    margin-right: 6px;
    min-width: 112px;
    min-height: 176px;
    width: 112px;
  `}
`;

const MosaicImage = styled.img`
  height: 100%;
  object-fit: cover;
  transition: ease-in 0.5s all;
  width: 100%;
`;

const MosaicCity = styled.p`
  ${getCommonFontStyles}
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  letter-spacing: -0.33px;
  line-height: 29px;
  left: 50%;
  margin: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  ${({ theme }) => theme.media.tablet`
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.24px;
  `}
`;

const MosaicCountry = styled.span`
  color: ${({ theme }) => theme.colors.lightStone};
  display: block;
  font-size: 18px;
  letter-spacing: -0.27px;
  line-height: 24px;

  ${({ theme }) =>
    theme.generateBreakpoint(
      960,
      `
       color: ${theme.colors.stone};
       font-size: 14px;
       line-height: 19px;
       letter-spacing: -0.21px;
      `
    )}
`;

export { MosaicStyles, MosaicGrid, MosaicContent, MosaicImage, MosaicCity, MosaicCountry };
