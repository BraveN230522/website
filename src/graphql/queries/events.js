import gql from 'graphql-tag';

export const GET_EVENTS = gql`
  query getEvents {
    allExperiences {
      eventDateTime
      eventID
      eventImage
      eventName
      fromPrice {
        amount
      }
      venue {
        city {
          cityName
          country {
            countryID
            countryName
          }
        }
        venueImage
        venueName
      }
      league {
        cardImageURL
        sport {
          sportIconURLV4
        }
      }
    }
    allPopularEvents {
      eventDateTime
      eventID
      eventImage
      eventName
      fromPrice {
        amount
      }
      venue {
        city {
          cityName
          country {
            countryID
            countryName
          }
        }
        venueImage
        venueName
      }
      league {
        cardImageURL
        sport {
          sportIconURLV4
        }
      }
    }
  }
`;

export const GET_EVENT_BY_ID = gql`
  query eventById($eventId: String!) {
    eventById(eventId: $eventId) {
      eventid
      headline
      dateTime
      cityid
      leagueid
      teamA
      teamB
      venue {
        venueName
        venueImage
        venueAddress
        city {
          cityName
          country {
            countryName
          }
        }
      }
      cityData {
        city {
          cityName
        }
        name
      }
      moreEventData {
        eventID
        eventImage
        eventTicketingUrl
        fromPrice {
          amount
          currencyId
        }
        venue {
          venueImage
        }
        featuredEvent
        featuredData {
          featuredImages
          introductionTag
          introductionBody
          ticketClasses {
            ticketClassDescription
            ticketClassImage
          }
          sponsorImage
          sponsorDescription
          ticketPurchaseConditions
          extraText1Tag
          extraText1Body
          extraText2Tag
          extraText2Body
          extraText3Tag
          extraText3Body
        }
      }
      league {
        leagueName
        leagueId
        events {
          eventName
          dateTime
          priceFrom
          eventImage
        }
      }
    }
  }
`;

export const GET_EVENTS_NEARBY_CITY_ID = gql`
  query nearbyEventsByCityId($cityId: Int!) {
    nearbyEventsByCityId(cityId: $cityId) {
      eventID
      eventName
      eventDateTime
      eventImage
      venue {
        venueName
        venueImage
        venueAddress
        city {
          cityName
          country {
            countryName
          }
        }
      }
      league {
        leagueName
        sport {
          sportName
        }
      }
      teams {
        teamName
      }
      fromPrice {
        currencyId
        amount
      }
    }
  }
`;
