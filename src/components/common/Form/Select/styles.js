import styled from '@emotion/styled';
import Icon from '@components/common/Icon';

import chevronDown from '@public/svg/chevron-down.svg';

const SelectStyles = styled.div`
  position: relative;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  left: 19px;
  top: 12px;
  cursor: pointer;
`;

const SelectLabel = styled.label`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.12px;
  margin-left: 9px;
`;

const SelectComponent = styled.select`
  appearance: none;
  background-image: url(${chevronDown});
  background-position: 95% 50%;
  background-repeat: no-repeat;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  outline: none;
  width: 100%;
  height: 45px;
  padding: 0rem 3rem;
`;

const ErrorContainer = styled.div`
  margin-top: 5px;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-weight: 600;
  display: block;
  font-size: 12px;
  padding-left: 20px;
`;

export { SelectComponent, ErrorContainer, SelectStyles, SelectIcon, ErrorMessage, SelectLabel };
