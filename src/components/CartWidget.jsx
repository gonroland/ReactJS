import { cartCount } from './ItemListDetail'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span style={{ color: 'black' }}>{cartCount}</span>
    </div>
  );
};

export default CartWidget
