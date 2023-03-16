import styled from '@emotion/styled';

const getCommonFontStyles = ({ theme }) => `
  color: ${theme.colors.white};
  font-family: ${theme.fonts.Inter};
`;

const SportsStyles = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 56px 0 30px 0;

  ${({ theme }) => theme.media.tablet`
    padding: 24px 0 22px;
  `}
`;

const SportsContainer = styled.div`
  ${({ theme }) => theme.setContainer()}

  padding-left: 15px;
  padding-right: 15px;
`;

const SportsHeader = styled.header`
  align-items: center;
  display: flex;
  flex: 1;

  ${({ theme }) =>
    theme.generateBreakpoint(
      1220,
      `
        margin: 0 10px;
      `
    )};
`;

const SportsImage = styled.img`
  max-width: 61px;
  width: 100%;
  margin-bottom: 22px;
`;

const SportsTitle = styled.span`
  ${getCommonFontStyles}
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.1px;
  line-height: 29px;
  margin-bottom: 37px;
`;

const SportsArticle = styled.article`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0 15px;
`;

const SportsContentItems = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  width: 12.5%;

  &:hover {
    svg > g,
    svg + span {
      opacity: 1;
      transition: all ease-in 0.3s;
    }
  }

  ${({ theme }) => theme.media.tablet`
    width: 33%;
    min-height: 121px;
    margin-bottom: 41px;
  `}
`;

const SportsDescription = styled.span`
  ${getCommonFontStyles}
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  opacity: 0.7;
  text-align: center;
`;

export {
  SportsStyles,
  SportsContainer,
  SportsHeader,
  SportsImage,
  SportsTitle,
  SportsArticle,
  SportsContentItems,
  SportsDescription,
};
