import React from 'react'
import { Link } from 'react-router-dom'
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

const ItemListContainer = () => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <div className="card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                Detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer
