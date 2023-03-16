import React, { useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { useAuthentication } from '@components/Authentication/useAuthentication';
import { emailPattern } from '@utils/validations';

import InputPhoneMask from '@components/common/Form/InputPhoneMask';

import UserContext from '@utils/userContext';

import {
  UserDetailsStyles,
  Text,
  LinkLogin,
  UserDetailsInlineForm,
  UserDetailsInput,
  UserDetailsButtonBack,
  UserDetailsButtonContinue,
} from './styles';

const requiredField = 'This is a required field';

const UserDetails = ({ className, charges, title, afterSubmit }) => {
  const { state: user } = useContext(UserContext);

  const { control, register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    // asynchronously reset your form values:
    // user can be an empty object while rendering
    if (user.id) {
      const initialValues = { firstName: user.firstName, surname: user.surname, email: user.email };
      reset(initialValues);
    }
  }, [reset, user]);

  const { verifyAuthenticationControl } = useAuthentication();

  const onAuthenticating = () => {
    verifyAuthenticationControl(true);
  };

  return (
    <UserDetailsStyles className={className} title={title}>
      {!user.id && (
        <Text>
          Have an account?
          <LinkLogin onClick={onAuthenticating}> Log In</LinkLogin>
        </Text>
      )}
      <form onSubmit={handleSubmit(afterSubmit)}>
        <UserDetailsInlineForm>
          <UserDetailsInput
            type="text"
            placeholder="First Name"
            light
            name="firstName"
            ref={register({ required: true })}
            error={errors.firstName && requiredField}
          />
          <UserDetailsInput
            type="text"
            light
            name="surname"
            ref={register({ required: true })}
            placeholder="Last Name"
            error={errors.surname && requiredField}
          />
        </UserDetailsInlineForm>
        <UserDetailsInput
          type="text"
          light
          advice="Your ticket confirmation will be sent to your email."
          placeholder="Email Address"
          name="email"
          ref={register({
            required: true,
            pattern: emailPattern,
          })}
          error={errors.email && 'Please provide a valid email'}
        />

        <Controller
          as={<InputPhoneMask error={errors.phone && 'Please provide a valid phone number'} />}
          name="phone"
          rules={{ required: true }}
          control={control}
          defaultValue=""
        />

        <UserDetailsInlineForm>
          <UserDetailsButtonBack as="a" href="/" outline variant="dark">
            Back
          </UserDetailsButtonBack>
          <UserDetailsButtonContinue type="submit" disabled={!charges.length}>
            Continue to Payment
          </UserDetailsButtonContinue>
        </UserDetailsInlineForm>
      </form>
    </UserDetailsStyles>
  );
};

export default UserDetails;
