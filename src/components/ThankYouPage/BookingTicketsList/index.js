import React from 'react';

import GameTicket from '@components/common/GameTicket';
import useWindowSize from '@utils/hooks/useWindowSize';

import { Container, Title, HorizontalScrollingContainer } from './styles';

const BookingTicketsList = ({ bookingId, headline, tickets, mergeData }) => {
  const { width } = useWindowSize();
  return (
    <Container width={width}>
      <Title>Add your crew now</Title>
      <HorizontalScrollingContainer>
        {tickets.map(ticket => (
          <GameTicket key={ticket.id} bookingId={bookingId} headline={headline} ticket={ticket} mergeData={mergeData} />
        ))}
      </HorizontalScrollingContainer>
    </Container>
  );
};

export default BookingTicketsList;
