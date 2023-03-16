import { useState, useCallback } from 'react';

const useSelection = ({ items, selectedIndex = 0 }) => {
  const [activeItemIndex, setActiveItem] = useState(selectedIndex);

  const changeActiveItem = useCallback(
    itemIndex => {
      if (itemIndex === activeItemIndex) return;

      setActiveItem(itemIndex);
    },
    [activeItemIndex]
  );

  const activeItem = items ? items[activeItemIndex] : 0;

  return [activeItem, activeItemIndex, changeActiveItem];
};

export default useSelection;
