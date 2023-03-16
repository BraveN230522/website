import React from 'react';
import { useRouter } from 'next/router';
import { adopt } from 'react-adopt';
import TeamPage from '@components/TeamPage';
import Home from '../../../../index';
import ObjectIdByNameQuery from '../../../../../src/graphql/queries/common';

const ObjectData = adopt({
  objectData: ({ render, name }) => <ObjectIdByNameQuery name={name}>{render}</ObjectIdByNameQuery>,
});

const PageRouter = () => {
  const router = useRouter();
  const { teamslug, fromDate, toDate } = router.query;
  return (
    <ObjectData name={teamslug}>
      {({ objectData }) => {
        const id = objectData && objectData.data && parseInt(objectData.data.id, 10);
        return (id && <TeamPage teamId={id} fromDate={fromDate} toDate={toDate} />) || <Home />;
      }}
    </ObjectData>
  );
};

export default PageRouter;
