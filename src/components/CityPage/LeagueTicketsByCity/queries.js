import { GET_LEAGUES_BY_CITY_ID } from '@graphql/queries/league';
import { useQuery } from '@apollo/react-hooks';

const TicketsByLeagueQuery = ({ children, cityId }) => {
  const { loading, error, data } = useQuery(GET_LEAGUES_BY_CITY_ID, {
    variables: { cityId },
  });

  if (loading) {
    // return <div>Loading...</div>;
    return null;
  }

  if (error) {
    const msg = `Error loading top sporting leagues`;
    // here set global error state (with useContext or return a toast notification or other error component
    return <div>{msg}</div>;
  }

  if (!data.leaguesByCityId) {
    data.leaguesByCityId = [];
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  return children(data?.leaguesByCityId);
};

export default TicketsByLeagueQuery;
