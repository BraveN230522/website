import styled from '@emotion/styled';

const AuthenticationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${({ logged }) => logged && `justify-content: center;`}

  @media (max-width: 48em) {
    min-height: calc(100% - ${({ theme }) => theme.mobileHeaderHeight});
  }

  ${({ theme }) => theme.media.phone`
    display: block;
  `}
`;

const ScrollableContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 32px 40px;

  ${({ theme }) => theme.media.phone`
    padding: 48px 12px 172px;
  `};

  ${({ theme }) => theme.media.phone`
    display: block;
    overflow: visible;
  `}
`;

export { AuthenticationWrapper, ScrollableContainer };
