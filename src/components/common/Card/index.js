import React from 'react';

import Button from '@components/common/Form/Button';
import { CardStyles, CardImg, CardBody, CardTitle, CardDate, CardLocal, CardPriceWrapper } from './styles';

const Card = ({ card, className, dark, variantButton, onActionButtonClick }) => {
  return (
    <CardStyles className={className} aria-label="card" dark={dark}>
      <CardImg src={card.image} />
      <CardBody>
        <CardTitle dark={dark}>{card.title}</CardTitle>
        <CardDate dark={dark}>{card.date}</CardDate>
        <CardLocal dark={dark}>{card.local}</CardLocal>
        {/* <CardPriceWrapper dark={dark}>
          <span>From</span> ${Math.floor(card.price)}
        </CardPriceWrapper> */}

        <Button size="sm" outline variant={variantButton} onClick={onActionButtonClick}>
          Get Tickets
        </Button>
      </CardBody>
    </CardStyles>
  );
};

export default Card;
