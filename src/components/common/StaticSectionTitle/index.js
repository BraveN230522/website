import styled from '@emotion/styled';

export default styled.h3`
  text-align: center;
  margin: 0;
  font-size: 41px;
  font-family: ${({ theme }) => theme.fonts.DINAlternateBold};
  color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.dark)};
  letter-spacing: normal;
  line-height: 1.22;
  font-weight: 400;
`;
