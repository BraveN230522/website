import OrderImg from '@images/Order/order.png';

const mockOrder = {
  img: OrderImg,
  alt: 'Super Game',
  gameTitle: 'New York Knicks vs. Chicago Bulls',
  gameTime: '8pm EST, Sun 22 Nov 2020',
  gameLocal: 'Madison Square Garden',
  gameAddress: '4 Pennsylvania Plaza, New York, NY 10001, United States',
};

const mockEticket = {
  row: 'Row 5',
  section: 'Section 220',
  seats: 'Seats 55A, 55B, 55C, 55D, 55E',
  price: '5 x $74.52',
};

const mockTotalPrice = {
  tickets: 5,
  ticketPrice: 74.52,
  totalTickets: 372.6,
  currency: 'AUD',
  feePercent: 15,
  feeValue: 55.89,
  total: 428.49,
};

const mockOffers = [
  ...Array.from({ length: 5 }, (v, index) => ({
    hotelID: index,
    fromPrice: {
      amount: 103,
    },
    hotelName: 'Hilton, Miami',
    venueAddress: 'Best for Super Bowl LIV',
    hotelImage:
      'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/81/93/8193_v4.jpeg',
  })),
];

export { mockOrder, mockEticket, mockTotalPrice, mockOffers };
