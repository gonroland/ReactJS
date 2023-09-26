import React from 'react';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import wilsonLogo from '../assets/wilson-logo.png'

const NavBar = ({ itemCount }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    margin: '0 10px',
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={wilsonLogo}
            alt="Wilson Logo"
            style={{ maxWidth: '150px', maxHeight: '50px', margin: '0 50px'}}
          />
          Wilson Store Argentina
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/product" style={linkStyle}>Productos</Link>
            </li>
            <li className="nav-item">
            <Link to="/sobre" style={linkStyle}>Sobre Wilson</Link>
            </li>
            <li className="nav-item">
              <CartWidget itemCount={itemCount} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
