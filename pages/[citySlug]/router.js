import React, { useContext } from 'react';
import { adopt } from 'react-adopt';
import CityPage from '@components/CityPage';
import VenuePage from '@components/VenuePage';
import LeaguePage from '@components/LeaguePage';
import TeamPage from '@components/TeamPage';
import Home from '../index';
import ObjectIdByNameQuery from '../../src/graphql/queries/common';
import UserContext from '../../src/utils/userContext';

const handleRoute = (objectData, fromDate, toDate) => {
  const id = objectData && objectData.data && parseInt(objectData.data.id, 10);
  const type = objectData && objectData.data && objectData.data.type;
  const { state: user } = useContext(UserContext);
  switch (type) {
    case 'city':
      return <CityPage cityId={id} fromDate={fromDate} toDate={toDate} />;
    case 'venue':
      return <VenuePage venueId={id} fromDate={fromDate} toDate={toDate} />;
    case 'league':
      return <LeaguePage leagueId={id} fromDate={fromDate} toDate={toDate} user={user} />;
    case 'team':
      return <TeamPage teamId={id} fromDate={fromDate} toDate={toDate} />;
    default:
      return <Home />;
  }
};

const ObjectData = adopt({
  objectData: ({ render, name }) => <ObjectIdByNameQuery name={name}>{render}</ObjectIdByNameQuery>,
});

const PageRouter = ({ slug, fromDate, toDate }) => {
  // console.log(slug);
  return (
    <ObjectData name={slug}>
      {({ objectData }) => {
        return handleRoute(objectData, fromDate, toDate);
      }}
    </ObjectData>
  );
};

export default PageRouter;
