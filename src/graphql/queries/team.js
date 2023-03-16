import gql from 'graphql-tag';

export const GET_TEAM_INFO = gql`
  query leagueInfo($teamId: ID!) {
    teamById(id: $teamId) {
      teamID
      teamName
      teamDescription
      photoURL
      primaryLeague {
        cardImageURL
        leagueAbbreviation
        leagueDescription
        leagueId
        leagueName
        photoURL
        sport {
          sportIconURL
        }
      }
      events {
        sportName
        buyTicketsURL
        cityId
        dateTime
        dateTimeStamp
        eventId
        eventName
        eventImage
        headline
        isFuture
        niceWhen
        priceFrom
        sportIcon
        sportName
        sportId
        teamA
        teamB
        timelineItemType
        venueWordpressID
        venueId
        venue {
          venueName
          city {
            cityName
          }
        }
      }
      leagues {
        cardImageURL
        leagueAbbreviation
        leagueDescription
        leagueId
        leagueName
        photoURL
        sport {
          sportIconURL
        }
      }
    }
  }
`;

export const GET_LEAGUE_TEAMS = gql`
  query getleagueTeams($leagueId: Int!) {
    getleagueTeams(leagueId: $leagueId) {
      leagues {
        leagueId
        leagueAbbreviation
        leagueDescription
        leagueID
        leagueName
      }
      sport {
        sportID
        sportIconURL
        sportIconURLV4
        sportName
      }
      logoURL
      teamID
      teamDescription
      teamDescription
      events {
        buyTicketsURL
        cityId
        dateTime
        dateTimeStamp
        eventId
        eventName
        headline
        isFuture
        niceWhen
        priceFrom
        sportIcon
        sportName
        sportid
        teamA
        teamB
        timelineItemType
        venueWordpressID
        venueid
      }
    }
  }
`;
