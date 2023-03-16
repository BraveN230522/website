import React, { useCallback, useReducer, useEffect, useRef } from 'react';
import Router from 'next/router';
import moment from 'moment';

import SearchClean from '@svg/search-clean.svg';
import Calendar from '@components/common/Form/Calendar';

import LiveSearchResult from '@components/common/LiveSearchResult';

import useDebounceValue from '@utils/hooks/useDebounceValue';
import useOnClickOutside from '@utils/hooks/useOnClickOutside';

import { sendEvent } from '@utils/google-services/gtm';
import { SearchWrapper, SearchBarStyles, SearchInput, SearchDatePicker, SearchButton } from './styles';

const MIN_SEARCH_CHARACTERS = 3;
const DELAY = 600;

const reducer = (state, newState) => ({
  ...state,
  ...newState,
});
const INITIAL_STATE = {
  inputValue: '',
  searchedTerm: undefined,
  shouldOpenLiveResults: true,
  shouldPopupCalendar: false,
  href: undefined,
  fromDate: undefined,
  toDate: undefined,
};

const SearchBar = () => {
  const [
    { inputValue, searchedTerm, shouldOpenLiveResults, shouldPopupCalendar, href, fromDate, toDate },
    dispatch,
  ] = useReducer(reducer, INITIAL_STATE);

  const searchRef = useRef();

  const delayedValue = useDebounceValue(searchedTerm, DELAY);

  useEffect(() => {
    const moderatedValue = inputValue ? inputValue.trim() : '';

    const hasMinimalCharacters = moderatedValue.length >= MIN_SEARCH_CHARACTERS;

    if (hasMinimalCharacters) {
      dispatch({ searchedTerm: moderatedValue });
    }
  }, [inputValue]);

  const onChange = useCallback(e => {
    dispatch({ inputValue: e.target.value });
  }, []);

  const DISMISS_DELAY = 100;
  const OPEN_DELAY = DISMISS_DELAY * 1.2; // Opening need to be slow in case the switch from dismiss/open/dismiss

  const dismissLiveResults = useCallback(() => {
    // Give time for navigation if they click on one of the results
    setTimeout(() => {
      dispatch({ shouldOpenLiveResults: false });
    }, DISMISS_DELAY);
  }, []);

  const openLiveResults = useCallback(() => {
    setTimeout(() => {
      dispatch({ shouldOpenLiveResults: true });
    }, OPEN_DELAY);
  }, []);

  useOnClickOutside(searchRef, dismissLiveResults);

  const handleCalendarPopup = (value, href) => {
    dispatch({
      inputValue: value,
      shouldOpenLiveResults: false,
      shouldPopupCalendar: true,
      href,
    });
  };

  const handlePushRouter = useCallback(() => {
    if (!href) {
      return;
    }

    const query = {
      // default to today's date
      fromDate: moment(fromDate || new Date()).format('YYYY-MM-DD'),
      // default to null
      toDate: toDate ? moment(toDate).format('YYYY-MM-DD') : null,
    };

    sendEvent('search', {
      searchData: {
        detail: {
          searchEntry: inputValue,
          searchDate: query.fromDate,
        },
      },
    });

    Router.push({
      pathname: href,
      query,
    });
  }, [href, fromDate, toDate]);

  const onChangeDateCallback = useCallback((fromDate, toDate) => {
    dispatch({
      fromDate,
      toDate,
    });
  }, []);

  return (
    <SearchWrapper ref={searchRef}>
      <SearchBarStyles>
        <SearchInput
          onChange={onChange}
          placeholder="I’m looking for a city, team, event, sport..."
          onFocus={openLiveResults}
          value={inputValue}
        />

        <SearchDatePicker>
          <Calendar
            onFocus={dismissLiveResults}
            autoPopup={shouldPopupCalendar}
            onChangeDateCallback={onChangeDateCallback}
          />
        </SearchDatePicker>
        <SearchButton onClick={handlePushRouter}>
          <img src={SearchClean} alt="click to see result page" /> <span>Search</span>
        </SearchButton>
      </SearchBarStyles>

      <LiveSearchResult searchedTerm={delayedValue} open={shouldOpenLiveResults} onSelectResult={handleCalendarPopup} />
    </SearchWrapper>
  );
};

export default SearchBar;
