import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { UserContext } from "../../Context/UserState/UserState";

const Header = () => {
  const navigate=useNavigate()
  const { token, logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
    navigate("/"); 
  };
  
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
              <li>
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </li>
              <li className="cart-icon">
                <Link to="/Cart">
                  <Badge count={5} size="small">
                    <ShoppingCartOutlined style={{fontSize: '24px'}}/>
                  </Badge>
                </Link>
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
