import styled from '@emotion/styled';
import { css } from '@emotion/core';

const layout = css`
  width: 100vw;
  height: 900px;
  padding: 64px 124px;
  border: none;

  ${({ theme }) => theme.media.phone`
    padding: 0;
    height: 600px;
  `}
`;

const SeatSelectionFrame = styled.iframe`
  ${layout};

  ${({ theme }) => theme.media.phone`
    padding: 0
  `}
`;

const LoadingCartId = styled.div`
  ${layout};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.37px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export { SeatSelectionFrame, LoadingCartId };
