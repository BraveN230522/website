import React from 'react';

import { SuccessMessage } from './styles';

const SuccessFeedback = ({ children, className }) => <SuccessMessage className={className}>{children}</SuccessMessage>;

export default SuccessFeedback;
