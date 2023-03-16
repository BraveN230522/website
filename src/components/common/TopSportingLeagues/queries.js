import { GET_TOP_LEAGUES } from '@graphql/queries/league';
import { useQuery } from '@apollo/react-hooks';

const TopLeaguesQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_TOP_LEAGUES);

  if (loading) {
    return null;
    // return <div>Loading...</div>;
  }

  if (error) {
    const msg = `Error loading top sporting leagues`;
    // here set global error state (with useContext or return a toast notification or other error component
    return <div>{msg}</div>;
  }

  if (!data.topLeagues) {
    data.topLeagues = [];
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  return children(data?.topLeagues);
};

export default TopLeaguesQuery;
