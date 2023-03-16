import React, { useLayoutEffect } from 'react';
import { adopt } from 'react-adopt';
import Link from 'next/link';
import _ from 'lodash';
import { useRouter } from 'next/router';
import Button from '@components/common/Form/Button';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import { VenueQuery } from '../queries';
import TipCard from './TipCard';
import InterestQuestionsQuery from '../../common/InterestQuestion/queries';
import { HeroWithSpacing, SubTitle } from '../Header/styles';
import { VenueTipsHeader, TipCardContainer, ButtonContainer } from './styles';
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

const Venue = ({ venueId, fromDate, toDate }) => {
  return (
    <Data venueId={venueId} fromDate={fromDate} interestType="venue" interestId={parseInt(venueId, 10)}>
      {({ venueData, tipsData }) => {
        const router = useRouter();
        useLayoutEffect(() => {
          if (_.isEmpty(venueData) && tipsData.length === 0) {
            router.back();
          }
        }, []);

        const headerData = venueData &&
          venueData.venue && [
            {
              title: `${venueData?.venue?.venueName} Sports Fan Tips`,
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
                <HeroWithSpacing direction="center" title={activeItem?.title}>
                  <SubTitle>
                    <TruncateText>{activeItem?.description}</TruncateText>
                  </SubTitle>
                </HeroWithSpacing>
              )}
            </VenueTipsHeader>
            <TipCardContainer>
              {tipsData && tipsData.length ? (
                tipsData.map(tip => {
                  return (
                    <TipCard
                      title={tip.questionTitle}
                      icon={tip.icon}
                      answers={tip.answers}
                      key={tip.id}
                      detailUrl={formatSlugSegments(
                        LINK_ABSOLUTE,
                        venueData?.venue?.city?.cityName,
                        venueData?.venue?.venueName,
                        'fan-tips',
                        tip.questionTitle
                      )}
                    />
                  );
                })
              ) : (
                <div />
              )}
            </TipCardContainer>
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
