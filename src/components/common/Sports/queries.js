import { GET_SPORTS } from '@graphql/queries/sports';
import { useQuery } from '@apollo/react-hooks';

const SportsQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_SPORTS);

  if (loading) {
    return null;
    // return <div>Loading...</div>;
  }

  if (error || !data.allSports) {
    const msg = `Error loading sports`;
    // here set global error state (with useContext or return a toast notification or other error component
    return <div>{msg}</div>;
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  return children({
    ...data,
  });
};

export { SportsQuery };
