import styled from '@emotion/styled';
import Icon from '@components/common/Icon';

const DropdownStyles = styled.div`
  ${({ theme }) => theme.setContainer};
`;

const DropdownWrapper = styled.div`
  width: 100%;
  border-top: solid 1px #d1d1d1;
  border-bottom: solid 1px #d1d1d1;
`;

const DropdownHeader = styled.div`
  font-weight: 500;
  padding: 24px 20px;
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.phone`
    font-size: 20px;
  `}
`;

const DropdownHeaderContainer = styled.div`
  align-items: center;
  display: flex;
`;

const StadiumIcon = styled(Icon)`
  margin-right: 32px;
`;

const DropdownArrow = styled(Icon)`
  transform: scale(1.6);
  margin-left: 1rem;

  path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

const DropdownContainer = styled.div`
  overflow: hidden;
  max-height: ${({ opened }) => (opened ? '1000px' : 0)};
  padding: ${({ opened }) => (opened ? '2rem 20px' : '0 20px')};
  transition: all ease-out 0.5s;
`;

export {
  DropdownStyles,
  DropdownContainer,
  DropdownArrow,
  DropdownHeader,
  DropdownHeaderContainer,
  DropdownWrapper,
  StadiumIcon,
};
