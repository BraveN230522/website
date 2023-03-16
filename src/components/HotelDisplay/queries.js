import { useQuery } from '@apollo/react-hooks';
import { SEARCH_PRODUCTS } from '@graphql/queries/search';
import { GET_HOTEL_PRODUCT_BY_ID, GET_HOTEL_BY_ID } from '@graphql/queries/hotel';

import { get } from 'lodash';
import console from '@utils/console';
import { mockHotel } from './mocks';

const HotelDisplayQuery = ({ children, from, to, qualifiers, query, hotelID }) => {
  const { loading, error, data } = useQuery(SEARCH_PRODUCTS, {
    variables: { hotelID, from, to, qualifiers, limit: 2, offset: '0', query, vendor: 'hb' },
  });

  // TODO: deal with loading and error
  if (loading) {
    return children({ hotelDisplay: { loading: true } });
  }
  console.log('\n\n\n ==== HOTEL DETAIL PAGE SEARCH DATA ====');
  console.log(data);
  const matchingHotels = data?.searchProducts?.filter(product => product.hotelID === hotelID);

  if (error) {
    console.error('error: ', error);
    return children({ hotelDisplay: null });
  }

  if (!matchingHotels?.length) {
    return children({ hotelDisplay: { matches: 0 } });
  }

  return children({ hotelDisplay: matchingHotels[0] });
};

const SingleHotelQuery = ({ children, hotelId, qualifiers, startDate, endDate }) => {
  const { loading, error, data } = useQuery(GET_HOTEL_BY_ID, {
    variables: { hotelId },
  });

  // TODO: deal with loading and error
  if (loading) {
    return children({ hotelData: { loading: true } });
  }
  console.log('\n\n\n ==== HOTEL DETAIL PAGE HOTEL BY ID DATA ====');
  console.log(data);

  if (error) {
    console.error('error: ', `hotelId:${hotelId}`, error);
    return children({ hotelData: mockHotel });
  }

  const queryData = get(data, 'hotelData', {});
  return children({ singleHotelData: queryData });
};

const HotelProductQuery = ({ children, hotelId, qualifiers, startDate, endDate }) => {
  const { loading, error, data } = useQuery(GET_HOTEL_PRODUCT_BY_ID, {
    variables: { hotelId, qualifiers, startDate, endDate },
  });

  // TODO: deal with loading and error
  if (loading) {
    return children({ hotelData: { loading: true } });
  }
  console.log('\n\n\n ==== HOTEL DETAIL PAGE HOTEL PRODUCT DATA ====');
  console.log(data);

  if (error) {
    console.error('error: ', `hotelId:${hotelId}`, error);
    return children({ hotelProductData: [] });
  }

  return children({ hotelProductData: data });
};

export { HotelDisplayQuery, SingleHotelQuery, HotelProductQuery };
