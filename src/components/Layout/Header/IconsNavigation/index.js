import React from 'react';
import PropTypes from 'prop-types';

import { useDefaultMediaQueries, useMediaQuery } from '@utils/hooks/useMediaQuery';

import Link from 'next/link';
import search from '@svg/search-fill.svg';
import chat from '@svg/chat.svg';
import cart from '@svg/cart.svg';
import user from '@svg/user.svg';
import bars from '@svg/bars.svg';
import dollar from '@svg/dollar.svg';

import { NavigationWrapper, NavigationItem, CurrencyModal } from './styles';

const IconsNavigation = ({
  onMenuClick,
  onToggleCurrency,
  openCurrency,
  onAuthenticating,
  isAuthenticated,
  cartItems = [],
}) => {
  const [isMobile] = useDefaultMediaQueries();
  const isDisplayedCurrency = useMediaQuery('(min-width: 961px)');

  // const dataNumberCart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('numberCart')) : null;

  return (
    <nav>
      <NavigationWrapper>
        {!isMobile && isAuthenticated && (
          <NavigationItem>
            <Link href="/">
              <a>
                <img src={search} alt="search" />
              </a>
            </Link>
          </NavigationItem>
        )}
        {/* {isDisplayedCurrency && (
          <NavigationItem onMouseOver={onToggleCurrency} onMouseOut={onToggleCurrency} className="CurrencyIcon">
            <Link href="/">
              <a>
                <img src={dollar} alt="money" />
              </a>
            </Link>
            <CurrencyModal openCurrency={openCurrency} className={'CurrencyModal'}>
              <h3>Currency</h3>
              <ul>
                <li className={'active'}>
                  <span>$</span> AUD
                </li>
                <li>
                  <span>$</span> USD
                </li>
                <li>
                  <span>£</span> GBP
                </li>
                <li>
                  <span>€</span> EUR
                </li>
                <li>
                  <span>HK$</span> HKD
                </li>
                <li>
                  <span>$</span> SGD
                </li>
                <li>
                  <span>$</span> NZD
                </li>
                <li>
                  <span>$</span> CAD
                </li>
              </ul>
            </CurrencyModal>
          </NavigationItem>
        )} */}
        <NavigationItem items={cartItems.filter(item => item.status !== 'FAILED').length}>
          <Link href="/checkout">
            <a>
              <img src={cart} alt="cart" />
            </a>
          </Link>
        </NavigationItem>

        {!isMobile && (
          <NavigationItem>
            <a onClick={onAuthenticating}>
              <img src={user} alt="login or register" />
            </a>
          </NavigationItem>
        )}

        <NavigationItem>
          <a onClick={onMenuClick}>
            <img src={bars} alt="bars" />
          </a>
        </NavigationItem>
      </NavigationWrapper>
    </nav>
  );
};

IconsNavigation.defaultProps = {
  onMenuClick: () => null,
};

IconsNavigation.propTypes = {
  onMenuClick: PropTypes.func,
};

export default IconsNavigation;
