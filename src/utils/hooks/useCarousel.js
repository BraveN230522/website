import { useEffect } from 'react';

const useCarousel = ({ activeItemIndex, items, changeActiveItem }) => {
  useEffect(() => {
    const next = items ? (activeItemIndex + 1) % items.length : 0;
    const timer = setTimeout(() => changeActiveItem(next), 10 * 1000);

    return () => clearTimeout(timer);
  }, [activeItemIndex, items]);
};

export default useCarousel;
