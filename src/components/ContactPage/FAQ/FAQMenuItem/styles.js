import styled from '@emotion/styled';

const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightStone};
`;

const FieldWrapper = styled.div`
  text-align: left;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1.6rem;
  align-items: center;

  svg {
    transition: transform 0.5s ease;
    transform: rotate(${({ opened }) => (opened ? '180deg' : 0)});
    justify-self: end;
  }

  path {
    fill: ${({ theme }) => theme.colors.dark};
  }
`;

const TitleWrapper = styled.h6`
  font-weight: 500;
  font-size: 16px;
  margin: 16px 0 0;
  line-height: 24px;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  transition: all 0.6s ease;
  max-height: ${({ opened }) => (opened ? 'inherit' : 0)};
  padding: ${({ opened }) => (opened ? '16px' : 0)} 1rem 0;

  a {
    color: ${({ theme }) => theme.colors.swiamBlue};
  }
`;

const TextWrapper = styled.div`
  line-height: 30px;
`;

export { FAQWrapper, FieldWrapper, TitleWrapper, ContentWrapper, TextWrapper };
