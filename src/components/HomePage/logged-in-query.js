import { useQuery } from '@apollo/react-hooks';

import { UPCOMMING_EVENTS } from '@graphql/queries/me';

import Loader from '@components/Loader';
import console from '@utils/console';
import { mockHomeLoggedIn } from './LoggedIn/mock';

const failureData = {
  allCarousels: [
    {
      carouselItemID: 1,
      imageURL: mockHomeLoggedIn,
      mobileImageURL: mockHomeLoggedIn,
    },
  ],
};

const LoggedInQuery = ({ children, userToken }) => {
  const { loading, error, data } = useQuery(UPCOMMING_EVENTS, {
    variables: {
      token: userToken,
    },
  });

  if (loading) {
    return <Loader />;
  }

  // The data is not paginated on backend, it's keeped in FE application memory
  if (error) {
    console.warn('Error while loading logged in data');
    return children(failureData);
  }

  return children({
    ...data,
  });
};

export { LoggedInQuery };
