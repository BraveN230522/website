import styled from '@emotion/styled';

import ChevronDown from '@svg/chevron-down-dark.svg';

const InputPhoneMaskStyles = styled.div`
  background: none;

  div.react-tel-input {
    margin-top: 22px;

    & > input {
      border: 2px solid ${({ theme }) => theme.colors.nobel};
      border-radius: 25px;
      color: ${({ theme }) => theme.colors.dark};
      font-family: ${({ theme }) => theme.fonts.Inter};
      font-size: 20px;
      height: 45px;
      padding-left: 85px;
      width: 100%;
    }

    & > div.flag-dropdown {
      background: none;
      border: none;
      left: 25px;

      & > div.selected-flag {
        background: none;

        & > div.flag {
          transform: scale(2);

          & > div.arrow {
            border: none;
            background-image: url(${ChevronDown});
            position: relative;
            height: 8px;
            left: 20px;
            margin-top: -4px;
            top: 50%;
            width: 8px;
          }
        }
      }
    }
  }
`;

const ErrorMessage = styled.p`
  font-weight: 600;
  display: block;
  font-size: 12px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.error};
`;

export { InputPhoneMaskStyles, ErrorMessage };
