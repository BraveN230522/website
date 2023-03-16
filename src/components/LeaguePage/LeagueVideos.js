import React from 'react';

import { adopt } from 'react-adopt';
import { LeagueVideosQuery } from './queries';
import { LeagueVideoList } from './styles';
import { mockFanVideo } from './mocks';

const Data = adopt({
  leagueVideos: ({ render, leagueId }) => <LeagueVideosQuery leagueId={leagueId}>{render}</LeagueVideosQuery>,
});

const LeagueVideos = ({ leagueName, leagueId }) => {
  return (
    <Data leagueId={parseInt(leagueId, 10)}>
      {({ leagueVideos }) => {
        const parsedVideos =
          leagueVideos && leagueVideos.length
            ? leagueVideos.map(item => {
                return {
                  id: item?.videoID || '',
                  image: item?.imageURL || mockFanVideo[0].image,
                  video: item?.videoURL || '',
                };
              })
            : mockFanVideo;

        return <LeagueVideoList title={`${leagueName} Fan Videos`} data={parsedVideos} />;
      }}
    </Data>
  );
};

export default LeagueVideos;
