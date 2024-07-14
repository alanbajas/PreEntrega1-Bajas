import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">Tuper's Pizzas</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nuestra cocina</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Promociones</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
