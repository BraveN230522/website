import React, { useContext, useState, useEffect } from 'react';
import { SET_HOTEL_CUSTOMER_INFO } from '@graphql/queries/cart';
import { useLazyQuery } from '@apollo/react-hooks';
import CartContext from '@utils/cartContext';
import console from '@utils/console';
import { GuestNameInput, GuestFormError, GuestNameLabel } from './styles';

export default function OrderGuestForm({ qualifiers, itemId }) {
  if (qualifiers === null) return null;
  const { state: cartData } = useContext(CartContext);
  const { dispatch } = useContext(CartContext);
  const childrenCountRegex = /^(?!A).A([0-9]*)C/g;
  const group = childrenCountRegex.exec(qualifiers.counts);
  const lineItem = cartData.lineItems.find(item => item.id === itemId);
  const [guests, setGuests] = useState();
  const guestTypeCounts = {
    adults: parseInt(qualifiers.counts),
    children: group[1],
    ages: qualifiers.ages,
  };
  let nameUpdateReference;

  const onUpdateSuccess = () => {
    lineItem.customerInfo = guests;
    dispatch({ type: 'update-cart', data: cartData });
  };
  const [updateGuests] = useLazyQuery(SET_HOTEL_CUSTOMER_INFO, {
    onCompleted: onUpdateSuccess,
    fetchPolicy: 'no-cache',
  });
  const performUpdate = inputElement => {
    const lineItemForm = inputElement.closest('form');
    const data = new FormData(lineItemForm);
    const guestData = [...data].reduce((result, value, index, source) => {
      if (index % 2 === 0) result.push(source.slice(index, index + 2));
      console.log(result);
      return result;
    }, []);
    const guests = {
      name: `${guestData[0][0][1]} ${guestData[0][1][1]}`,
      type: guestData[0][0][0].indexOf('adult') === 0 ? 'A' : 'C',
      // age: guestData[0][0][0].indexOf('adult') === 0 ? 'A' : 'C',
      more: [],
    };
    guestData.slice(1).forEach(item => {
      guests.more.push({
        name: `${item[0][1]} ${item[1][1]}`,
        type: item[0][0].indexOf('adult') === 0 ? 'A' : 'C',
      });
    });
    setGuests(guests);
    updateGuests({
      variables: {
        cartId: cartData.id,
        lineItemId: itemId,
        guestDetails: JSON.stringify(guests),
      },
    });
  };
  const nameUpdated = e => {
    if (nameUpdateReference !== undefined) clearTimeout(nameUpdateReference);
    const input = e.currentTarget;
    nameUpdateReference = setTimeout(() => performUpdate(input), 2000);
  };
  const lineItemAdults = [];
  const lineItemChildren = [];
  useEffect(() => {
    if (lineItem.customerInfo) {
      if (lineItem.customerInfo.type === 'A')
        lineItemAdults.push({
          name: lineItem.customerInfo.name,
          type: 'A',
        });
      else
        lineItemChildren.push({
          name: lineItem.customerInfo.name,
          type: 'C',
        });
      lineItem.customerInfo.more.forEach(guest => {
        if (guest.type === 'A')
          lineItemAdults.push({
            name: guest.name,
            type: 'A',
          });
        else
          lineItemChildren.push({
            name: guest.name,
            type: 'C',
          });
      });
    }
  }, []);
  return (
    <form key={itemId}>
      <h4>Guest names:</h4>
      <GuestFormError>All guest name fields are required</GuestFormError>
      {Array.from({ length: guestTypeCounts.adults }, (v, index) => (
        <>
          <GuestNameLabel>Adult {index + 1}:</GuestNameLabel>
          <GuestNameInput
            onChange={nameUpdated}
            type="text"
            key={`adult-firstname-${index + 1}`}
            name={`adult-firstname-${index + 1}`}
            value={lineItemAdults.length > 0 ? lineItemAdults[index].name.split(' ')[0] : undefined}
            placeholder="First Name"
          />
          <GuestNameInput
            onChange={nameUpdated}
            type="text"
            key={`adult-lastname-${index + 1}`}
            name={`adult-lastname-${index + 1}`}
            value={lineItemAdults.length > 0 ? lineItemAdults[index].name.split(' ')[1] : undefined}
            placeholder="Last Name"
          />
          <br />
        </>
      ))}
      {Array.from({ length: guestTypeCounts.children }, (v, index) => (
        <>
          <GuestNameLabel>
            Child {index + 1} (age {guestTypeCounts.ages[index]}):
          </GuestNameLabel>
          <GuestNameInput
            onChange={nameUpdated}
            type="text"
            key={`child-firstname-${index + 1}`}
            name={`child-firstname-${index + 1}`}
            value={lineItemChildren.length > 0 ? lineItemChildren[index].name.split(' ')[0] : undefined}
            placeholder="First Name"
          />
          <GuestNameInput
            onChange={nameUpdated}
            type="text"
            key={`child-lastname-${index + 1}`}
            name={`child-lastname-${index + 1}`}
            value={lineItemChildren.length > 0 ? lineItemChildren[index].name.split(' ')[1] : undefined}
            placeholder="Last Name"
          />
          <br />
        </>
      ))}
    </form>
  );
}
