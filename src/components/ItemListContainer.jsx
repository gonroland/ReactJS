import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firestore from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    //const firestore = firebase.firestore()
    const productsCollection = collection(firestore, "/product")
    
    getDocs(productsCollection)
      .then((querySnapshot) => {
        const productData = []
        querySnapshot.forEach((doc) => {
          productData.push({ id: doc.id, ...doc.data() })
        })
        setProducts(productData)
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error)
      })
  }, [])

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <div className="card">
            <img
              src={`src/assets/${product.image}`}
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
  )
}

export default ItemListContainer
