import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Checkout = () => {
  const MySwal = withReactContent(Swal);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    cardType: 'Visa',
    location: '',
  });
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isVisaCard = (cardNumber) => {
    return /^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber);
  };

  const isAmexCard = (cardNumber) => {
    return /^3[47][0-9]{13}$/.test(cardNumber);
  };

  const handleBuy = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'Por favor, ingrese su nombre.';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Por favor, ingrese su apellido.';
    }

    if (!formData.email) {
      newErrors.email = 'Por favor, ingrese su correo electrónico.';
    }

    if (!formData.location) {
      newErrors.location = 'Por favor, ingrese su ubicación.';
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Por favor, ingrese su número de tarjeta.';
    } else {
      if (formData.cardType === 'Visa' && !isVisaCard(formData.cardNumber)) {
        newErrors.cardNumber = 'El número de tarjeta Visa no es válido.';
      } else if (formData.cardType === 'Amex' && !isAmexCard(formData.cardNumber)) {
        newErrors.cardNumber = 'El número de tarjeta Amex no es válido.';
      }
    }

    if (Object.keys(newErrors).length === 0) {
      const orderData = {
        ...formData,
        products: cartItems,
      };
      localStorage.setItem('orderData', JSON.stringify(orderData));

      MySwal.fire({
        title: '¡Gracias por tu compra!',
        text: 'Tu pedido ha sido procesado con éxito.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('cart');
          window.location.href = '/';
        }
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            placeholder="Nombre"
          />
          {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            placeholder="Apellido"
          />
          {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Correo Electrónico"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="form-control"
            placeholder="Número de Tarjeta"
          />
          {errors.cardNumber && <div className="text-danger">{errors.cardNumber}</div>}
        </div>
        <div className="form-group">
          <select name="cardType" value={formData.cardType} onChange={handleChange} className="form-control">
            <option value="Visa">Visa</option>
            <option value="Amex">Amex</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            placeholder="Ubicación"
          />
          {errors.location && <div className="text-danger">{errors.location}</div>}
        </div>
      </form>
      <h3 className="mt-4">Resumen de Compra:</h3>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img
                  src={`/src/assets/${item.product.image}`}
                  alt={item.product.name}
                  className="img-thumbnail"
                  width="100"
                  height="100"
                />
              </div>
              <div className="col-md-6">
                <span>{item.product.name}</span>
              </div>
              <div className="col-md-2">
                <span>Cantidad: {item.quantity}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleBuy} className="btn btn-primary mt-4">
        Comprar
      </button>
    </div>
  );
};

export default Checkout;
