const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span style={{ color: 'black' }}>{itemCount}</span>
    </div>
  );
};

export default CartWidget
