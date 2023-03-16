import React, { useState } from 'react';

import { EticketIcon, EticketText } from './styles';

const Eticket = ({ data, numberOfItems, afterRemoveClick }) => {
  const [removing, setRemoving] = useState();

  const handleRemoveClick = e => {
    if (removing) return;

    setRemoving(true);
    afterRemoveClick(data.lineItemId, data.qualifiers);
  };

  return (
    <>
      {/* <EticketText>
        {data.selectedVariant.description}
        <br />
        {data.seats}
      </EticketText> */}

      <EticketText flex>
        {numberOfItems} x {data.selectedVariant.price.currency} ${data.selectedVariant.price.amount.toFixed(2)}
        <span onClick={handleRemoveClick}>
          <EticketIcon name="close" />
        </span>
      </EticketText>
    </>
  );
};

export default Eticket;
