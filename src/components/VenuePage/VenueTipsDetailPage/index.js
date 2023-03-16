import React from 'react';
import { adopt } from 'react-adopt';
import Link from 'next/link';
import Button from '@components/common/Form/Button';
import { formatSlugSegment, formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import { VenueQuery } from '../queries';
import AnswerCard from './AnswerCard';
import InterestQuestionsQuery from '../../common/InterestQuestion/queries';
import { HeroWithSpacing, SubTitle } from '../Header/styles';
import { VenueTipsHeader, AnswerCardContainer, ButtonContainer } from './styles';
import TruncateText from '../../common/TruncateText';

const Data = adopt({
  venueData: ({ render, venueId, fromDate }) => (
    <VenueQuery venueId={venueId} fromDate={fromDate}>
      {render}
    </VenueQuery>
  ),
  tipsData: ({ render, interestType, interestId }) => (
    <InterestQuestionsQuery interestType={interestType} interestId={interestId}>
      {render}
    </InterestQuestionsQuery>
  ),
});

const Venue = ({ venueId, fromDate, questionSlug }) => {
  return (
    <Data venueId={venueId} fromDate={fromDate} interestType="venue" interestId={parseInt(venueId, 10)}>
      {({ venueData, tipsData }) => {
        const questionTip = tipsData.find(tip => formatSlugSegment(tip.questionTitle) === questionSlug);
        const headerData = venueData &&
          venueData.venue && [
            {
              title: venueData?.venue?.venueName,
              location: venueData?.venue?.venueAddress,
              description: venueData?.venue?.venueOverview,
              imageURL: venueData?.venue?.venueImage,
              mobileImageURL: venueData?.venue?.venueImage,
            },
          ];
        return (
          <>
            <VenueTipsHeader carouselItems={headerData} withMenu>
              {activeItem => (
                <HeroWithSpacing direction="center" title={questionTip?.questionTitle}>
                  <SubTitle>
                    <TruncateText>{activeItem?.description}</TruncateText>
                  </SubTitle>
                </HeroWithSpacing>
              )}
            </VenueTipsHeader>
            <AnswerCardContainer>
              {questionTip && questionTip.answers && questionTip.answers.length ? (
                questionTip.answers.map(answer => (
                  <AnswerCard title={answer.questionTitle} text={answer.text} icon={questionTip.icon} key={answer.id} />
                ))
              ) : (
                <div />
              )}
            </AnswerCardContainer>
            <ButtonContainer>
              <Link
                href={formatSlugSegments(LINK_ABSOLUTE, venueData?.venue?.city?.cityName, venueData?.venue?.venueName)}
              >
                <a>
                  <Button outline>View Sports Tickets</Button>
                </a>
              </Link>
            </ButtonContainer>
          </>
        );
      }}
    </Data>
  );
};

export default Venue;
