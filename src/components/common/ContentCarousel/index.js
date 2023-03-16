import React from 'react';

import { adopt } from 'react-adopt';
import { NewsQuery } from './queries';
import { mockCarousel } from './mocks';

import Carousel from './carousel';

const Data = adopt({
  news: ({ render, interestId, interestType, shouldRefetch, refetchInterestId, refetchInterestType }) => (
    <NewsQuery
      interestType={interestType}
      interestId={interestId}
      shouldRefetch={shouldRefetch}
      refetchInterestId={refetchInterestId}
      refetchInterestType={refetchInterestType}
    >
      {render}
    </NewsQuery>
  ),
});
const ContentCarousel = ({
  interestId,
  interestType,
  interestData,
  shouldRefetch,
  refetchInterestId,
  refetchInterestType,
}) => {
  if (interestData !== undefined && interestData.length) {
    const parsedNews = interestData.map(item => {
      return {
        id: item?.id || '',
        imageURL: item?.imageURL || '',
        title: item?.title || '',
        summary: item?.summary,
        link: item?.link || '',
      };
    });
    return <Carousel items={parsedNews} />;
  }
  return (
    <Data
      interestId={interestId}
      interestType={interestType}
      shouldRefetch={shouldRefetch}
      refetchInterestId={refetchInterestId}
      refetchInterestType={refetchInterestType}
    >
      {({ news }) => {
        const parsedNews =
          news && news.length
            ? news.map(item => {
                return {
                  id: item?.id || '',
                  imageURL: item?.imageURL || '',
                  title: item?.title || '',
                  summary: item?.summary,
                  link: item?.link || '',
                };
              })
            : mockCarousel;

        return <Carousel items={parsedNews} />;
      }}
    </Data>
  );
};

export default ContentCarousel;
