import gql from 'graphql-tag';

export const GET_LEAGUE_INFO = gql`
  query leagueInfo($leagueId: Int!) {
    leagueInfo(leagueId: $leagueId) {
      leagueId
      leagueName
      leagueDescription
      leagueAbbreviation
      photoURL
      cardImageURL
      events {
        venue {
          venueName
          city {
            cityName
          }
        }
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
        venueid
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
        leagueName
      }
      sport {
        sportID
        sportIconURL
        sportIconURLV4
        sportName
      }
      logoURL
      photoURL
      teamID
      teamName
      teamDescription
      events {
        venue {
          venueName
          city {
            cityName
          }
        }
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
        sportId
        teamA
        teamB
        timelineItemType
        venueWordpressID
        venueid
      }
    }
  }
`;

export const GET_LEAGUE_VIDEOS = gql`
  query getLeagueVideos($leagueId: Int!) {
    getleagueVideos(leagueId: $leagueId) {
      title
      imageAspect
      imageURL
      interestTagging {
        cityId
        homepage
        leagueId
        teamId
        venueId
      }
      videoID
      videoURL
    }
  }
`;

export const GET_TOP_LEAGUES = gql`
  query topLeagues {
    topLeagues {
      leagueId
      cardImageURL
      leagueName
      leagueAbbreviation
      sport {
        sportID
        sportName
      }
    }
  }
`;

export const GET_LEAGUES_BY_CITY_ID = gql`
  query leaguesByCityId($cityId: Int!) {
    leaguesByCityId(cityId: $cityId) {
      leagueId
      cardImageURL
      leagueName
      leagueAbbreviation
      sport {
        sportID
        sportName
      }
    }
  }
`;

export const GET_CONTENT_DASHBOARD = gql`
  query contentDashboard($interestId: Int!, $interestType: String!) {
    contentDashboard(interestId: $interestId, interestType: $interestType) {
      id
      imageAspect
      imageURL
      interestTagging {
        cityId
        homepage
        leagueId
        teamId
        venueId
      }
      objectType
      postDate
      title
      videoID
      videoURL
      videoType
      summary
      link
    }
  }
`;

export const GET_CONTENT_CAROUSEL = gql`
  query contentCarousel($interestId: Int!, $interestType: String!) {
    contentCarousel(interestId: $interestId, interestType: $interestType) {
      id
      imageAspect
      imageURL
      interestTagging {
        cityId
        homepage
        leagueId
        teamId
        venueId
      }
      objectType
      postDate
      title
      videoID
      videoURL
      videoType
      summary
      link
    }
  }
`;
