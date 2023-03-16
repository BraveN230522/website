import styled from '@emotion/styled';

const getGridStyles = ({ grid, columns, theme }) =>
  grid &&
  `
  display: grid;
  grid-gap: 17px;
  grid-template-columns: repeat(${columns}, 1fr);

  ${theme.media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${theme.media.phone`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const SectionStyles = styled.div`
  background-color: ${({ dark, theme }) => (dark ? `${theme.colors.black}` : `${theme.colors.white}`)};
  ${({ centered, theme }) => (centered ? theme.setContainer() : 'width:100%;')}
`;

const TitleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px;
`;

const Title = styled.h1`
  color: ${({ dark, theme }) => (dark ? `${theme.colors.white}` : `${theme.colors.black}`)};
  font-family: ${({ theme }) => theme.fonts.Inter};
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

const Article = styled.article`
  align-items: center;
  display: flex;

  ${getGridStyles}

  ${({ theme }) => theme.media.phone`
      grid-gap: 8px;
  `}
`;

export { SectionStyles, TitleHeader, Title, Article };
