import { useQuery } from '@apollo/react-hooks';
import { SEARCH_PRODUCTS } from '@graphql/queries/search';
// import { get } from 'lodash';
import console from '@utils/console';

const HotelsSearchQuery = ({ children, from, to, qualifiers, query }) => {
  console.log({ from, to, qualifiers, limit: 15, offset: '0', query, vendor: 'hb' });
  const { loading, error, data } = useQuery(SEARCH_PRODUCTS, {
    variables: { from, to, qualifiers, limit: 15, offset: '0', query, vendor: 'hb' },
  });

  // TODO: deal with loading and error
  if (loading) {
    return children({ searchProducts: { loading: true } });
  }

  if (error) {
    console.log('error: ', error);
    return children({ searchProducts: [] });
  }

  return children(data);
};

export { HotelsSearchQuery };
