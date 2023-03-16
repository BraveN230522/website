import styled from '@emotion/styled';
import EventTag from '@components/common/Form/Tag';
import Card from '@components/common/Card';

const getCommonButton = `
z-index: 10;
cursor: pointer;
outlinze: none;
padding:0 1px
position: absolute;
background:none
`;

const FeaturedTicketsStyles = styled.section`
  background-color: ${({ dark, theme }) => (dark ? `${theme.colors.black}` : `transparent`)};
  position: relative;
  z-index: 3;
  margin: -9rem auto 15px;
  min-height: 96px;
  background-color: ${({ theme, dark }) => (dark ? theme.colors.black : 'transparent')};
  padding-bottom: 2rem;

  ${({ theme }) =>
    theme.media.phone(`
      margin-top: 0px;
       padding-left: 12px;
       padding-right: 12px;
  `)}
`;

const FeaturedTicketsHeader = styled.header`
  ${({ theme }) => theme.setContainer()};

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

const FeaturedTicketsTitle = styled.h2`
  color: ${({ theme, dark }) => (dark ? theme.colors.white : theme.colors.black)};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.15px;
  line-height: 29px;
`;

const FeaturedTicketsControls = styled.article`
  width: 300%;
  ${({ theme }) => theme.setContainer()};

  display: flex;
  justify-content: flex-start;
  justify-items: flex-start;
  ${({ hasGrid }) => hasGrid && `flex-direction: row-reverse;`}
  margin-bottom: 12px;

  ${({ theme }) => theme.media.phone`
    padding: 0;
  `}
`;

const MoreContainer = styled.article`
  ${({ theme }) => theme.setContainer()};

  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 12px;
`;

const FeaturedTicketsTag = styled.div`
  display: flex;
  margin-bottom: 17px;
  width: 100%;
  overflow-x: auto;

  button {
    border-width: 1px;
    width: 78px;
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      1085,
      `
        overflow-x: auto;
        width: 100%;
      `
    )};

  div.BrainhubCarousel {
    position: relative;
  }

  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowLeft {
    ${getCommonButton};
    left: 1%;
    padding: 18px 14px;
  }
  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowLeft:hover span {
    border-color: #333;
  }

  .BrainhubCarousel__arrows span {
    border-color: #333;
  }
  .BrainhubCarousel__arrows span:hover {
    border-color: #333;
  }

  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowRight {
    ${getCommonButton};
    right: 1%;
    padding: 18px 14px;
    margin: 0 4px;
  }
  button.BrainhubCarousel__arrows.BrainhubCarousel__arrowRight span {
    border-color: #333;
  }
`;

const FeaturedTicketsView = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90px;

  svg {
    margin-left: 8px;
  }

  ${({ isTitle }) => isTitle && `margin-top: -50px;`}

  ${({ theme }) =>
    theme.generateBreakpoint(
      1085,
      `
        // display: none;
      `
    )};
`;

const FeaturedTicketsContainer = styled.div`
  ${({ theme }) => theme.setContainer()};
  padding-bottom: 32px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${({ theme }) => theme.media.phone`
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  `}
`;

const FeaturedTicketsCard = styled(Card)`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s ease-out;

  h1 {
    font-family: ${({ theme }) => theme.fonts.Inter};
    font-weight: 500;
    padding: 0 30px;

    ${({ theme }) => theme.media.phone`
      padding: 0;
    `};
  }

  p {
    /* display: inline-block; */
    margin-right: 5px;
    transform: translateY(3px);
    font-weight: 500;

    span {
      transform: translateY(0px);
    }
  }
`;

const ViewModeButton = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export {
  FeaturedTicketsStyles,
  FeaturedTicketsHeader,
  FeaturedTicketsTitle,
  FeaturedTicketsTag,
  EventTag,
  FeaturedTicketsView,
  FeaturedTicketsContainer,
  FeaturedTicketsCard,
  ViewModeButton,
  FeaturedTicketsControls,
  MoreContainer,
};
