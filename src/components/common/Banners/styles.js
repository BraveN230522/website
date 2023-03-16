import styled from '@emotion/styled';
import Button from '@components/common/Form/Button';

const SignUpStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.swiamBlue};
  color: white;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 7;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  align-items: center;
  padding: 0 20vw 0 25vw;

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      padding: 5vh 5vw;
      height: 175px;
      align-items: start;
      flex-wrap: wrap;
    `
    )};
`;

const Copy = styled.div`
  padding: 0 15px;
  text-align: center;
  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      padding: 0;
      width: 75vw;
    `
    )};
`;

const Heading = styled.div`
  font-size: 18px;
`;

const Paragraph = styled.p`
  font-size: 13px;
  margin: 5px;
`;

const Medal = styled.img`
  margin-top: -8px;
  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
    margin-top: 5px;
  `
    )};
`;

const BannerButton = styled(Button)`
  margin-left: auto;
  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      width: 50%;
      height: 60%;
      margin: 0px auto;
    `
    )};
`;

const Close = styled(Button)`
  cursor: pointer;
  position: absolute;
  right: 8px;
  width: 30px;
  border: none;

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      padding: 0;
      top: 0;
      width: 6%;
    `
    )};

  svg {
    color: white;
  }

  &:hover {
    border: none;
    background: none;
    color: #2891ff;
    svg {
      stroke: transparent;
      stroke-width: 0px;
    }
  }
`;

const Spacer = styled.div`
  height: 100px;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
      height: 175px;
    `
    )};
`;

const AbsCentre = styled.div`
  display: inline-flex;
  position: absolute;
  top: 50%;
  left: 50vw;
  transform: translateX(-50%) translateY(-50%);
  ${({ theme }) =>
    theme.generateBreakpoint(
      1260,
      `
    left: 45vw;
  `
    )};
  ${({ theme }) =>
    theme.generateBreakpoint(
      1024,
      `
    position: static;
    top: auto;
    left: auto;
    transform: none;
  `
    )};
`;

export { SignUpStyle, Copy, Heading, Paragraph, Medal, BannerButton, Close, Spacer, AbsCentre };
