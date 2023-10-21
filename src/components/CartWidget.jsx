import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

function CartWidget() {
  const { cart } = useCart();

  var total = 0

  cart.forEach(element => { total += element.quantity});

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span style={{ color: 'black' }}>{total}</span>
    </div>
  );
};

export default CartWidget;
