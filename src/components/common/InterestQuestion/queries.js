import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { GET_INTEREST_QUESTIONS } from '../../../graphql/queries/interest-data';

const InterestQuestionsQuery = ({ children, interestId, interestType }) => {
  const { loading, error, data } = useQuery(GET_INTEREST_QUESTIONS, {
    variables: { interestId, interestType },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, `Error fetching interest questions for interest ${interestType} on id ${interestId}`);
  }

  const queryData = get(data, 'interestQuestions', []);

  return children(queryData);
};

export default InterestQuestionsQuery;
