import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';

const HeroWithSpacing = styled(Hero)`
  margin-bottom: 106px;
  ${({ theme }) => theme.media.phone`
    margin-bottom: 34px;
  `}
`;

const LetsGoFormSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.phone`
    padding-left: 16px;
    padding-right: 16px;
  `};
`;

const LetsGoFormIframe = styled.iframe`
  height: 1755px;
  overflow: hidden;
  ${({ theme }) => theme.media.phone`
    width: 340px;
    height: 1850px;
  `};
`;

export { HeroWithSpacing, LetsGoFormSection, LetsGoFormIframe };
