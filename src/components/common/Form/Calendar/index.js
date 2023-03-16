import 'react-dates/initialize';
import React, { useReducer, useCallback, useEffect, useRef } from 'react';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';
import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';
import useOnClickOutside from '@utils/hooks/useOnClickOutside';

import { StyledWrapperProvider, NavPrev, NavNext, CalendarImage } from './style';
import useLastDayClassName from './useLastDayClassName';

const changeDate = value => (value ? moment(value) : value);
const reducer = (state, newState) => ({
  ...state,
  ...newState,
});

function DatePicker({
  className,
  onFocus,
  autoPopup,
  onChangeDateCallback,
  lightMode,
  initialDates,
  startDateId,
  endDateId,
}) {
  const [{ startDate, endDate, focus, navigationCount }, setState] = useReducer(reducer, {
    startDate: null,
    endDate: null,
    focus: null,
    navigationCount: 0,
  });

  const openedCalendarRef = useRef();
  // We only callback the dates after they dismiss the calendar
  useOnClickOutside(openedCalendarRef, () => onChangeDateCallback(startDate, endDate));

  useLastDayClassName([focus, navigationCount]);
  const [isMobile] = useDefaultMediaQueries();

  const handleFocus = useCallback(value => {
    setState({ focus: value });
  }, []);

  const handleNavigation = useCallback(() => {
    setState({ navigationCount: navigationCount + 1 });
  }, [navigationCount]);

  const handleDate = useCallback(range => {
    setState({
      startDate: changeDate(range.startDate),
      endDate: changeDate(range.endDate),
    });
  }, []);

  useEffect(() => {
    if (focus && onFocus) {
      onFocus();
    }
  }, [focus]);

  useEffect(() => {
    if (autoPopup) {
      setState({ focus: 'startDate' });
    }
  }, [autoPopup]);

  useEffect(() => {
    if (initialDates) {
      setState({
        startDate: changeDate(initialDates.startDate),
        endDate: changeDate(initialDates.endDate),
      });
    }
  }, []);

  const getStartDatePlaceholderText = useCallback(() => {
    if (!lightMode) {
      return 'Choose your dates';
    }

    if (startDate) {
      return moment(new Date(startDate)).format('MMM D YYYY');
    }

    return moment(new Date()).format('MMM D YYYY');
  }, [startDate, lightMode]);

  return (
    <StyledWrapperProvider
      className={className}
      ref={openedCalendarRef}
      hasStartDate={startDate}
      hasEndDate={endDate}
      lightMode={lightMode}
      // onClick={showCalendar}
    >
      <DateRangePicker
        startDatePlaceholderText={getStartDatePlaceholderText()}
        endDatePlaceholderText={lightMode ? 'onward' : ''}
        startDate={startDate}
        endDate={endDate}
        onDatesChange={handleDate}
        displayFormat="MMM D YYYY"
        monthFormat="MMM YYYY"
        focusedInput={focus}
        onFocusChange={handleFocus}
        startDateId={startDateId || 'startDateInputId'}
        endDateId={endDateId || 'endDateInputId'}
        minimumNights={0}
        numberOfMonths={isMobile ? 1 : 2}
        customInputIcon={<CalendarImage lightMode={lightMode} />}
        navPrev={<NavPrev />}
        navNext={<NavNext />}
        small
        anchorDirection="right"
        onPrevMonthClick={handleNavigation}
        onNextMonthClick={handleNavigation}
        hideKeyboardShortcutsPanel
        verticalSpacing={isMobile ? 30 : 18}
        horizontalMargin={0}
        keepOpenOnDateSelect
      />
    </StyledWrapperProvider>
  );
}

DatePicker.defaultPros = {
  onFocus: () => {},
};

export default DatePicker;
