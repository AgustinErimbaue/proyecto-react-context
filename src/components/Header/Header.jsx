import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import OIG4 from "../../assets/OIG4.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="h1-header">
        <h1>
          <div>ElectroHub</div>
        </h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>

          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li className="cart-icon">
            <Link to="/Cart">
              <img src={OIG4} alt="Imagen de carrito" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
