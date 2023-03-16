import { useEffect, useState } from 'react';

function useMediaQuery(mediaQueryString) {
  const [queryMatch, setQueryMatch] = useState(null);

  useEffect(() => {
    const setMediaMatchHandler = e => setQueryMatch(e.matches);

    const mediaQueryList = window.matchMedia(mediaQueryString);

    setMediaMatchHandler(mediaQueryList);

    mediaQueryList.addListener(setMediaMatchHandler);

    return () => mediaQueryList.removeListener(setMediaMatchHandler);
  }, [mediaQueryString]);

  return queryMatch;
}

function useDefaultQueries() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px');

  return [isMobile, isTablet, isDesktop];
}

export { useMediaQuery, useDefaultQueries };
