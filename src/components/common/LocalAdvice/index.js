import React from 'react';
import { adopt } from 'react-adopt';
import ReactPlayer from 'react-player';
import CardHorizontal from '@components/common/CardHorizontal';
import { formatSlugSegments, LINK_ABSOLUTE } from '@utils/routes';
import {
  LocalAdviceSection,
  LocalAdviceMore,
  LocalAdviceContainer,
  LocalAdviceMediaContainer,
  LocalAdviceTitleGuide,
  LocalAdviceMedia,
  BtnVideoPlay,
  LocalAdviceCardContent,
  LocalAdviceMainImage,
} from './styles';
import InterestDataQuery from './queries';
import InterestQuestions from '../InterestQuestion';

const Data = adopt({
  interestData: ({ render, interestId, interestType }) => (
    <InterestDataQuery interestType={interestType} interestId={interestId}>
      {render}
    </InterestDataQuery>
  ),
});

const sliceRange = hasVideo => {
  return hasVideo ? [0, 2] : [1, 3];
};

const RenderMedia = ({ video, adviceImage, mainImage }) => {
  if (video || adviceImage)
    return (
      <LocalAdviceMediaContainer>
        <LocalAdviceMedia
          adviceImage={video?.imageURL || adviceImage}
          modalContent={<ReactPlayer url={video?.link} width="100%" height="100%" playing />}
        >
          <LocalAdviceTitleGuide>{video.title}</LocalAdviceTitleGuide>

          <BtnVideoPlay name="btnPlay" />
        </LocalAdviceMedia>
      </LocalAdviceMediaContainer>
    );
  if (mainImage?.imageURL && mainImage?.link && mainImage?.title)
    return (
      <LocalAdviceMediaContainer>
        <LocalAdviceMainImage
          adviceImage={mainImage?.imageURL}
          href={mainImage?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LocalAdviceTitleGuide>{mainImage?.title}</LocalAdviceTitleGuide>
        </LocalAdviceMainImage>
      </LocalAdviceMediaContainer>
    );
  return null;
};

const LocalAdvice = ({ cardData, local, adviceImage, className, interestId, interestType, cityName, venueName }) => {
  const linkUrl =
    cityName && venueName
      ? formatSlugSegments(LINK_ABSOLUTE, cityName, venueName, 'fan-tips')
      : formatSlugSegments(LINK_ABSOLUTE, 'venue', interestId, 'fan-tips');
  return (
    <Data interestId={interestId} interestType={interestType}>
      {({ interestData }) => {
        const video = interestData?.length && interestData.filter(item => item.objectType === 'VIDEO')[0];
        const mainImage = !video && interestData?.length && interestData[0];
        // const fallbackVideo = 'https://www.youtube.com/watch?v=-M0RiKff3Ds';
        const parsedInterestData = interestData?.length
          ? interestData
              .map(item => {
                return {
                  id: item.id,
                  image: item.imageURL,
                  title: item.title,
                  info: item.blogpostSummary,
                  link: item.link,
                };
              })
              .slice(...sliceRange(video))
          : cardData;

        if (!(mainImage?.imageURL && mainImage?.link && mainImage?.title) || !video) return null;

        return (
          <LocalAdviceSection
            className={className}
            centered
            title={local ? `Travel advice for ${local}` : ''}
            // more={<LocalAdviceMore>More</LocalAdviceMore>}
          >
            <LocalAdviceContainer>
              <RenderMedia video={video} adviceImage={adviceImage} mainImage={mainImage} />

              <LocalAdviceCardContent>
                {!!parsedInterestData.length &&
                  parsedInterestData.map(item => <CardHorizontal key={item.id} cardData={item} />)}
              </LocalAdviceCardContent>
            </LocalAdviceContainer>
            {/* NOTE: [HOTFIX SWIAM-1234: to be re-used - do not delete */}
            {/* <InterestQuestions
              interestId={interestId}
              interestType={interestType}
              cityName={cityName}
              venueName={venueName}
            /> */}
            <LocalAdviceMore href={linkUrl}>More</LocalAdviceMore>
          </LocalAdviceSection>
        );
      }}
    </Data>
  );
};

export default LocalAdvice;
