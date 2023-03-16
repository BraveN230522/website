import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { MenuStyles, MenuItem, MenuLink } from './styles';

const mockMenu = [
  { id: 1, menu: 'Events', href: '/events' },
  { id: 2, menu: 'Cities', href: '/city/21' },
  { id: 3, menu: 'Hotels', href: '/hotels' },
  // { id: 4, menu: 'Experiences', href: '/experience/1' },
  { id: 4, menu: 'About', href: '/about' },
];

const PAGE_NAME_REGEX = /^(\/\w+)/;

const Menu = () => {
  const router = useRouter();

  const getActiveLink = url => {
    const urlMatch = url.match(PAGE_NAME_REGEX);
    const pathNameMatch = router.pathname.match(PAGE_NAME_REGEX);

    return urlMatch && pathNameMatch && urlMatch[0] === pathNameMatch[0];
  };

  return (
    <MenuStyles>
      {mockMenu.map(item => (
        <MenuItem key={item.id}>
          <Link href={item.href} passHref>
            <MenuLink activeLink={getActiveLink(item.href)}>{item.menu}</MenuLink>
          </Link>
        </MenuItem>
      ))}
    </MenuStyles>
  );
};

export default Menu;
