import React from 'react';
import { Loading } from './styles';

const LoadingComponent = ({ visible }) => (
  <Loading visible={visible}>
    <img src="//sportswhereiam.com/loading.gif" width="65" height="65" />
  </Loading>
);

export default LoadingComponent;
