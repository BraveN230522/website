import styled from '@emotion/styled';
import { css } from '@emotion/core';

import BlueGameTicket from './blue-game-ticket.svg';
import BlackGameTicket from './black-game-ticket.svg';
import SentConfirmationIcon from './sent-confirmation.svg';
import SendButtonIcon from './send-button.svg';
import SendButtonHoverIcon from './send-button-hover.svg';

import Sending from './SendingButton';

const SendingButton = styled(Sending)`
  ${({ theme }) => theme.media.phone`
    width: 26px;
    height: 26px;
  `}
`;

const cover = css`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const GameTicketContainer = styled.div`
  background-image: url(${({ sent }) => (sent ? BlueGameTicket : BlackGameTicket)});
  width: 282px;
  min-width: 282px; /* Avoid svg collapsing its shape */
  height: 337px;
  margin-right: 30px;
  ${({ theme }) => theme.media.phone`
    width: 215px;
    min-width: 215px;  /* Avoid svg collapsing its shape */
    height: 258px;
    margin-right: 15px;
  `}
  ${cover}
`;

const HeaderSection = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  padding-top: 87px;
  padding-left: 28px;
  padding-right: 28px;
  ${({ theme }) => theme.media.phone`
    padding-top: 74px;
    padding-left: 21.6px;
    padding-right: 19px;
  `}
`;

const ContentSection = styled.section`
  width: 100%;
  height: 50%;

  padding-top: 15px;
  padding-left: 16px;
  padding-right: 25px;
  ${({ theme }) => theme.media.phone`
    padding-top: 12px;
    padding-left: 11.6px;
    padding-right: 14.6px;
  `}
`;

const EventHeadline = styled.h2`
  margin: 0;
  width: 170px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.11px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.media.phone`
    width: 134px;
    font-size: 14px;
    letter-spacing: -0.097px;
  `}
`;

const SentConfirmation = styled.div`
  background-image: url(${SentConfirmationIcon});
  width: 38px;
  height: 38px;
  ${({ theme }) => theme.media.phone`
    width: 30px;
    height: 30px;
  `}
  ${cover}
`;

const FullName = styled.p`
  margin: 0;
  margin-left: 12px;
  margin-bottom: 16px;
  width: 208px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.11;
  letter-spacing: -0.13px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.media.phone`
    font-size: 14px;
  `}
  text-align: left;
`;

const Email = styled.p`
  margin: 0;
  margin-left: 12px;
  width: 208px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.colors.browGray};
  ${({ theme }) => theme.media.phone`
    font-size: 12px;
  `}
  text-align: left;
`;

const Input = styled.input`
  border: none;
  height: 32px;
  border-radius: 22.5px;
  background-color: ${({ theme }) => theme.colors.lightStone};
  margin-bottom: 4px;
  padding: 12px 20px;

  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.colors.browGray};

  ::-webkit-input-placeholder {
    /* Edge */
    color: ${({ theme }) => theme.colors.browGray};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.browGray};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.browGray};
  }

  width: 100%;
  ${({ small }) =>
    small &&
    `
    width: 201px;
  `};

  @media (max-width: 48em) {
    height: 25px;
    padding: 5px 15px;
    font-size: 12px;
    ${({ small }) => small && `width: 160px;`}
  }
`;

const ErrorMessage = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-weight: 400;
  font-size: 12px;

  padding-top: 8px;

  color: ${({ theme }) => theme.colors.error};
  ${({ theme }) => theme.media.phone`
    font-size: 9px;
  `}
`;

const SendButton = styled.button`
  border-radius: 16px;
  background-color: transparent;
  border: none;
  width: 32px;
  height: 32px;
  background-image: url(${SendButtonIcon});
  &:hover {
    background-image: url(${SendButtonHoverIcon});
    cursor: pointer;
  }
  ${cover}

  ${({ theme }) => theme.media.phone`
    width: 25px;
    height: 25px;
  `}
`;

const SendRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export {
  GameTicketContainer,
  HeaderSection,
  EventHeadline,
  SentConfirmation,
  ContentSection,
  FullName,
  Email,
  Input,
  SendRow,
  SendButton,
  ErrorMessage,
  SendingButton,
};
