import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Icon from '@components/common/Icon';
import UserContext from '@utils/userContext';

import { MenuSelectCurrencyStyles } from './styles';

const MenuSelectCurrency = ({}) => {
  // const { state: user, dispatch: userDispatch } = useContext(UserContext);
  // const isLoggedIn = user.id;

  return (
    <MenuSelectCurrencyStyles>
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
    </MenuSelectCurrencyStyles>
  );
};

export default MenuSelectCurrency;
