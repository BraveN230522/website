import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useLazyQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { SEND_TICKET_CONFIRMATION } from '@graphql/queries/tickets';
import console from '@utils/console';

import {
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
} from './styles';

const GameTicket = ({ bookingId, headline, ticket, mergeData }) => {
  const [sendTicketConfirmation, { loading: submitting, error: sendError, data: sendData }] = useLazyQuery(
    SEND_TICKET_CONFIRMATION
  );
  const [serverError, setServerError] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async e => {
    e.preventDefault();
    console.info('MERGE DATA', mergeData ? JSON.stringify(mergeData) : '{}');
    handleSubmit(data => {
      sendTicketConfirmation({
        variables: {
          bookingId,
          fullName: data.fullName,
          email: data.email,
          mergeData: mergeData ? JSON.stringify(mergeData) : '{}',
        },
      });
    })(e);
  };

  useEffect(() => {
    if (sendError) {
      console.error('sendError', sendError);
      setServerError('Something went wrong. Please try again later.');
    }
  }, [sendError]);

  const fullName = get(sendData, 'sendTicketConfirmation.fullName') || ticket.fullName;
  const email = get(sendData, 'sendTicketConfirmation.email') || ticket.email;
  const hasSent = get(sendData, 'sendTicketConfirmation.hasSent') || !!(ticket.fullName && ticket.email);

  const onChange = useCallback(() => {
    setServerError(null);
  }, []);

  const HandleError = useCallback(() => {
    if (errors.fullName) {
      return <ErrorMessage>Full Name is required.</ErrorMessage>;
    }

    if (errors.email) {
      return <ErrorMessage>Provide a valid email.</ErrorMessage>;
    }

    if (serverError) {
      return <ErrorMessage>{serverError}</ErrorMessage>;
    }

    return null;
  }, [serverError, errors]);

  return (
    <GameTicketContainer sent={hasSent}>
      <HeaderSection>
        <EventHeadline>{headline}</EventHeadline>
        {hasSent && <SentConfirmation />}
      </HeaderSection>
      <ContentSection>
        {hasSent ? (
          <>
            <FullName>{fullName}</FullName>
            <Email>{email}</Email>
          </>
        ) : (
          <>
            <Input
              name="fullName"
              placeholder="Full Name"
              type="text"
              ref={register({
                required: true,
              })}
              ariaLabel="full-name-input"
              onChange={onChange}
            />
            <SendRow>
              <Input
                name="email"
                placeholder="Email Address"
                type="text"
                ref={register({
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/i,
                })}
                ariaLabel="email-address-input"
                onChange={onChange}
                small
              />
              {submitting ? <SendingButton /> : <SendButton onClick={onSubmit} />}
            </SendRow>
            {HandleError()}
          </>
        )}
      </ContentSection>
    </GameTicketContainer>
  );
};

export default GameTicket;
