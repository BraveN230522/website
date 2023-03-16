import React from 'react';

import { TicketContainer, TicketItem, TicketDescription, TicketTextContainer, TicketButton } from './styles';

const Ticket = ({ ticket, onPriceClicked }) => {
  return (
    <TicketContainer>
      <TicketTextContainer>
        <TicketItem>{ticket.name}</TicketItem>
        <TicketDescription>
          {ticket.attributes.row !== 'n/a' && `Row ${ticket.attributes.row} - `}
          {ticket.description}
        </TicketDescription>
      </TicketTextContainer>

      <TicketButton onClick={onPriceClicked} outline>
        ${ticket.price.amount} each
      </TicketButton>
    </TicketContainer>
  );
};

export default Ticket;
