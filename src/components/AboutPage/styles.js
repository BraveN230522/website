import styled from '@emotion/styled';
import StaticSectionTitle from '@components/common/StaticSectionTitle';
import COVIDBanner from '@images/covid-19-banner.jpg';

const FeaturedPhraseWrapper = styled.section`
  background: ${({ theme }) => theme.colors.swiamBlue};
`;

const FeaturedPhraseContainer = styled.article`
  ${({ theme }) => theme.setContainer()};
  min-height: 177px;
  display: flex;
  justify-content: center;
  line-height: 28px;
  align-items: center;
  flex-direction: column;
`;

const FeaturedPhrase = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  font-style: italic;
  width: 55%;
  margin-bottom: 0;
  grid-template-columns: auto 85% auto;
  display: grid;

  ${({ theme }) => theme.media.phone`
    width: 100%;
    font-size: 18px;
  `}

  img:first-child {
    transform: rotateZ(180deg);
  }

  img:last-child {
    align-self: end;
    justify-self: end;
  }
`;

const PhraseAuthor = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  font-size: 12px;
`;

const AboutSection = styled.section`
  padding: 4rem 0;
  background: ${({ dark, theme }) => (dark ? theme.colors.dark : '#fff')};
`;

const AboutContainer = styled.article`
  ${({ theme }) => theme.setContainer()};
`;

const AboutSectionCOVID = styled(AboutSection)`
  background: url(${COVIDBanner});
  background-size: cover;

  article h3 {
    padding-top: 1rem;
  }
`;

const AboutGridContainer = styled(AboutContainer)`
  display: grid;
  padding-top: 2rem;
  grid-template-columns: 25% 25% 25% 25%;
  grid-row-gap: 1rem;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: 50% 50%;
  `}

  ${({ theme }) => theme.media.phone`
    grid-template-columns: 100%;
  `}
`;

const AboutGridItem = styled.div`
  text-align: center;

  img {
    border-radius: 50%;
    width: inherit;
  }
`;

const AboutSubTitle = styled(StaticSectionTitle)`
  font-size: 1.4rem;
  margin: 4px 0 0;
  font-family: ${({ theme }) => theme.fonts.DINAlternate};
`;

const AboutText = styled.p`
  color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.dark)};
  margin-top: 0;
  font-size: 14px;

  a {
    color: ${({ theme }) => theme.colors.swiamBlue};
  }
`;

const SmallText = styled(AboutText)`
  max-width: 724px;
  margin: 15px auto 0;
  line-height: 20px;
  text-align: center;
`;

export {
  SmallText,
  FeaturedPhraseWrapper,
  AboutSection,
  AboutGridContainer,
  AboutText,
  AboutGridItem,
  AboutSubTitle,
  FeaturedPhraseContainer,
  AboutSectionCOVID,
  FeaturedPhrase,
  PhraseAuthor,
  AboutContainer,
};
