import styled from '@emotion/styled';

const MoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MoreText = styled.p`
  color: ${({ dark, theme }) => (dark ? theme.colors.black : theme.colors.white)};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.1px;
  margin: 0;
  position: relative;
  cursor: pointer;

  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: solid 6px transparent;
    border-top-color: ${({ dark, theme }) => (dark ? theme.colors.black : theme.colors.white)};
    right: -22px;
    top: 6px;
    border-top-width: 8px;
  }
`;

export { MoreContainer, MoreText };
