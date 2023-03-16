import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 80px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.37px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  margin-bottom: 7px;
`;

const ReadMore = styled.h3`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  a {
    color: ${({ theme }) => theme.colors.swiamBlue};

    &:hover {
      text-decoration: none;
    }
  }

  margin: 0;
  margin-bottom: 93px;
`;

const Guarantee = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 70px;
  ${({ width }) =>
    width &&
    `
    width:${width};
  `};
  ${({ padding }) =>
    padding &&
    `
  padding:${padding};
  `};
`;

const Icon = styled.img`
  width: 66px;
  height: 66px;
  margin-right: 17px;
`;

const Label = styled.span`
  min-width: 200px;
`;

export { Container, Column, Row, Title, ReadMore, Guarantee, Icon, Label };
