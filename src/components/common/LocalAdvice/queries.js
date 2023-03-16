import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import console from '@utils/console';
import { GET_INTEREST_DATA } from '../../../graphql/queries/interest-data';

const InterestDataQuery = ({ children, interestId, interestType }) => {
  const { loading, error, data } = useQuery(GET_INTEREST_DATA, {
    variables: { interestId, interestType },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, `Error fetching interest data for interest ${interestType} on id ${interestId}`);
  }

  const queryData = get(data, 'interestData', []);

  return children(queryData);
};

export default InterestDataQuery;
