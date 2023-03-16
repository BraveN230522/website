import React, { useCallback, useState } from 'react';
import { adopt } from 'react-adopt';

import Input from '@components/common/Form/Input';
import Button from '@components/common/Form/Button';
import { validateEmail } from '@utils/validations';
import { SubscribeStyles, SubscribeFeedback, SubscribeContainer, SubscribeTitle, SubscribeDetails } from './styles';
import { SubscribeMutation } from './subscribe-mutation';

const defaultFormData = {
  email: {
    value: '',
    error: null,
  },
  fullName: {
    value: '',
    error: null,
  },
};

const SubscribeData = adopt({
  subscribe: ({ render }) => {
    return <SubscribeMutation>{render}</SubscribeMutation>;
  },
});

const Subscribe = () => {
  const [form, setForm] = useState(defaultFormData);

  const handleFormChange = key =>
    useCallback(
      ({ target: { value } }) => {
        setForm({
          ...form,
          success: false,
          [key]: {
            value,
          },
        });
      },
      [form]
    );

  const setError = error => {
    const formData = error.reduce(
      (acc, current) => ({
        ...acc,
        [current[0]]: {
          value: form[current[0]].value,
          error: current[1],
        },
      }),
      {}
    );

    setForm({
      ...form,
      ...formData,
    });
  };

  const handleSubmit = addSubscribe => e => {
    const error = [];
    e.preventDefault();

    if (!form.email.value) {
      error.push(['email', 'Please provide your email!']);
    } else if (!validateEmail(form.email.value)) {
      error.push(['email', 'Please provide a valid email']);
    }

    if (!form.fullName.value) {
      error.push(['fullName', 'Please provide your full name!']);
    }

    if (error.length) return setError(error);

    addSubscribe({
      variables: {
        email: form.email.value,
        fullName: form.fullName.value,
      },
    }).then(({ data: { addSubscribe } }) => addSubscribe && setForm({ ...defaultFormData, success: true }));
  };

  return (
    <SubscribeData>
      {({
        subscribe: {
          addSubscribe,
          status: { loading, error },
        },
      }) => {
        return (
          <SubscribeStyles>
            <SubscribeContainer>
              <SubscribeTitle>Get 5% off your first booking</SubscribeTitle>
              <SubscribeDetails>
                Sign up to our email list to make sure your next trip is a memorable one.
              </SubscribeDetails>
              <form onSubmit={handleSubmit(addSubscribe)}>
                <Input
                  type="text"
                  onChange={handleFormChange('fullName')}
                  error={form.fullName.error}
                  value={form.fullName.value}
                  placeholder="Full Name"
                />
                <Input
                  type="email"
                  onChange={handleFormChange('email')}
                  error={form.email.error}
                  value={form.email.value}
                  placeholder="Email"
                />
                <Button variant="secondary" type="submit" disabled={loading}>
                  Subscribe
                </Button>
              </form>

              {!!form.success && (
                <SubscribeFeedback>
                  Thanks for signing up! You will receive a welcome email from us shortly.
                </SubscribeFeedback>
              )}

              {error && (
                <SubscribeFeedback error>
                  Oops, we had some problems processing your request, please try again later or contact us by email.
                </SubscribeFeedback>
              )}
            </SubscribeContainer>
          </SubscribeStyles>
        );
      }}
    </SubscribeData>
  );
};

export default Subscribe;
