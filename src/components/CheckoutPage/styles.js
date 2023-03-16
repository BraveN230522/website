import styled from '@emotion/styled';

import Header from '@components/Layout/Header';

const CheckoutHeader = styled(Header)`
  margin-bottom: 64px;

  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
  `}
`;

const LoadingCartId = styled.div`
  width: 100vw;
  height: 700px;
  padding: 64px 124px;
  border: none;

  ${({ theme }) => theme.media.phone`
    padding: 0;
    height: 600px;
  `}
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.37px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export { CheckoutHeader, LoadingCartId };
