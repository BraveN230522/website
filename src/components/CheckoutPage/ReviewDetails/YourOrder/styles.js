import styled from '@emotion/styled';
import Ticket from '@components/common/Ticket';

import Accordion from '../../Common/Accordion';
import CheckoutSection from '../../Common/CheckoutSection';

const OrderHeader = styled(CheckoutSection)`
  article {
    flex-direction: column;

    > div {
      margin-bottom: 17px;
      padding-bottom: 17px;
      border-bottom: solid 2px #d1d1d1;
    }
  }

  ${({ theme }) => theme.media.phone`
    margin-bottom: 7px;
  `}
`;

const OrderContainerImg = styled.div`
  display: flex;
  max-width: 254px;
  width: 100%;

  ${({ theme }) => theme.media.tablet`
    align-self: flex-start;
    justify-content: flex-end;
    max-width: unset;
    order: 1;
    width: 50%;
  `}
`;

const OrderImg = styled.img`
  border-radius: 8px;
  height: 140px;
  width: 224px;

  ${({ theme }) => theme.media.tablet`
    height: 118px;
    width: 118px;
  `}
`;

const OrderContainerDetails = styled.div`
  display: grid;
  grid-template-columns: 482px 1fr auto;
  width: 100%;
  grid-column-gap: 30px;

  ${({ theme }) => theme.media.tablet`
    order: 0;
  `}

  ${({ theme }) => theme.media.phone`
    grid-template-columns: 100%;
  `}
`;

const OrderGameTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.16px;
  margin: 0;

  ${({ theme }) => theme.media.tablet`
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.12px;
  `}

  ${({ theme }) => theme.media.phone`
    width: 100%;
  `}
`;

const HotelSection = styled.div`
  margin-top: 43px;

  article > div {
    border: none;
  }
`;

const OrderTime = styled.div`
  margin-top: 17px;
  display: flex;

  p {
    margin: 0 0 8px 8px;
  }

  ${({ theme }) => theme.media.tablet`
    svg > path:first-of-type{
      fill: black;
    }
  `}
`;

const OrderLocalContainer = styled.div`
  display: flex;

  svg {
    margin-left: 4px;
  }

  ${({ theme }) => theme.media.tablet`
    svg > path:first-of-type{
      fill: black;
    }
  `}
`;

const OrderLocal = styled.div`
  margin-left: 8px;

  p:first-of-type {
    margin: 0 0 1px 0;
  }

  p:last-of-type {
    margin: 0;
    opacity: 0.5;
  }
`;

const OrderText = styled.p`
  color: ${({ theme }) => theme.colors.charcoal};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.11px;
  margin: 0;

  ${({ theme }) => theme.media.tablet`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.08px;
  `}
`;

const OrderFooterText = styled(OrderText)`
  font-size: 12px;
  i {
    display: block;
    padding-bottom: 10px;
  }
`;

const getCommonButton = `
  background: none;
  border: none;
  cursor: pointer;
  height: 58%;
  outline: none;
  position: absolute;
  top: 28%;
  transform: translateY(-50%);
  z-index: 1;
`;

const OrderAccordion = styled(Accordion)`
  header {
    border: solid 2px #979797;
    border-radius: 30px;
    padding-left: 14px;
    margin-bottom: 36px;

    svg {
      transform: scale(0.85);
    }

    h1 {
      font-size: 17px;
      font-weight: 600;
    }
  }

  article {
    align-items: center;
    display: flex;

    div.BrainhubCarousel__container {
      height: 210px;
    }

    div.BrainhubCarousel {
      position: relative;
    }

    button.BrainhubCarousel__arrows.BrainhubCarousel__arrowLeft {
      ${getCommonButton};
      left: 0;
    }

    button.BrainhubCarousel__arrows.BrainhubCarousel__arrowRight {
      ${getCommonButton};
      right: 0;
    }

    ul > li.BrainhubCarouselItem {
      margin-right: 24px;
    }

    ${({ theme }) => theme.media.phone`
      display: none;
    `}

    ul,
    li {
      align-items: flex-start;
    }
  }
`;

const OrderOffers = styled(Ticket)`
  max-width: unset;
  margin-bottom: 2rem;
  min-width: 225px;
`;

const OrderSection = styled.div`
  padding-bottom: 27px;
  border-bottom: solid 2px #d1d1d1;
  margin-bottom: 27px;

  ${({ bordered }) =>
    bordered &&
    `
    padding-top: 27px;
    border-top: solid 2px #d1d1d1;
  `}

  ${({ bigPadding }) =>
    bigPadding &&
    `
    padding-top: 52px;
    padding-bottom: 52px;
  `}

  > p, article {
    margin-bottom: 0;
  }
`;

const TextErrorTotal = styled.p`
  color: red;
`;

export {
  OrderHeader,
  OrderSection,
  OrderContainerImg,
  OrderContainerDetails,
  OrderImg,
  OrderGameTitle,
  OrderTime,
  OrderLocalContainer,
  OrderLocal,
  OrderText,
  OrderFooterText,
  OrderAccordion,
  OrderOffers,
  HotelSection,
  TextErrorTotal,
};
