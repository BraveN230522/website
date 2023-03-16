import styled from '@emotion/styled';
import Header from '@components/Layout/Header';

const VenueTipsHeader = styled(Header)`
  &:before {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 1) 95%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

const TipCardContainer = styled.div`
  // background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  width: 100%;
  margin-top: -220px;
  ${({ theme }) => theme.setContainer()};
  padding-bottom: 32px;
  z-index: 100;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${({ theme }) => theme.media.phone`
    margin-top: -100px;
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  `}
`;

const ButtonContainer = styled.article`
  ${({ theme }) => theme.setContainer()};
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  a:hover {
    text-decoration: none;
  }
`;

const TipStyles = styled.div`
  /* background-clip: border-box;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)); */
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.stone};
  display: flex;
  flex-direction: column;
  min-height: 274px;
  position: relative;
  width: 100%;
  word-wrap: break-word;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  height: 100%;
  min-height: 550px;
  cursor: pointer;

  ${({ dark, theme }) =>
    !!dark &&
    `
    button {
      color: ${theme.colors.white};
    }
  `};
`;

const TipTitle = styled.h1`
  display: block;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.DINAlternateBold};
  line-height: 41px;
  max-width: 400px;
  font-size: 36px;
  margin-top: 0;
  padding: 76px 36px 5px 36px;
  overflow: hidden;
  letter-spacing: -0.1px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TipImg = styled.img`
  width: 100px;
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

const TipDetails = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.14px;
  padding: 18px 36px 24px 36px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { VenueTipsHeader, TipCardContainer, ButtonContainer, TipStyles, TipTitle, TipImg, TipDetails };
