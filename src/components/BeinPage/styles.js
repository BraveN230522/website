import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';

const HeroWithSpacing = styled(Hero)`
  margin-bottom: 106px;

  ${({ theme }) => theme.media.phone`
    margin-bottom: 34px;
  `}
`;

const BeinFormSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  // margin: 0 auto;
  // min-width: 600px;
  // max-width: 740px;
  // width: 100%;
  // min-height: 300px;

  ${({ theme }) => theme.media.phone`
    padding-left: 16px;
    padding-right: 16px;
  `};
`;

const BeinFormIframe = styled.iframe`
  height: 1425px;
  overflow: hidden;
  ${({ theme }) => theme.media.phone`
    width: 340px;
  `};
`;

export { HeroWithSpacing, BeinFormSection, BeinFormIframe };
