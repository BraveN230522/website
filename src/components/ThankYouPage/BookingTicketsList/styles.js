import styled from '@emotion/styled';
import Section from '@components/common/Section';

const LEFT_SPACING = 100;
const MOBILE_LEFT_SPACING = 10;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => 2 * (width - LEFT_SPACING)}px;

  @media (max-width: 48em) {
    width: ${({ width }) => width - MOBILE_LEFT_SPACING}px;
  }
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.34px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
     font-weight: 400;
     color: ${theme.colors.black};
      `
    )}
`;

const HorizontalScrollingContainer = styled(Section)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  margin-left: -4px;
  max-width: calc(100vw - ${4 * LEFT_SPACING}px);
  @media (max-width: 48em) {
    margin-left: -2px;
    width: 100vw;
  }
  background: transparent;
`;

export { Container, Title, HorizontalScrollingContainer };
