import styled from '@emotion/styled';
import Hero from '@components/Layout/Hero';

const HeroWithSpacing = styled(Hero)`
  max-width: 100%;
  padding-bottom: 70px;
  background: linear-gradient(0deg, ${({ theme }) => theme.colors.white} 0%, rgba(0, 0, 0, 0.0001) 70%);

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
     background: linear-gradient(0deg, ${theme.colors.white} 0%, rgba(0, 0, 0, 0.0001) 40%);
  `
    )}

  p {
    max-width: 1220px;
  }
`;

export { HeroWithSpacing };
