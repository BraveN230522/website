import styled from '@emotion/styled';

const getCommonFontStyles = ({ theme }) => `
  font-family: ${theme.fonts.Inter};
`;

const TicketsLeaguesStyles = styled.section`
  padding: 40px 0 60px;

  ${({ theme }) => theme.media.tablet`
    padding: 32px 0 49px;
  `}
`;

const TicketsLeaguesContainer = styled.div`
  ${({ theme }) => theme.setContainer()}
`;

const TicketsLeaguesHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`;

const TicketsLeaguesTitle = styled.h1`
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

const TicketsLeaguesMore = styled.a`
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

const TicketsLeaguesArticle = styled.article`
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.phone`
    flex-wrap: wrap;
    justify-content: flex-start;
  `}
`;

const TicketsLeaguesContent = styled.a`
  position: relative;
  max-width: 224px;
  margin-right: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 8px;

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

  ${({ theme }) => theme.media.phone`
    width: calc(50% - 6px);
    max-width: 100%;

    &:nth-of-type(2n + 2) {
      margin-right: 0;
    }
  `}
`;

const TicketsLeaguesImage = styled.img`
  width: 100%;
  display: block;
  object-fit: contain;
  transition: ease-out 0.3s all;
`;

const TicketsLeaguesLegend = styled.span`
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

const TopSportingWrapper = styled.div`
  article {
    overflow: scroll;
    flex-wrap: nowrap;
    -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  article::-webkit-scrollbar {
    display: none;
  }

  a {
    ${({ theme }) => theme.media.tablet`
      &:last-child {
        display: block;
      }
   `}

    ${({ theme }) => theme.media.phone`
      min-width: 225px;
   `}
  }
`;

export {
  TopSportingWrapper,
  TicketsLeaguesStyles,
  TicketsLeaguesContainer,
  TicketsLeaguesHeader,
  TicketsLeaguesTitle,
  TicketsLeaguesMore,
  TicketsLeaguesArticle,
  TicketsLeaguesContent,
  TicketsLeaguesImage,
  TicketsLeaguesLegend,
};
