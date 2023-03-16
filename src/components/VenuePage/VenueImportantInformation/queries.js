import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import console from '@utils/console';
import { GET_VENUE_IMPORTANT_INFORMATION } from '../../../graphql/queries/venues';

const VenueImportantInformationQuery = ({ children, venueId }) => {
  const { loading, error, data } = useQuery(GET_VENUE_IMPORTANT_INFORMATION, {
    variables: { id: venueId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, `Error fetching venue important information data for venue id ${venueId}`);
  }

  const queryData = get(data, 'venueImportantInformationById', []);

  return children(queryData);
};

export default VenueImportantInformationQuery;
