import styled from '@emotion/styled';

import Section from '@components/common/Section';
import Button from '@components/common/Form/Button';

const MerchandiseContainer = styled(Section)`
  margin-bottom: 64px;
  padding-left: 12px;
  padding-right: 12px;
  overflow-x: scroll;

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      width: 100%;
      max-width: 768px;
      overflow-x: scroll;
      margin-left: 0px;
  `
    )}
  ${({ theme }) => theme.media.phone`
    article {
      grid-template-columns: repeat(4,1fr);
    }
  `};
`;

const Card = styled.div`
  display: flex;
  width: 278px;
  height: 200px;

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      width: 260px;
      min-width: 260px;
      height: auto;
      border: 1px solid ${theme.colors.stone};
      border-radius: 8px;
      padding: 14px;
      margin-right: 12px;
  `
    )}
`;

const Image = styled.img`
  width: 50%;
  height: 160px;
  margin-right: 1.3rem;

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      height: 132px;
      margin-right: 10px;
  `
    )}
`;

const TitleContent = styled.div`
  height: 150px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  margin-top: 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.black};
`;

const Price = styled.p`
  margin-top: 0;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.black};
`;

const AddButton = styled(Button)`
  width: 135px;
  height: 31px;

  &:hover {
    path {
      transition: all 0.3s ease-in;
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.white};
    }

    rect {
      transition: all 0.3s ease-in;
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  ${({ theme }) => theme.media.phone`
    width: 100px;
    height: 31px;
  `}
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 135px;
`;

export { MerchandiseContainer, TitleContent, Card, Image, Title, Price, AddButton, RightColumn };
