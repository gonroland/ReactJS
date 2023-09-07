import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand" >Wilson Store Argentina</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div>Productos</div>
              </li>
              <li className="nav-item">
                <div>Sobre Wilson</div>
              </li>
              <li className="nav-item">
                <div><CartWidget /></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  export default NavBar