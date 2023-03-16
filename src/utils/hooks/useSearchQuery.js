import { useCallback } from 'react';
import Router from 'next/router';
import moment from 'moment';

export const useDateQuery = ({ fromDate, toDate, pageName, id, concat = {}, setEnableHotelSearch, setDates }) => {
  return useCallback(
    (startDate, endDate) => {
      // avoid inconsistent state if there's no start date
      if (!startDate) {
        return;
      }
      const startDateString = startDate ? moment(startDate).format('YYYY-MM-DD') : null;
      const endDateString = endDate ? moment(endDate).format('YYYY-MM-DD') : null;

      const { hotelSearchCityId } = Router.query;

      // console.info('OLD DATES', fromDate, toDate);
      // console.info('NEW DATES', startDateString, endDateString);
      // avoid re-render if dates haven't changed
      if (startDateString === fromDate && (endDateString || '') === toDate) {
        return;
      }

      // console.info('DATES CHANGED', startDateString, endDateString);
      // Hotel Pages use setDates & setEnableHotelSearch and defer the search, the Hotel Search reloads immediately
      if (setDates) {
        setDates(startDateString, endDateString);
        const params = { ...concat };
        history.pushState(
          {},
          '',
          `?fromDate=${startDateString}&toDate=${endDateString}&query=${params.query}&qualifiers=${params.qualifiers}&hotelSearchCityId=${hotelSearchCityId}`
        );
        // only Hotel pages use search button toggling
        if (setEnableHotelSearch) setEnableHotelSearch(true);
      } else {
        Router.push(
          {
            pathname: `/${pageName}${id ? '/[id]' : ''}`,
            query: {
              fromDate: startDateString,
              toDate: endDateString,
              hotelSearchCityId,
              ...concat,
            },
          },
          {
            pathname: `/${pageName}${id ? `/${id}` : ''}`,
            query: {
              fromDate: startDateString,
              toDate: endDateString,
              hotelSearchCityId,
              ...concat,
            },
          }
        );
      }
    },
    [fromDate, toDate]
  );
};
