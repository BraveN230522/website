import React from 'react';
import CheckoutSection from '../../../Common/CheckoutSection';
import TotalPrice from '../../../Common/TotalPrice';
import DiscountSection from './DiscountSection';
import { OrderSection } from '../styles';

export default function GrandTotal({
  fee,
  discounts,
  items,
  promoCodes,
  setPromoCodes,
  cartId,
  promoCodeError,
  total,
  isOrderTotal,
}) {
  return (
    <OrderSection bigPadding bordered>
      <CheckoutSection title={isOrderTotal ? 'Order Total' : 'Grand Total'} />
      {items.find(item => item.product.type !== 'HOTEL') !== undefined && (
        <DiscountSection
          label="Discount"
          promoCodes={promoCodes}
          discounts={discounts}
          setPromoCodes={setPromoCodes}
          cartId={cartId}
          promoCodeError={promoCodeError}
          isOrderTotal={isOrderTotal}
        />
      )}
      <TotalPrice label="Total" showFeeInfo={false} fee={fee} items={items} total={total} />
    </OrderSection>
  );
}
