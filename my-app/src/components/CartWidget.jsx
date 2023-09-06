import React from 'react'

const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="badge badge-pill badge-danger">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
