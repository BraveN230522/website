import styled from '@emotion/styled';

const CheckboxContainer = styled.div`
  align-items: center;
  display: flex;
`;

const CheckboxMark = styled.input`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.browGray};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  height: 24px;
  order: ${({ labelFirst }) => (labelFirst ? 1 : 0)};
  outline: none;
  width: 24px;
  -webkit-appearance: none;
  transition: all ease-out 0.3s;

  ${({ checked, theme }) =>
    checked &&
    ` 
    box-shadow: inset 0 0 0 6px ${theme.colors.swiamBlue};
    border-color: ${theme.colors.swiamBlue};
  `}

  &:checked {
    box-shadow: inset 0 0 0 6px ${({ theme }) => theme.colors.swiamBlue};
    border-color: ${({ theme }) => theme.colors.swiamBlue};
  }
`;

const CheckboxLabel = styled.label`
  color: ${({ theme }) => theme.colors.greyishBrown};
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  margin-left: 6px;
  order: ${({ labelFirst }) => (labelFirst ? 0 : 1)};
`;

export { CheckboxContainer, CheckboxMark, CheckboxLabel };
