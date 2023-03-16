import React, { useCallback, useReducer, useEffect, useRef } from 'react';

import LiveSearchResult from '@components/common/LiveSearchResult';

import useDebounceValue from '@utils/hooks/useDebounceValue';
import useOnClickOutside from '@utils/hooks/useOnClickOutside';
import { SearchWrapper, SearchInput } from './styles';

const MIN_SEARCH_CHARACTERS = 3;
const DELAY = 600;

const reducer = (state, newState) => ({
  ...state,
  ...newState,
});
const INITIAL_STATE = {
  searchedTerm: undefined,
  shouldOpenLiveResults: false,
  shouldPopupCalendar: false,
  href: undefined,
  fromDate: undefined,
  toDate: undefined,
};

const AutoComplete = ({ className, getCityId, icon, placeholder, entity, defaultValue = '' }) => {
  const [{ inputValue, searchedTerm, shouldOpenLiveResults }, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    inputValue: defaultValue,
  });

  const searchRef = useRef();

  const delayedValue = useDebounceValue(searchedTerm, DELAY);

  useEffect(() => {
    const moderatedValue = inputValue ? inputValue.trim() : '';

    const hasMinimalCharacters = moderatedValue.length >= MIN_SEARCH_CHARACTERS;

    if (hasMinimalCharacters) {
      dispatch({ searchedTerm: moderatedValue });
    }
  }, [inputValue]);

  const handleSearchTerm = useCallback(e => {
    dispatch({ inputValue: e.target.value });
  }, []);

  const handleSearchTermBlur = useCallback(e => {
    const { value } = e.target;

    if (!value) {
      getCityId(`/${entity}/`);
    }
  });

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

  const handleSelectResult = (value, href, data) => {
    getCityId(href, value, data.hotelSearchCityId);

    dispatch({
      inputValue: value,
      shouldOpenLiveResults: false,
      shouldPopupCalendar: true,
      href,
    });
  };

  return (
    <SearchWrapper className={className} ref={searchRef}>
      <SearchInput
        icon={icon}
        onChange={handleSearchTerm}
        placeholder={placeholder}
        onBlur={handleSearchTermBlur}
        onFocus={openLiveResults}
        value={inputValue}
      />

      <LiveSearchResult
        className={className}
        searchedTerm={delayedValue}
        open={shouldOpenLiveResults}
        onSelectResult={handleSelectResult}
        entity={entity}
        hotels
      />
    </SearchWrapper>
  );
};

export default AutoComplete;
