import styled from '@emotion/styled';

import LocalAdvice from '@components/common/LocalAdvice';

const LocalAdviceSection = styled(LocalAdvice)`
  margin-top: 64px;
  ${({ theme }) => theme.media.phone`
    margin-top: 22px;
  `}
`;

export { LocalAdviceSection };
