import React from 'react';
import Icon from '@components/common/Icon';

import {
  PlayersSection,
  PlayersStyles,
  PlayersContainer,
  PlayersFigure,
  PlayersImage,
  PlayersPosition,
  PlayersName,
} from './styles';

const PopularPlayers = ({ data, title, className }) => {
  return (
    <PlayersSection dark title={title} className={className}>
      <PlayersStyles>
        {!!data.length &&
          data.map(item => (
            <PlayersContainer key={item.id}>
              <PlayersFigure>
                <PlayersImage src={item.img} alt={item.name} />
              </PlayersFigure>
              <PlayersPosition>
                5 <Icon name={item.position} />
              </PlayersPosition>
              <PlayersName>{item.name}</PlayersName>
            </PlayersContainer>
          ))}
      </PlayersStyles>
    </PlayersSection>
  );
};

export default PopularPlayers;
