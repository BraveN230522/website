import styled from '@emotion/styled';
import Button from '@components/common/Form/Button';

// NewEventsContainer: restore justify-content to 'space-between' when venue maps are available

const FeaturedEventButton = styled(Button)`
  padding-left: 2px;
  padding-right: 2px;
  height: 39px;
  width: inherit;
  min-width: 134px;
  margin: 1em 0;

  ${({ theme }) =>
    theme.generateBreakpoint(
      314,
      `
    padding-left: 10px;
    padding-right: 10px;
  `
    )}

  ${({ width }) =>
    width &&
    `
      width : ${width}px;
    `};

  ${({ widthPercentage }) =>
    widthPercentage &&
    `
      width : ${widthPercentage};
    `};

  ${({ fontSize }) =>
    fontSize &&
    `
      font-size : ${fontSize}px;
    `};
`;

const NewEventsContainer = styled.div`
  ${({ theme }) => theme.setContainer()};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 30px;

  > div:last-child {
    flex: 1;
    max-width: 467px;
    min-height: 400px;
  }
  > div:last-child section {
    min-height: 400px;
  }

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;

    > div:last-child {
      flex: 1;
      max-width: 467px;
      width: 100%;
    }
  `}
`;

const NewEventsVenueImage = styled.img`
  max-width: min(700px, 95%);
  width: 100%;
`;

const NewEventsSeatMapImage = styled.img`
  width: ${props => props.width || '350px'};
  max-width: 100%;
  margin: 0 50px 0 0;
  @media (max-width: 48em) {
    margin: 0;
  }
`;

const NewEventsFooter = styled.div`
  text-align: center;
`;

// FEATURED EVENTS

const FeaturedEventHeader = styled.div`
  display: flex;
  padding: 0 10%;
  ${({ padding }) =>
    padding &&
    `
    padding:${padding};
  `};
  ${({ direction }) =>
    direction &&
    `
    flex-direction:${direction};
  `};
  ${({ width }) =>
    width &&
    `
    width:${width};
  `};
`;
const FeaturedEventDetails = styled.div`
  width: 25%;
  font-size: 14px;
  ${({ width }) =>
    width &&
    `
    width:${width};
  `};
  > * {
    margin-bottom: 0;
  }
  > p {
    margin-top: 0;
  }
`;
const FeaturedEventIntro = styled.div`
  width: 75%;
  margin-right: 5em;
`;

const FeaturedEventSponsorImage = styled.img`
  display: block;
  max-width: 50%;
  margin: 1em auto;
`;
const FeaturedEventSponsorText = styled.div`
  text-align: center;
  max-width: 50%;
  margin: auto;
`;

const FeaturedEventPackageOptions = styled.div`
  background-color: rgb(229, 229, 229);
  padding: 15px 20%;
  margin: 15px 0;
  display: block;

  ${({ padding }) =>
    padding &&
    `
    padding:${padding};
  `};
`;
const TicketClass = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;

  ${({ direction }) =>
    direction &&
    `
    flex-direction:${direction};
  `};

  ${({ justify }) =>
    justify &&
    `
    justify-content:${justify};
  `};
`;
const TicketClassText = styled.div`
  width: 65%;
  margin-right: 5em;
  ${({ width }) =>
    width &&
    `
    width:${width};
  `};
`;
const TicketClassImage = styled.img`
  width: 35%;
  border-radius: 10%;

  ${({ width }) =>
    width &&
    `
    width:${width};
  `};
`;

const TicketClassContainer = styled.div`
  width: 35%;
  border-radius: 10%;
  height: 250px;

  ${({ width }) =>
    width &&
    `
    width:${width};
  `};

  ${({ src }) =>
    src &&
    `
    background-image:url(${src});
  `};

  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1315px) {
    width: 80%;
  }
`;

const TicketPurchaseConditions = styled.div`
  margin: 0 20%;
`;

export {
  NewEventsContainer,
  NewEventsVenueImage,
  NewEventsSeatMapImage,
  NewEventsFooter,
  FeaturedEventHeader,
  FeaturedEventDetails,
  FeaturedEventIntro,
  FeaturedEventSponsorImage,
  FeaturedEventSponsorText,
  FeaturedEventPackageOptions,
  TicketClass,
  TicketClassImage,
  TicketClassText,
  TicketPurchaseConditions,
  FeaturedEventButton,
  TicketClassContainer,
};
