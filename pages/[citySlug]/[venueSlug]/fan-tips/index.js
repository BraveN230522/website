import React from 'react';
import { adopt } from 'react-adopt';
import { useRouter } from 'next/router';
import Home from '../../../index';
import ObjectIdByNameQuery from '../../../../src/graphql/queries/common';
import VenueTips from '../../../../src/components/VenuePage/VenueTipsPage';

const ObjectData = adopt({
  objectData: ({ render, name }) => <ObjectIdByNameQuery name={name}>{render}</ObjectIdByNameQuery>,
});

const PageRouter = () => {
  const router = useRouter();
  const { venueSlug, fromDate, toDate } = router.query;
  return (
    <ObjectData name={venueSlug}>
      {({ objectData }) => {
        const id = objectData && objectData.data && parseInt(objectData.data.id, 10);
        return (id && <VenueTips venueId={id} fromDate={fromDate} toDate={toDate} />) || <Home />;
      }}
    </ObjectData>
  );
};

export default PageRouter;
