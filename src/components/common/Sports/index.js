import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { adopt } from 'react-adopt';

import More from '@components/common/More';
import { useMediaQuery } from '@utils/hooks/useMedia';

import { SportsQuery } from './queries';

import {
  SportsStyles,
  SportsContainer,
  SportsHeader,
  SportsTitle,
  SportsArticle,
  SportsContentItems,
  SportsDescription,
  SportsImage,
} from './styles';

const SportsData = adopt({
  sports: ({ render }) => <SportsQuery>{render}</SportsQuery>,
});

const Sports = () => {
  const isTablet = useMediaQuery('(max-width: 960px)');

  const getNumberOfItems = () => (isTablet ? 9 : 8);

  const [limit, setLimit] = useState(getNumberOfItems());

  useEffect(() => {
    setLimit(getNumberOfItems());
  }, [isTablet]);

  return (
    <SportsStyles>
      <SportsContainer>
        <SportsHeader>
          <SportsTitle>Get tickets by Sport</SportsTitle>
        </SportsHeader>

        <SportsData>
          {({ sports: { allSports } }) => {
            return (
              <>
                <SportsArticle>
                  {!!allSports.length &&
                    Array.from(allSports)
                      .slice(0, limit)
                      .map(({ sportID, sportName, sportIconURLV4 }) => (
                        <Link href="/" passHref key={sportID}>
                          <SportsContentItems aria-label="sport ticket">
                            <SportsImage src={sportIconURLV4} />
                            <SportsDescription>{sportName}</SportsDescription>
                          </SportsContentItems>
                        </Link>
                      ))}
                </SportsArticle>
              </>
            );
          }}
        </SportsData>
      </SportsContainer>
    </SportsStyles>
  );
};

export default Sports;
