import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { UserContext } from "../../Context/UserState/UserState";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  return (
    <div className="header-container">
      <div className="h1-header">
        <h1>
          <div>ElectroHub</div>
        </h1>
      </div>
      <div>
        <ul>
          {token ? (
            <>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>

              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li className="cart-icon">
                <Link to="/Cart">
                  <Badge count={5} size="small">
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </li>
              <li>
                <button onClick={logout} className="logout-button">Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
