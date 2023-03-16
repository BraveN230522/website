import React from 'react';
import { AnswerStyles, AnswerTitle, AnswerImg, AnswerImgContainer, AnswerDetails } from './styles';

const AnswerCard = ({ title, text, icon }) => {
  return (
    <AnswerStyles>
      <AnswerDetails>{text}</AnswerDetails>
      <AnswerImgContainer>
        <AnswerImg src={icon} />
      </AnswerImgContainer>
    </AnswerStyles>
  );
};

export default AnswerCard;
