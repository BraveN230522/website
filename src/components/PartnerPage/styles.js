import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';
import Section from '@components/common/Section';

const HeroWithSpacing = styled(Hero)`
  margin-bottom: 106px;

  ${({ theme }) => theme.media.phone`
    margin-bottom: 34px;
  `}
`;

const GenericWrapper = styled.article`
  ${({ theme }) => theme.setContainer()}

  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const GenericSection = styled(Section)`
  margin-bottom: 2rem;
`;

const StrapContainer = styled.div`
  display: grid;
  grid-template-areas: 'title photo' 'description photo';
  grid-column-gap: 2.8rem;

  ${({ theme }) => theme.media.phone`
    display: block;
  `}
`;

const HeaderWrapper = styled.h1`
  text-align: left;
  font-weight: 500;
  grid-area: title;
  font-size: 20px;
`;

const StrapImage = styled.img`
  max-width: 586px;
  width: 100%;
  height: 288px;
  object-fit: cover;
  grid-area: photo;
  border-radius: 18px;
`;

const StrapDescription = styled.p`
  grid-area: description;
  line-height: 24px;
  margin-top: 0px;

  ${({ theme }) => theme.media.phone`
    margin-top: 12px;
  `}
`;

const QuoteWrapper = styled.div`
  text-align: center;
  max-width: 604px;
  margin: auto;

  span {
    font-style: italic;
  }
`;

const EmphasisedWrapper = styled.h1`
  line-height: 28px;
  font-weight: 500;
  font-style: italic;

  svg:last-child {
    transform: rotateZ(180deg) translateX(-8px);
  }
`;

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    align-items: center;
  `};
`;

const ColumnsObject = styled.div`
  max-width: 286px;
`;

const ColumnTitle = styled.h1`
  text-align: center;
  font-weight: 500;
`;

const ColumnImage = styled.img`
  max-width: 290px;
  height: 288px;
  object-fit: cover;
`;

const ColumnDescription = styled.p`
  text-align: left;
  line-height: 22px;
`;

const ColumnsTextObject = styled.div`
  max-width: 580px;
  margin: 0 10px;
`;

export {
  HeroWithSpacing,
  GenericWrapper,
  GenericSection,
  StrapContainer,
  HeaderWrapper,
  StrapImage,
  StrapDescription,
  EmphasisedWrapper,
  QuoteWrapper,
  ColumnsWrapper,
  ColumnsObject,
  ColumnTitle,
  ColumnImage,
  ColumnDescription,
  ColumnsTextObject,
};
