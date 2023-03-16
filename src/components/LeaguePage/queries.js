import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import {
  GET_LEAGUE_INFO,
  GET_LEAGUE_VIDEOS,
  GET_LEAGUE_TEAMS,
  GET_CONTENT_DASHBOARD,
  GET_CONTENT_CAROUSEL,
} from '@graphql/queries/league';
import console from '@utils/console';
import { GET_NEWS } from '../../graphql/queries/news';

const LeagueQuery = ({ children, leagueId }) => {
  const { loading, error, data } = useQuery(GET_LEAGUE_INFO, {
    variables: { leagueId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, 'error on league');
  }

  const queryData = (data && data.leagueInfo) || '';

  return children({
    ...queryData,
  });
};

const LeagueVideosQuery = ({ children, leagueId }) => {
  const { loading, error, data } = useQuery(GET_LEAGUE_VIDEOS, {
    variables: { leagueId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, 'error on league videos');
  }

  const queryData = get(data, 'getleagueVideos', {});

  return children(queryData);
};

const LeagueTeamsQuery = ({ children, leagueId }) => {
  const { loading, error, data } = useQuery(GET_LEAGUE_TEAMS, {
    variables: { leagueId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, 'error on league teams');
  }

  const queryData = get(data, 'getleagueTeams', []);

  return children(queryData);
};

const LeagueNewsQuery = ({ children, interestId, interestType }) => {
  const { loading, error, data } = useQuery(GET_NEWS, {
    variables: { interestId, interestType },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, 'error on league news');
  }

  const queryData = get(data, 'getNews', []);

  return children(queryData);
};

const DashboardQuery = ({ children, interestId, interestType }) => {
  const { loading, error, data } = useQuery(GET_CONTENT_DASHBOARD, {
    variables: { interestId, interestType },
  });
  if (loading) console.info('loading');
  if (error) console.error('Error in Content Dashboard Query', error);
  const queryData = get(data, 'contentDashboard', {});
  return children(queryData);
};

const CarouselQuery = ({ children, interestId, interestType }) => {
  const { loading, error, data } = useQuery(GET_CONTENT_CAROUSEL, {
    variables: { interestId, interestType },
  });
  if (loading) console.info('loading');
  if (error) console.error('Error in Content Carousel Query', error);
  const queryData = get(data, 'contentCarousel', {});
  return children(queryData);
};

export { LeagueQuery, LeagueVideosQuery, LeagueTeamsQuery, LeagueNewsQuery, DashboardQuery, CarouselQuery };
