import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import useCarousel from '@utils/hooks/useCarousel';
import useSelection from '@utils/hooks/useSelection';
import UserContext from '@utils/userContext';
import CartContext from '@utils/cartContext';

import { useDefaultMediaQueries } from '@utils/hooks/useMediaQuery';

import { useAuthentication } from '@components/Authentication/useAuthentication';
import MobileMenu from '@components/Layout/MobileMenu';
import Logo from '@images/logo.png';

import IconsNavigation from './IconsNavigation';
import {
  HeaderCarouselContainer,
  HeaderChildrenContainer,
  HeaderStyles,
  HeaderImage,
  HeaderMobileImage,
  HeaderContainer,
  Image,
  HeaderBackButton,
  HeaderMobileTitle,
} from './styles';

const Header = ({
  carouselItems,
  short,
  className,
  children,
  light,
  backText,
  mobileTitle,
  placeholderImage,
  cartData,
  isHomePage,
}) => {
  const [isMobile] = useDefaultMediaQueries();
  // eslint-disable-next-line no-unused-vars
  const [activeItem, activeItemIndex, changeActiveItem] = useSelection({
    items: carouselItems,
    selectedIndex: 0,
  });
  const [openMenu, setOpenMenu] = useState();
  const [openCurrency, setOpenCurrency] = useState(false);
  const { state: user } = useContext(UserContext);
  const { state: cart, dispatch: cartDispatch } = useContext(CartContext);

  useEffect(() => {
    if (
      cartData &&
      cart &&
      cartData.id &&
      (cartData.id !== cart.id || !cart.lineItems || cartData.lineItems.length > cart.lineItems.length)
    ) {
      cartDispatch({
        type: 'set-cart-cookie',
        data: cartData,
      });
    }
  }, [cartData]);

  useCarousel({
    activeItemIndex,
    changeActiveItem,
    items: carouselItems,
  });

  const { verifyAuthenticationControl } = useAuthentication();
  const onAuthenticating = () => {
    verifyAuthenticationControl(true);
  };

  const handleToggleMenu = () => setOpenMenu(!openMenu);

  const handleToggleCurrency = () => {
    setOpenCurrency(!openCurrency);
  };

  return (
    <HeaderStyles light={light} className={className} short={short}>
      <figure>
        {!!carouselItems.length &&
          carouselItems.map((current, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <HeaderImage
                isHomePage={isHomePage}
                src={current.imageURL || placeholderImage}
                active={activeItemIndex === index}
              />
              <HeaderMobileImage
                isHomePage={isHomePage}
                src={current.mobileImageURL || placeholderImage}
                active={activeItemIndex === index}
              />
            </div>
          ))}
      </figure>

      <HeaderContainer short={short}>
        <h1>
          <Link href="/">
            <a>{backText && isMobile ? <HeaderBackButton>{backText}</HeaderBackButton> : <Image src={Logo} />}</a>
          </Link>
        </h1>

        {backText && isMobile && <HeaderMobileTitle>{mobileTitle}</HeaderMobileTitle>}

        <IconsNavigation
          onMenuClick={handleToggleMenu}
          onAuthenticating={onAuthenticating}
          onToggleCurrency={handleToggleCurrency}
          openCurrency={openCurrency}
          isAuthenticated={Boolean(user.id)}
          cartItems={cart.lineItems}
        />
      </HeaderContainer>

      <HeaderChildrenContainer openCurrency={openCurrency}>
        {!!children && children(activeItem)}
      </HeaderChildrenContainer>

      {carouselItems.length > 1 && (
        <HeaderCarouselContainer
          // eslint-disable-next-line no-nested-ternary
          style={{ zIndex: 6, bottom: isMobile ? '7rem' : typeof short === 'string' ? '3rem' : '12rem' }}
        />
      )}

      <MobileMenu open={openMenu} onClose={handleToggleMenu} onAuthenticating={onAuthenticating} />
    </HeaderStyles>
  );
};

Header.defaultProps = {
  short: false,
  carouselItems: [],
};

Header.propTypes = {
  short: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: PropTypes.array,
};

export default Header;
