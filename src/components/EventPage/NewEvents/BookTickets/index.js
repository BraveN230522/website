import React, { useState, useContext } from 'react';
import CartContext from '@utils/cartContext';
import { useLazyQuery } from '@apollo/react-hooks';
import { ADD_PRODUCT_ON_CART } from '@graphql/queries/cart';
import Icon from '@components/common/Icon';
import Router from 'next/router';
import { sendEvent } from '@utils/google-services/gtm';
import console from '@utils/console';
import Ticket from './Ticket';
import TicketDetail from '../TicketDetail';
import { BookTicketBox, BookTicketContainer, BookTicketsHeader } from './styles';
import BookTicketsModal from './BookTicketsModal';
import { applyTicketFilter, sortFilter } from '../TicketFilter/helpers';
import TicketFilter from '../TicketFilter';

const defaultTicket = {
  price: {},
  attributes: {
    splits: '',
    deliveryOpts: '',
  },
};

const BookTickets = ({ event, cartId }) => {
  const { state: cart, dispatch } = useContext(CartContext);
  const [activeTicket, setActiveTicket] = useState(defaultTicket);
  const [tickets, setTickets] = useState(event.variants);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [filter, setFilter] = useState({});

  const [addProductOnCart, { loading, variables }] = useLazyQuery(ADD_PRODUCT_ON_CART, {
    onCompleted: resp => {
      console.info('Add cart response');
      console.info(resp);
      if (!resp?.addProductOnCart) {
        alert('Error while processing your request. Please contact us.');

        localStorage.removeItem('qualifiers');
        dispatch({ type: 'remove-cart-cookie', data: {} });
        return null;
      }

      process.browser &&
        sendEvent('eventAddedToCart', {
          hotelData: {
            detail: variables,
          },
        });

      Router.push({
        pathname: '/checkout',
      });
    },
    fetchPolicy: 'no-cache',
  });

  // useEffect(() => {

  // }, []);

  const handleModalClosed = () => {
    setModalVisibility(false);
    setActiveTicket(defaultTicket);
    setTickets(tickets);
    setFilter({});
  };

  const updateActiveTicket = currentTicket => () => {
    setModalVisibility(true);
    setActiveTicket(currentTicket);
  };

  const handleFilterClicked = () => {
    setModalVisibility(true);
  };

  const handleFilterSaved = newFilter => {
    const newTickets = event.variants.filter(ticket => applyTicketFilter(newFilter, ticket));

    setTickets(sortFilter[newFilter.sortBy](newTickets));
    setFilter(newFilter);
    setModalVisibility(false);
  };

  const handleOnPurchase = (ticket, quantity) => e => {
    e.preventDefault();

    addProductOnCart({
      variables: {
        cartId,
        quantity: parseInt(quantity),
        productId: event.id,
        variantId: ticket.id,
        currency: event.price.currency,
      },
    });
  };

  return (
    <div>
      <BookTicketsHeader as="header" visible={!modalVisibility}>
        <h2>Book Your Tickets</h2>
        <span onClick={handleFilterClicked}>
          <Icon name="filter" />
        </span>
      </BookTicketsHeader>

      <BookTicketContainer>
        <BookTicketsModal visible={modalVisibility} onClose={handleModalClosed}>
          {activeTicket.id ? (
            <TicketDetail loading={loading} event={event} onPurchase={handleOnPurchase} ticket={activeTicket} />
          ) : (
            <TicketFilter visible={modalVisibility} onFilterSave={handleFilterSaved} />
          )}
        </BookTicketsModal>

        <BookTicketBox>
          {tickets?.length > 0 ? (
            tickets.map(currentTicket => (
              <Ticket
                key={currentTicket.id}
                ticket={currentTicket}
                onPriceClicked={updateActiveTicket(currentTicket)}
              />
            ))
          ) : (
            <p>No data matches</p>
          )}
        </BookTicketBox>
      </BookTicketContainer>
    </div>
  );
};

export default BookTickets;
