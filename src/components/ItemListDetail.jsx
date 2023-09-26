import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import blade from '../assets/blade.jpg'
import burn from '../assets/burn.jpg'
import prostaff from '../assets/prostaff.jpg'
import ultra from '../assets/ultra.jpg'

const products = [
  { id: 'blade', name: 'Raqueta Wilson Blade', image: blade },
  { id: 'burn', name: 'Raqueta Wilson Burn', image: burn },
  { id: 'prostaff', name: 'Raqueta Wilson Pro Staff', image: prostaff },
  { id: 'ultra', name: 'Raqueta Wilson Ultra', image: ultra },
];

const ItemListDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>
  }

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1)
    }
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="col-md-6">
        <h3>{product.name}</h3>
        <button onClick={handleAddToCart} className="btn btn-primary">
          Agregar al carrito
        </button>
        <button onClick={handleRemoveFromCart} className="btn btn-danger">
          Quitar del carrito
        </button>
        <Link to="/product">
          <button className="btn btn-secondary">Volver</button>
        </Link>
      </div>
      <div className="col-md-12">
      </div>
    </div>
  );
};

export const cartCount = 0
export default ItemListDetail
