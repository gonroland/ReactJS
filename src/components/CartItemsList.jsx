import React from 'react';
import { Link } from 'react-router-dom';

const CartItemsList = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex((item, i) => i === index);
  
    if (productIndex !== -1) {
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
      } else {
        updatedCart.splice(productIndex, 1);
      }
    }
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  }  

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito de compras</h2>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img src={`/src/assets/${item.product.image}`} alt={item.product.name} className="img-thumbnail" width="650" height="650" />
              </div>
              <div className="col-md-6">
                <span>{item.product.name}</span>
              </div>
              <div className="col-md-2">
                <span>Cantidad: {item.quantity}</span>
              </div>
              <div className="col-md-2">
                <button onClick={() => handleRemoveFromCart(index)} className="btn btn-danger">X</button>
              </div>
            </div>
            {index < cartItems.length - 1 && <hr />}
          </li>
        ))}
      </ul>
      <h3 className="mt-4">Cantidad Total: {cartItems.reduce((total, item) => total + item.quantity, 0)}</h3>
      <button className="btn btn-primary mt-4">
        <Link to="/checkout" className="nav-link">Checkout</Link>
      </button>
    </div>
  );
};

export default CartItemsList;
