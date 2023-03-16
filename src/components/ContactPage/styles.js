import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';
import Section from '@components/common/Section';

const HeroWithSpacing = styled(Hero)`
  margin-bottom: 106px;

  ${({ theme }) => theme.media.phone`
    margin-bottom: 34px;
  `}
`;

const ContactWrapper = styled.article`
  ${({ theme }) => theme.setContainer()}

  display: grid;
  grid-template-columns: auto 38%;
  grid-column-gap: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: auto ;
  `}
`;

const ContactText = styled.p`
  line-height: 30px;

  a {
    &:first-of-type {
      margin-left: 0;
    }

    margin-left: 4px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.swiamBlue};
  }
`;

const ContactSection = styled(Section)`
  margin-bottom: 2rem;

  header {
    margin-bottom: 0.4rem;
  }
`;

const ContactFAQBox = styled.div`
  padding: 2rem;
  border-radius: 4px;
  border: solid 1px #eee;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.14);
  max-height: 632px;
  overflow: auto;

  ${({ theme }) => theme.media.tablet`
    max-height: 100%;
  `}
`;

export { HeroWithSpacing, ContactFAQBox, ContactSection, ContactText, ContactWrapper };
