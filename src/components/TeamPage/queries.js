import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import console from '@utils/console';
import { GET_NEWS } from '../../graphql/queries/news';
import { GET_TEAM_INFO } from '../../graphql/queries/team';

const TeamQuery = ({ children, teamId }) => {
  const { loading, error, data } = useQuery(GET_TEAM_INFO, {
    variables: { teamId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, 'error on league');
  }

  const queryData = (data && data.teamById) || null;

  return children({
    ...queryData,
  });
};

const TeamNewsQuery = ({ children, interestId, interestType }) => {
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

export { TeamQuery, TeamNewsQuery };
