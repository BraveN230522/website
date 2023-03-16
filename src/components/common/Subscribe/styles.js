import styled from '@emotion/styled';

import subscribeBackground from '@images/subscribe-bg.jpg';
import subscribeMobileBackground from '@images/mobile-subscribe.png';
import SuccessFeedback from '@components/common/Feedback/Success';

const SubscribeStyles = styled.div`
  background: url(${subscribeBackground}) bottom center;
  background-size: cover;
  min-height: 233px;
  width: 100%;

  ${({ theme }) =>
    theme.generateBreakpoint(
      836,
      `
      background: ${subscribeMobileBackground};
      min-height: 316px;
      width: 100%;
      `
    )};
`;

const SubscribeContainer = styled.div`
  max-width: 82.688em;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.938em 2px 3.688em;

  form {
    display: flex;
    justify-content: space-around;
    width: 52rem;
  }

  span {
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
  }

  button {
    font-family: ${({ theme }) => theme.fonts.Lato};
  }

  input {
    padding: 0 1.4rem;
    background-color: rgba(14, 38, 75, 0.74);
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      836,
      `
      padding: 2em 2px;
       
      form {
        flex-direction: column;
        align-items: center;
        min-height: 159px;
        width: 100%;
      }

      button,
      form > div {
        min-height: 42px;
        width: 90%;
      }

      input {
        border-width: 1px;
        background-color: rgba(39, 94, 133, 0.66);
      }

      form > div {
        margin-bottom: 20px;
      }
      `
    )};
`;

const SubscribeTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 1.625rem;
  font-weight: 400;
  letter-spacing: -0.1813954px;
  line-height: 35px;
  margin-bottom: 0.5em;
  text-align: center;

  @media (max-width: 836px) {
    font-family: ${({ theme }) => theme.fonts.DINAlternate};
    font-weight: 600;
    font-size: 1.375rem;
    letter-spacing: -0.1534884px;
    line-height: 29px;
  }
`;

const SubscribeDetails = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Helvetica};
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 1.813em;
  text-align: center;

  @media (max-width: 836px) {
    font-family: ${({ theme }) => theme.fonts.Inter};
    font-size: 0.875rem;
    letter-spacing: -0.1534884px;
    line-height: 19px;
    width: 207px;
  }
`;

const SubscribeFeedback = styled(SuccessFeedback)`
  margin-top: 10px;
  padding-left: 20px;

  ${({ error, theme }) => error && `color: ${theme.colors.error};`}

  ${({ theme }) => theme.media.phone`
    padding-left: 0;
  `}
`;

export { SubscribeStyles, SubscribeFeedback, SubscribeContainer, SubscribeTitle, SubscribeDetails };
