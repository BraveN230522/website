import { useQuery } from '@apollo/react-hooks';
import { ME } from '@graphql/queries/me';
import console from '@utils/console';

const MeQuery = ({ children }) => {
  const { loading, error, data } = useQuery(ME);

  if (loading) {
    return null;
    // return <div>Loading...</div>;
  }

  if (error) {
    console.warn('Error while loading me data');
    return children({});
  }

  if (!data.me) {
    console.warn('API has returned no me data');
    return children({});
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  return children({
    ...data,
  });
};

export { MeQuery };
