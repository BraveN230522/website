import styled from '@emotion/styled';

import Section from '@components/common/Section';

const HotelFeaturesSection = styled(Section)`
  ${({ theme }) => theme.setContainer()};

  h1 {
    font-weight: 500;
  }
`;

const HotelFeatureContent = styled.div`
  align-items: center;
  display: flex;
`;

const HotelFeatureDescription = styled.span`
  font-size: 14px;
  line-height: 19px;
  margin-left: 16px;
`;

export { HotelFeaturesSection, HotelFeatureContent, HotelFeatureDescription };
