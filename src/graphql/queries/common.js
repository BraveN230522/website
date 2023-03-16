import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import { validateSlugForMapping } from '@utils/routes';
import console from '@utils/console';

const OBJECT_ID_BY_NAME = gql`
  query objectIdByName($name: String!) {
    objectIdByName(name: $name) {
      status
      errorCode
      errorMessage
      data {
        id
        type
      }
    }
  }
`;

const ObjectIdByNameQuery = ({ children, name }) => {
  name = validateSlugForMapping(name);
  const { loading, error, data } = useQuery(OBJECT_ID_BY_NAME, {
    variables: { name },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error('error');
  }

  const queryData = get(data, 'objectIdByName', {});
  return children({
    ...queryData,
  });
};

export default ObjectIdByNameQuery;
