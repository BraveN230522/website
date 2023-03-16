import React, { useState, useEffect, useContext } from 'react';
import CartContext from '@utils/cartContext';
import { CREATE_CART_ID, SET_CART_PROMO_CODES } from '@graphql/queries/cart';
import { useForm } from 'react-hook-form';
import getSymbolFromCurrency from 'currency-symbol-map';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import { PAY_NOW_QUERY } from '@graphql/queries/stripe';
import console from '@utils/console';

import { useElements, useStripe, CardNumberElement } from '@stripe/react-stripe-js';

import Loading from '@components/common/Loading';
import Link from 'next/link';
import CreditCard from './CreditCard';
import DeliveryDetails from './DeliveryDetails';
import TotalPrice from '../Common/TotalPrice';
import { DiscountContainer, PromoCodeError } from '../ReviewDetails/YourOrder/GrandTotal/styles';
import GrandTotal from '../ReviewDetails/YourOrder/GrandTotal';

import {
  PaymentForm,
  PaymentSection,
  PaymentInlineForm,
  PaymentButtonBack,
  PaymentButtonContinue,
  PaymentErrorText,
} from './styles';

const formatDeliveryAddressRequest = deliveryForm =>
  JSON.stringify({
    billing: {
      ...deliveryForm.billing,
      country: {
        name: deliveryForm.billing?.country,
        code: deliveryForm.billing?.country,
      },
    },
    international: {
      ...deliveryForm.international,
      country: {
        name: deliveryForm.international?.country,
        code: deliveryForm.international?.country,
      },
    },
    local: {
      ...deliveryForm.local,
      country: {
        name: deliveryForm.local?.country,
      },
    },
  });

const Payment = ({ afterSubmit, onBackClick, formData, cartData }) => {
  const { state: cart, dispatch } = useContext(CartContext);
  const [paymentError, setPaymentError] = useState();
  const [displayPaymentLoading, setDisplayPaymentLoading] = useState(false);
  const [promoCodeError, setPromoCodeError] = useState();
  const lineItems = get(cartData, 'lineItems', []);
  const charges = get(cartData, 'charges', []);
  const router = useRouter();

  useEffect(() => {
    if (displayPaymentLoading === true) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [displayPaymentLoading]);

  const handleError = err => {
    console.log(err);
    setPaymentError(err);
    setDisplayPaymentLoading(false);
    // createCartId();
  };

  const [payNow, { loading: submittingPayment, data: paymentResult }] = useLazyQuery(PAY_NOW_QUERY, {
    onCompleted: ({ payNow }) => {
      if (!payNow) return handleError('There was an error when processing your payment');
      console.log({ cartData });
      const { email, firstName, surname, phone } = formData.personalInfo;
      const eventIdItems = cartData.lineItems
        .filter(item => item.product.type === 'EVENT')
        .sort((a, b) => new Date(a.product.localDateTime) - new Date(b.product.localDateTime));
      console.log({ eventIdItems });
      const eventId = eventIdItems.length > 0 && eventIdItems[0].eventId;

      router.push({
        pathname: `/thank-you/${cartData.id}`,
        query: {
          email,
          fullName: `${firstName} ${surname}`,
          eventId,
          eventIdItems: JSON.stringify(eventIdItems),
          cartData: JSON.stringify(cartData),
        },
      });
    },
    onError: handleError,
  });

  const [updateCartPromoCodes, { variables: vars }] = useLazyQuery(SET_CART_PROMO_CODES, {
    onCompleted: args => {
      const { promoCodes: cart } = args;
      // populate promo code error if applicable
      if (!cart) return setPromoCodeError(`INVALID CODE: ${vars.promoCodes[0]}`);
      setPromoCodeError();
      dispatch({ type: 'set-cart-cookie', data: cart });
      // updateCart(cart);
    },
    fetchPolicy: 'no-cache',
  });

  const stripe = useStripe();
  const elements = useElements();
  const { errors, handleSubmit, getValues, register, setValue } = useForm();

  const sendStripeRequest = async deliveryForm => {
    setDisplayPaymentLoading(true);
    const cardElement = elements.getElement(CardNumberElement);
    const { email, firstName, surname, phone } = formData.personalInfo;

    const { error, token } = await stripe.createToken(cardElement);
    if (error) {
      console.log(error);
      return handleError('Error while processing your payment');
    }

    // remove hotel line items shipping options placeholder array
    cartData.lineItems.map(item => {
      if (item.shippingOptions.length === 0) delete item.shippingOptions;
      return item;
    });

    // ticket types are not customisable, use the types from line items and include hotels
    const ticketTypes = cartData.lineItems.map(item => (item.shippingOptions ? item.shippingOptions[0].id : undefined));

    if (token.id) {
      payNow({
        variables: {
          email,
          firstName,
          lastName: surname,
          phone,
          cardholderName: deliveryForm.cardholderName,
          deliveryAdress: formatDeliveryAddressRequest(deliveryForm),
          cartId: cartData.id,
          currency: cartData.total.currency,
          amount: cartData.total.amount,
          transactionToken: token.id,
          typeTickets: ticketTypes,
          lineItems: JSON.stringify(cartData.lineItems),
        },
      });
    }

    afterSubmit({ ...deliveryForm, token });
  };

  console.log('------------------');
  console.log('cartData is');
  console.log(cartData);
  console.log('------------------');

  console.log('------------------');
  console.log('charges are');
  console.log(charges);
  console.log('------------------');

  return (
    <PaymentForm onSubmit={handleSubmit(sendStripeRequest)}>
      <CreditCard errors={errors} register={register} title="Payment Details" />
      <DeliveryDetails
        tickets={cartData.lineItems}
        errors={errors}
        setFieldValue={setValue}
        getFormValue={getValues}
        formData={formData}
        register={register}
        title="Delivery Details"
      />
      {charges.length > 0 && (
        <GrandTotal
          isOrderTotal
          items={lineItems}
          fee={charges[charges.length - 1]}
          discounts={charges.slice(3)}
          promoCodes={cartData.promoCodes}
          setPromoCodes={updateCartPromoCodes}
          cartId={cartData.id}
          promoCodeError={promoCodeError}
          total={cartData.total}
        />
        // <PaymentSection title="Order Total">
        //   <TotalPrice
        //     withDetails
        //     label="Total for your tickets"
        //     charges={charges}
        //     fee={charges[2]}
        //     items={cartData.lineItems}
        //     numberOfItems={lineItems.length}
        //   />
        // </PaymentSection>
      )}

      {Boolean(paymentError) && <PaymentErrorText>{paymentError}</PaymentErrorText>}

      <p>
        By clicking "Pay Now" you agree to our{' '}
        <Link href="/ticket-purchase">
          <a>Ticket Purchase Terms and Conditions</a>
        </Link>
      </p>

      <PaymentInlineForm>
        <PaymentButtonBack onClick={onBackClick} outline variant="dark">
          Back
        </PaymentButtonBack>
        <PaymentButtonContinue disabled={submittingPayment} type="submit">
          {submittingPayment ? 'Paying' : 'Pay Now'}
        </PaymentButtonContinue>
      </PaymentInlineForm>
      <Loading visible={displayPaymentLoading} />
    </PaymentForm>
  );
};

export default Payment;
