import React from 'react';
import ReactPlayer from 'react-player';

import Section from '@components/common/Section';

import { VideoListStyles, VideoListImage, BtnVideoPlay } from './styles';

const VideoList = ({ className, data, title }) => {
  return (
    <Section className={className} title={title} centered>
      <VideoListStyles>
        {data.map((item, index) => (
          <VideoListImage
            key={item.id || index}
            adviceImage={item.image}
            modalContent={<ReactPlayer url={item.video} width="100%" height="100%" playing />}
          >
            <BtnVideoPlay name="btnPlaySm" />
          </VideoListImage>
        ))}
      </VideoListStyles>
    </Section>
  );
};

export default VideoList;
