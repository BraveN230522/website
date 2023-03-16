import React, { useEffect, useCallback, useRef } from 'react';

import { Tabs, TabButton } from './style';

const TabSwitcher = ({ leftLabel, rightLabel, active, activeCallback, shouldSetInitialFocus }) => {
  const leftRef = useRef();

  useEffect(() => {
    if (leftRef.current && shouldSetInitialFocus) {
      leftRef.current.focus();
    }
  }, [leftRef.current]);

  const handleLeft = useCallback(() => {
    if (active !== leftLabel) {
      activeCallback(leftLabel);
    }
  }, [active]);

  const handleRight = useCallback(() => {
    if (active !== rightLabel) {
      activeCallback(rightLabel);
    }
  }, [active]);

  return (
    <Tabs data-testid="tab-switcher-component">
      <TabButton active={active === leftLabel} onClick={handleLeft} ref={leftRef}>
        {leftLabel}
      </TabButton>
      <TabButton active={active === rightLabel} onClick={handleRight}>
        {rightLabel}
      </TabButton>
    </Tabs>
  );
};

TabSwitcher.defaultProps = {
  shouldSetInitialFocus: false,
};

export default TabSwitcher;
