import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Icon from '@components/common/Icon';
import UserContext from '@utils/userContext';
import MenuSelectCurrency from './block/MobileMenuSelectCurrency';

import {
  MobileMenuStyles,
  MobileMenuLeft,
  MobileMenuHeader,
  MobileMenuItem,
  MobileMenuClose,
  MobileMenuContent,
  MobileMenuItems,
  MobileMenuBack,
} from './styles';

const MobileMenu = ({ open, onClose, onAuthenticating }) => {
  const { state: user, dispatch: userDispatch } = useContext(UserContext);
  const isLoggedIn = user.id;

  const handleLogoutClick = () => {
    userDispatch({ type: 'logout' });
    onClose();
  };

  const [isCurrency, setIsCurrency] = useState(false);

  useEffect(() => {
    if (!open) setIsCurrency(false);
  }, [open]);

  return (
    <MobileMenuStyles aria-hidden={!open} data-testid="menu-mobile" open={open}>
      <MobileMenuLeft>
        <MobileMenuHeader>
          <div
            onClick={() => setIsCurrency(false)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              cursor: isCurrency ? 'pointer' : undefined,
            }}
          >
            <span>{isCurrency ? 'Currency' : 'Menu'}</span>
            {isCurrency && (
              <MobileMenuBack>
                <Icon name="chevronRight" width={32} height={32} color="#fff" />
              </MobileMenuBack>
            )}
          </div>
          <MobileMenuClose onClick={onClose}>
            <Icon name="close" width={24} height={24} color="#fff" />
          </MobileMenuClose>
        </MobileMenuHeader>
        {!isCurrency ? (
          <MobileMenuContent>
            <Link href="/" passHref>
              <MobileMenuItem featured onClick={isLoggedIn ? handleLogoutClick : onAuthenticating}>
                {isLoggedIn ? 'Logout' : 'Login / Register'} <Icon name="user" width={20} height={24} />
              </MobileMenuItem>
            </Link>
            <MobileMenuItems>
              <Link href="/" passHref>
                <MobileMenuItem>Home</MobileMenuItem>
              </Link>

              <Link href="/hotels/search/" passHref>
                <MobileMenuItem>Hotels</MobileMenuItem>
              </Link>

              <Link href="/about/" passHref>
                <MobileMenuItem>About</MobileMenuItem>
              </Link>
              <Link href="/contact/" passHref>
                <MobileMenuItem>Contact</MobileMenuItem>
              </Link>
              <button
                style={{ all: 'unset', cursor: 'pointer' }}
                onClick={() => {
                  setIsCurrency(true);
                }}
              >
                <MobileMenuItem>Currency</MobileMenuItem>
              </button>
            </MobileMenuItems>
          </MobileMenuContent>
        ) : (
          <MenuSelectCurrency setIsCurrency={setIsCurrency} />
        )}
      </MobileMenuLeft>
    </MobileMenuStyles>
  );
};

MobileMenu.defaultProps = {
  open: false,
  onClose: () => {},
};

MobileMenu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default MobileMenu;
