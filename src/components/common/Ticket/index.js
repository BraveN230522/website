import Router from 'next/router';
import React from 'react';
import { sendEvent } from '@utils/google-services/gtm';

import {
  TicketStyles,
  TicketFigure,
  TicketSubtitle,
  TicketTitle,
  TicketImage,
  TicketLegend,
  TicketPriceContainer,
  TicketAverage,
} from './styles';

const Ticket = ({ dark, link, image, title, subtitle, price, promo, className, hidePrice }) => {
  const handleTicketClicked = e => {
    e.preventDefault();

    sendEvent('featuredClick', {
      featured: {
        detail: {
          name: title,
          link,
          promo,
          price,
          image,
          subtitle,
        },
      },
    });
    window.location.href = link;

    // Router.push({
    //   pathname: link,
    // });
  };

  return (
    <TicketStyles className={className}>
      <a onClick={handleTicketClicked}>
        <TicketFigure>
          <TicketImage src={image} alt={title} />

          {/* {promo && (
            <TicketLegend>
              <span>{promo}</span>
            </TicketLegend>
          )} */}
        </TicketFigure>
      </a>

      <a onClick={handleTicketClicked}>
        <TicketTitle dark={dark}>{title}</TicketTitle>
        <TicketSubtitle dark={dark}>{subtitle}</TicketSubtitle>
        {!hidePrice && (
          <TicketPriceContainer dark={dark}>
            From <span>${price || 'NA'}</span>
            {/* From <span>${price}</span> <TicketAverage>{average}</TicketAverage> */}
          </TicketPriceContainer>
        )}
      </a>
    </TicketStyles>
  );
};

export default Ticket;
