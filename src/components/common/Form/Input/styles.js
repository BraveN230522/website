import styled from '@emotion/styled';

const InputGroup = styled.div`
  width: 22rem;
`;

const InputComponent = styled.input`
  ${({ icon }) => icon && `background: url(${icon}) no-repeat scroll 16px center`};
  border: 2px solid ${({ theme, light }) => (light ? theme.colors.nobel : theme.colors.white)};
  border-radius: 25px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  color: ${({ theme, light }) => (light ? theme.colors.dark : theme.colors.white)};
  display: block;
  font-size: 13px;
  outline: none;
  font-weight: 400;
  width: 100%;
  line-height: 20px;
  padding-left: ${({ light }) => (light ? '2rem' : '2.5rem')};
  padding-right: 0.8rem;
  font-weight: 400;
  height: 45px;

  ::placeholder {
    color: ${({ theme, light }) => (light ? theme.colors.suvaGrey : theme.colors.white)};
    opacity: 1;
  }

  ${({ theme }) => theme.media.phone`
    padding: 0 2.4rem;
  `};
`;

const MessageContainer = styled.div`
  margin-top: 5px;
`;

const AdviceMessage = styled.span`
  color: ${({ theme }) => theme.colors.greyishbrown};
  font-weight: 600;
  display: block;
  font-size: 12px;
  padding-left: 20px;
`;

const InputLabel = styled.label`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.12px;
  margin-left: 9px;
`;

export { InputGroup, InputLabel, InputComponent, MessageContainer, AdviceMessage };
