import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import Loader from '@components/Loader';
import console from '@utils/console';
import { GET_NEWS } from '../../../graphql/queries/news';

const NewsQuery = ({ children, interestId, interestType, shouldRefetch, refetchInterestId, refetchInterestType }) => {
  const { loading, error, data, refetch } = useQuery(GET_NEWS, {
    variables: { interestId, interestType },
  });

  // TODO: deal with loading and error
  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error, 'error on league news');
    if (shouldRefetch && refetchInterestId > -1 && refetchInterestType) {
      refetch({
        interestId: refetchInterestId,
        interestType: refetchInterestType,
      });
    }
  }

  const queryData = get(data, 'getNews', []);

  if (queryData?.length === 0 && shouldRefetch && refetchInterestId > -1 && refetchInterestType) {
    refetch({
      interestId: refetchInterestId,
      interestType: refetchInterestType,
    });
  }

  return children(queryData);
};

export { NewsQuery };
