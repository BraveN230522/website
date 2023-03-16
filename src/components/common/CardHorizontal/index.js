import React from 'react';

import { CardHorizontalStyles, CardHorizontalImg, CardBody, CardHorizontalTitle, CardHorizontalInfo } from './styles';

const CardHorizontal = ({ cardData }) => {
  return (
    <CardHorizontalStyles>
      <a href={cardData.link} target="_blank" rel="noopener noreferrer">
        <CardHorizontalImg src={cardData.image} alt={cardData.title} />
        <CardBody>
          <CardHorizontalTitle>{cardData.title}</CardHorizontalTitle>
          {cardData.info && <CardHorizontalInfo>{cardData.info}</CardHorizontalInfo>}
        </CardBody>
      </a>
    </CardHorizontalStyles>
  );
};

export default CardHorizontal;
