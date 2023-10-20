import React, { useEffect, useState } from 'react';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalCount);
    };

    updateCartCount();

    window.addEventListener('storage', updateCartCount);
    
  }, []);

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span style={{ color: 'black' }}>{cartCount}</span>
    </div>
  );
};

export default CartWidget;
