import React from 'react';

import YourOrder from './YourOrder';
import UserDetailsForm from './UserDetailsForm';

// TODO: remove all this mocked data
import { mockOrder } from '../mocks';

const ReviewDetails = ({ afterSubmit, updateCart, formData, cartData = {}, qualifiers, setQualifiers }) => {
  return (
    <>
      <YourOrder
        data={mockOrder}
        updateCart={updateCart}
        cartData={cartData}
        title="Tickets"
        qualifiers={qualifiers}
        setQualifiers={setQualifiers}
      />

      <UserDetailsForm
        title="Your Details"
        charges={cartData?.charges || []}
        formData={formData}
        afterSubmit={afterSubmit}
      />
    </>
  );
};

export default ReviewDetails;
