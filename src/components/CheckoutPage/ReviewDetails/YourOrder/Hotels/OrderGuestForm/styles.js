import styled from '@emotion/styled';
import Input from '@components/common/Form/Input';

const GuestNameInput = styled(Input)`
  width: unset;
  display: inline-block;
  color: black;

  input {
    font-size: 16px;
    letter-spacing: -0.13px;
    width: 100%;
    color: ${({ theme }) => theme.colors.suvaGrey};
    ::placeholder {
      color: ${({ theme }) => theme.colors.suvaGrey};
      opacity: 1;
    }
    border: 2px solid #979797;
    width: auto;
    margin: 0 5px;
  }

  margin-bottom: 8px;
`;

const GuestNameLabel = styled.span`
  display: inline-block;
  min-width: 150px;
`;

const GuestFormError = styled.div`
  color: #d03a2d;
  font-weight: 600;
  font-size: 12px;
  margin: 0 0 5px 70px;
  display: none;
  &.show {
    display: block;
  }
`;

export { GuestNameInput, GuestFormError, GuestNameLabel };
