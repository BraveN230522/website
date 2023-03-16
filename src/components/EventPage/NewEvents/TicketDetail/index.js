import React, { useState } from 'react';

import QuantitySlider from '../QuantitySlider';

import {
  TicketDetailHeader,
  TicketDetailContainer,
  TicketDetailTitle,
  TicketDetailTopic,
  TicketDetailSection,
  TicketDetailInfo,
  TIcketDetailPrice,
  TicketDetailDivider,
  TicketDetailCartButton,
} from './styles';

const TicketDetail = ({ event, loading, onPurchase, ticket }) => {
  const availableTickets = (ticket.attributes.splits && ticket.attributes.splits.split(',')) || [];
  const [selectedQuantity, setSelectedQuantity] = useState(() => {
    if (availableTickets.includes('1')) return 1;
    return 0;
  });

  const handleQuantityClicked = quantity => () => setSelectedQuantity(quantity);

  const { amount } = ticket.price;

  return (
    <>
      <TicketDetailHeader>
        <span>{ticket.name}</span>
        <span>${amount}/ea</span>
      </TicketDetailHeader>

      <TicketDetailContainer>
        <TicketDetailTopic>How many tickets?</TicketDetailTopic>

        {availableTickets.length && (
          <QuantitySlider options={availableTickets} activeItem={selectedQuantity} onClick={handleQuantityClicked} />
        )}

        <TicketDetailDivider />

        <TicketDetailSection direction="row">
          <TicketDetailTitle>
            Estimated Subtotal
            <span>
              {selectedQuantity} @ ${amount}
            </span>
            <span>(Not including fees)</span>
          </TicketDetailTitle>

          <TIcketDetailPrice>${(amount * selectedQuantity).toFixed(2)}</TIcketDetailPrice>
        </TicketDetailSection>

        <TicketDetailCartButton
          disabled={loading || selectedQuantity === 0}
          onClick={onPurchase(ticket, selectedQuantity)}
        >
          Add to Cart
        </TicketDetailCartButton>

        <TicketDetailTopic>Only applicable for event tickets</TicketDetailTopic>

        <TicketDetailSection>
          <TicketDetailTopic>Delivery Method</TicketDetailTopic>
          <TicketDetailInfo>{ticket.attributes.deliveryOpts.toLowerCase()}</TicketDetailInfo>
        </TicketDetailSection>

        <TicketDetailSection>
          <TicketDetailTopic>Event Description</TicketDetailTopic>
          <TicketDetailInfo
            dangerouslySetInnerHTML={{
              __html: event.description || "There's no description available for this event",
            }}
          />
        </TicketDetailSection>

        <TicketDetailSection>
          <TicketDetailTopic>Aditional Notes</TicketDetailTopic>
          <TicketDetailInfo
            dangerouslySetInnerHTML={{
              __html: ticket.attributes.notes || "There's no aditional notes for this ticket",
            }}
          />
        </TicketDetailSection>
      </TicketDetailContainer>
    </>
  );
};

export default TicketDetail;
