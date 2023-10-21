import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firestore from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from './CartContext';

const ItemListDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  }

  const handleAddToCart = () => {
    const cartItem = {
      product: product,
      quantity: quantity,
    }

    addToCart(cartItem)

    const existingCart = JSON.parse(localStorage.getItem('cart')) || []
    const updatedCart = [...existingCart, cartItem]
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  useEffect(() => {
    const productDocRef = doc(firestore, 'product', id)

    getDoc(productDocRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const productData = docSnap.data()
          setProduct(productData)
        } else {
          setProduct(null)
        }
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error)
      })
  }, [id])

  if (product === null) {
    return <div>Producto no encontrado</div>
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={`/src/assets/${product.image}`} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.data}</p>
          <div className="form-group">
            <label>Cantidad:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="form-control"
            />
          </div>
          <button onClick={handleAddToCart} className="btn btn-primary">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemListDetail
