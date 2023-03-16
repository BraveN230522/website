import React, { useRef, useEffect, useState, useContext } from 'react';
import NewEvents from '@components/EventPage/NewEvents';

import CartContext from '@utils/cartContext';

import { SeatSelectionFrame, LoadingCartId } from './styles';

const SeatSelection = ({ event, eventId }) => {
  const {
    id,
    url,
    urlType,
    price: { currency },
  } = event;
  const productId = id;
  const [callbackUrl, setCallbackUrl] = useState('');
  const ref = useRef();
  const { state: cart } = useContext(CartContext);
  // const apiDomain = process.env.PUNCHOUT_BASE_URL || 'https://apidev2.sportswhereiam.com/punchout.html';
  const apiDomain = url;

  useEffect(() => {
    setCallbackUrl(`//${window.location.host}/checkout`);
  }, []);

  if (!cart.id) {
    return <LoadingCartId>Searching for great seats. Please wait...</LoadingCartId>;
  }

  const cartId = cart.id;
  const channel = 'SWiAM';

  const onLoad = () => {
    // TODO: check if the iframe loading stuck
    //
    // If the productId has expired, for instance, the iframe keeps loading forever.
    // This happens even in the current live website!
    // We might check the 'loadingImage' element rendered by the iframe.
    // If it has a style different than 'display: none' for more than 10 seconds,
    // It is likely we got an error while the iframe was loading
    // so we can hide it and display a message to the user.
    // To do so, we can make use of the iframe ref:
    //
    // const iframeElem = ref.current;
    //
    // However, we need to guarantee same origin.
  };
  return (
    (urlType === 'PUNCHOUT' && (
      <SeatSelectionFrame
        ref={ref}
        id="event-seating-map-selection"
        title="Event seating selection"
        onLoad={onLoad}
        src={`${apiDomain}?channel=${channel}&cartId=${cartId}&currency=${currency}&eventId=${eventId}&productId=${productId}&callbackUrl=${callbackUrl}`}
        // src="https://apidev2.sportswhereiam.com/punchout.html?channel=SWiAM&cartId=FOJ6RH&currency=AUD&productId=a371492b1bab78b56de4&channel=SWiAM&callbackUrl=http://localhost.com:3000/checkout"
      />
    )) || <NewEvents event={{ ...event, eventId }} cartId={cartId} />
  );
};

export default SeatSelection;
