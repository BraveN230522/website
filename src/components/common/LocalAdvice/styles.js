import styled from '@emotion/styled';
import Section from '@components/common/Section';
import Media from '@components/common/Media';
import Icon from '@components/common/Icon';

const LocalAdviceSection = styled(Section)`
  margin-bottom: 64px;

  article {
    flex-direction: column;
  }

  ${({ theme }) => theme.media.phone`
    padding: 0;

    > header {
      padding: 0 12px;
    }

    article {
      align-items: flex-start;
    }
  `}
`;

const LocalAdviceMore = styled.a`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.1px;
  opacity: 0.5;
  transition: all ease-in 0.2s;
  color: #000000;
  width: 100%;
  text-align: right;
  padding-top: 5px;

  &:hover {
    opacity: 1;
    text-decoration: none;
  }
`;

const LocalAdviceContainer = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const LocalAdviceMediaContainer = styled.div`
  min-height: 357px;
  max-height: 357px;
  max-width: 721px;
  margin: 0 27px 0 0;
  width: 100%;
  position: relative;

  ${({ theme }) => theme.media.tablet`
    margin: 0 0 16px;
    max-width: 100%;
  `}

  ${({ theme }) => theme.media.phone`
    min-height: 230px;
    margin-left: 12px;
    width: calc(100% - 24px);
  `}
`;

const LocalAdviceTitleGuide = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  letter-spacing: -0.27px;
  position: absolute;
  left: 45px;
  top: 35px;
  width: 80%;

  ${({ theme }) => theme.media.phone`
    font-size: 24px;
    letter-spacing: -0.21px;
    left: 18px;
    top: 23px;
  `}
`;

const LocalAdviceMedia = styled(Media)`
  background-image: ${({ adviceImage }) => `url(${adviceImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  min-height: 357px;
  max-height: 357px;
  max-width: 721px;
  margin: 0 27px 0 0;
  width: 100%;
  cursor: pointer;

  &:hover {
    g:nth-of-type(1) > use {
      fill: ${({ theme }) => theme.colors.white};
    }

    g:nth-of-type(2) > g use {
      fill: ${({ theme }) => theme.colors.swiamBlue};
    }
  }

  ${({ theme }) => theme.media.tablet`
    margin: 0 0 16px;
    max-width: 100%;

    svg {
      transform: translate(-50%, 180%);
    }
  `}

  ${({ theme }) => theme.media.phone`
    min-height: 230px;
    margin-left: 30px;
    width: calc(100% - 60px);

    svg {
      transform: translate(-50%, 110%);
    }
  `}
`;

const LocalAdviceMainImage = styled.a`
  background-image: ${({ adviceImage }) => `url(${adviceImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  display: block;
  height: 100%;
  position: relative;
  cursor: pointer;

  h2 {
    color: #000;
  }

  &:hover {
    g:nth-of-type(1) > use {
      fill: ${({ theme }) => theme.colors.white};
    }

    g:nth-of-type(2) > g use {
      fill: ${({ theme }) => theme.colors.swiamBlue};
    }
  }

  ${({ theme }) => theme.media.tablet`
    min-height: 357px;
  `}
`;

const BtnVideoPlay = styled(Icon)`
  cursor: pointer;
  left: 50%;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);

  g,
  use {
    transition: all 0.3s ease-in;
  }
`;

const LocalAdviceCardContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 447px;
  margin-left: 12px;
  width: 100%;

  & > div {
    min-height: 167px;

    img {
      max-height: 168px;
    }
  }

  ${({ theme }) => theme.media.tablet`
    flex-direction: row;
    justify-content: flex-start;
    max-width: 90%;
    overflow-x: scroll;

    & > div {
      min-height: initial;

      img {
        max-width: 138px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  `}

  ${({ theme }) => theme.media.phone`

    & > div {
      margin-right: 1rem;


      div {
        min-height: 136px;
      }

      a {
        width: 334px;
      }

      img {
        max-width: 148px;
        min-width: inherit;
      }

      h1 {
        font-size: 16px;
      }
    }
  `}
`;

const LocalAdviceTipsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  border-radius: 8px;
  display: flex;
  min-height: 102px;
  justify-content: space-between;
  margin-top: 24px;
  padding: 23px 17px;
  width: 100%;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}

  ${({ theme }) => theme.media.phone`
    margin-left: 30px;
    width: calc(100% - 60px);
  `}
`;

const LocalAdviceTipsMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px;

  &:last-child {
    margin-right: 83px;
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      1194,
      `
      &:last-child {
        margin-right: 32px;
      }
  `
    )}

  ${({ theme }) =>
    theme.generateBreakpoint(
      1090,
      `
        &:last-child {
          margin-right: 0;
        }
    `
    )}

  ${({ theme }) => theme.media.tablet`
    justify-content: flex-start;
    margin-bottom: 32px;

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`;

const LocalAdviceTipsContent = styled.div``;

const Tip = styled.p`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 4px;
`;

const LocationIcon = styled(Icon)`
  width: 48px;
  margin-right: 12px;
  cursor: pointer;

  use {
    fill: ${({ theme }) => theme.colors.white};
  }

  g,
  use {
    transition: all 0.3s ease-in;
  }

  &:hover {
    use {
      fill: ${({ theme }) => theme.colors.swiamBlue};
    }

    g[fill] {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

const ViewsAndReplies = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.6;
  font-family: ${({ theme }) => theme.fonts.Helvetica};
  font-size: 13px;
  line-height: 13px;
`;

export {
  LocalAdviceSection,
  LocalAdviceMore,
  LocalAdviceContainer,
  LocalAdviceMediaContainer,
  LocalAdviceTitleGuide,
  LocalAdviceMedia,
  LocalAdviceMainImage,
  BtnVideoPlay,
  LocalAdviceCardContent,
  LocalAdviceTipsContainer,
  LocalAdviceTipsMainContent,
  LocalAdviceTipsContent,
  Tip,
  ViewsAndReplies,
  LocationIcon,
};
