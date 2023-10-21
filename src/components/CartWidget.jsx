import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

function CartWidget() {
  const { cart } = useCart();

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span style={{ color: 'black' }}>{cart.length}</span>
    </div>
  );
};

export default CartWidget;
