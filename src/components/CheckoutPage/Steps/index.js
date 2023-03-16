import React, { Fragment } from 'react';

import Icon from '@components/common/Icon';

import { StepsText, StepsHeader, StepsContent } from './styles';

const Steps = ({ data, currentStep }) => {
  return (
    <>
      <StepsHeader>
        {data.map(({ label }, index) => (
          <Fragment key={label}>
            <StepsText selected={index === currentStep}>{label}</StepsText>
            <Icon name="stepsRight" />
          </Fragment>
        ))}
      </StepsHeader>

      <StepsContent>{data[currentStep].renderContent}</StepsContent>
    </>
  );
};

export default Steps;
