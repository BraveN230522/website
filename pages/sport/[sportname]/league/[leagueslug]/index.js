import React from 'react';
import { adopt } from 'react-adopt';
import LeaguePage from '@components/LeaguePage';
import { useRouter } from 'next/router';
import Home from '../../../../index';
import ObjectIdByNameQuery from '../../../../../src/graphql/queries/common';

const ObjectData = adopt({
  objectData: ({ render, name }) => <ObjectIdByNameQuery name={name}>{render}</ObjectIdByNameQuery>,
});

const PageRouter = () => {
  const router = useRouter();
  const { leagueslug, fromDate, toDate } = router.query;
  return (
    <ObjectData name={leagueslug}>
      {({ objectData }) => {
        const id = objectData && objectData.data && parseInt(objectData.data.id, 10);
        return (id && <LeaguePage leagueId={id} fromDate={fromDate} toDate={toDate} />) || <Home />;
      }}
    </ObjectData>
  );
};

export default PageRouter;
