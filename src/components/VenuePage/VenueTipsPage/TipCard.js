import React from 'react';
import Link from 'next/link';
import { TipStyles, TipTitle, TipImg, TipDetails } from './styles';

const TipCard = ({ title, icon, answers, detailUrl }) => {
  return (
    <Link href={detailUrl}>
      <TipStyles>
        <TipTitle>{title}</TipTitle>
        <TipImg src={icon} />
        {answers && answers.length && <TipDetails>{answers[0].text}</TipDetails>}
      </TipStyles>
    </Link>
  );
};

export default TipCard;
