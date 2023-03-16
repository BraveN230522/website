import styled from '@emotion/styled';

const CheckoutContainer = styled.section`
  ${({ borderBottom, theme }) => borderBottom && `border-bottom: 2px solid ${theme.colors.stone}`};
  margin-bottom: ${({ borderBottom }) => borderBottom && `${22}px`};
  padding-bottom: ${({ borderBottom }) => borderBottom && `${22}px`};
`;

const CheckoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  ${({ theme }) =>
    theme.generateBreakpoint(
      960,
      `
       border-bottom: 2px solid ${theme.colors.stone};
      `
    )}
`;

const CheckoutTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 41px;
  font-weight: 600;
  line-height: 50px;
  margin: 0;

  ${({ theme }) => theme.media.phone`
    font-size: 24px;
  `}
`;

const CheckoutContent = styled.article`
  display: flex;
`;

export { CheckoutContainer, CheckoutHeader, CheckoutTitle, CheckoutContent };
