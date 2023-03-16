import React from 'react';
import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';
import { adopt } from 'react-adopt';
import { MerchandiseContainer, Card, TitleContent, Image, Title, Price, AddButton, RightColumn } from './styles';
import { MerchandiseQuery } from '../queries';

const Data = adopt({
  merchandiseData: ({ render, eventId }) => <MerchandiseQuery eventId={eventId}>{render}</MerchandiseQuery>,
});

const MerchandiseSection = ({ eventId }) => {
  const [isMobile] = useDefaultMediaQueries();

  return (
    <Data eventId={eventId}>
      {({ merchandiseData }) => {
        if (merchandiseData.length === 0) return null;
        return (
          <MerchandiseContainer grid columns={4} centered title="Buy merchandise for the game">
            {merchandiseData.map(item => (
              <Card key={item.merchandiseId}>
                <Image src={item.merchandiseImageUrl} />
                <RightColumn>
                  <TitleContent>
                    <Title>{item.description}</Title>
                  </TitleContent>
                  <Price>
                    {item.price.currencyId} ${item.price.amount}
                  </Price>
                  <AddButton
                    href={item.purchaseUrl}
                    target="_blank"
                    as="a"
                    variant="primary"
                    outline
                    leftIcon="plusSign"
                  >
                    Add
                  </AddButton>
                </RightColumn>
              </Card>
            ))}
          </MerchandiseContainer>
        );
      }}
    </Data>
  );
};

export default MerchandiseSection;
