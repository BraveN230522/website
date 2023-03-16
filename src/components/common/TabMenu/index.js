import React from 'react';

import useSelection from '@utils/hooks/useSelection';
import More from '@components/common/More';
import { ListMenu, ItemMenu, LinkMenu, ContentMenu } from './styles';

const TabMenu = ({ items, className }) => {
  const [activeItem, activeIndex, changeActiveItem] = useSelection({ items, selectedIndex: 0 });

  const handleTabItemClick = index => () => changeActiveItem(index);

  return (
    <>
      <ListMenu className={className}>
        {items &&
          items.map((item, index) => (
            <ItemMenu key={index}>
              <LinkMenu activeLink={activeIndex === index} onClick={handleTabItemClick(index)}>
                {item.name}
              </LinkMenu>
            </ItemMenu>
          ))}
      </ListMenu>

      <ContentMenu>{activeItem.renderContent()}</ContentMenu>
    </>
  );
};

export default TabMenu;
