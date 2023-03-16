import React, { useState, useLayoutEffect } from 'react';

import console from '@utils/console';
import { CheckoutHeader } from './styles';

import Steps from './Steps';
import ReviewDetails from './ReviewDetails';
import Payment from './Payment';

const CheckoutForm = ({ initialCartData, qualifiers, setQualifiers }) => {
  // filter failed items out of line items
  initialCartData.lineItems = initialCartData.lineItems.filter(item => item.status !== 'FAILED');

  const [cartData, setCartData] = useState(initialCartData);
  const [step, setStep] = useState(0);
  const [checkoutForm, setCheckoutForm] = useState();

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useLayoutEffect(() => {
    moveToTop();
    return () => moveToTop();
  }, []);

  const onBackClick = e => {
    e.preventDefault();
    moveToTop();
    setStep(step - 1);
  };

  const changeCheckoutForm = key => formData => {
    // validate the separate guest names form
    const guestNameFields = document.querySelectorAll('input[name^="adult-"],input[name^="child-"]');
    let continueSubmit = true;
    guestNameFields.forEach(field => {
      if (field.value === '') {
        field
          .closest('form')
          .querySelector('div')
          .classList.add('show');
        continueSubmit = false;
        window.scrollTo({ top: field.closest('form').getBoundingClientRect().top });
      }
    });

    if (!continueSubmit) return;

    const form = {
      ...checkoutForm,
      [key]: formData,
    };
    console.log('===== CHANGE CHECKOUT FORM =====');
    console.log(form);
    if (step === 0) moveToTop();

    setCheckoutForm(form);

    if (step === 0) return setStep(step + 1);
  };

  const getSteps = cartData => [
    {
      label: 'Checkout',
      renderContent: (
        <ReviewDetails
          updateCart={setCartData}
          cartData={cartData}
          afterSubmit={changeCheckoutForm('personalInfo')}
          qualifiers={qualifiers}
          setQualifiers={setQualifiers}
        />
      ),
    },
    {
      label: 'Payment',
      renderContent: (
        <Payment
          cartData={cartData}
          formData={checkoutForm}
          afterSubmit={changeCheckoutForm('deliveryInfo')}
          onBackClick={onBackClick}
        />
      ),
    },
    {
      label: 'Your Tickets',
      renderContent: () => 'asd',
    },
  ];

  return (
    <>
      <CheckoutHeader withMenu cartData={cartData} mobileTitle="Checkout" backText="Back" short />

      <Steps data={getSteps(cartData)} currentStep={step} />
    </>
  );
};

export default CheckoutForm;
