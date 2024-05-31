import React, { useContext, useEffect, useState } from "react";
import "./Cart.scss";
import { GlobalContext } from "../../Context/GlobalState";
import orderService from "../../service/OrderService";
import { Space, Alert } from "antd";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { token, logout } = useContext;
  const { cart, clearCart } = useContext(GlobalContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleCreateOrder = () => {
    orderService.createOrder(cart);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      clearCart();
      navigate("/Profile");
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>You don't have any added products</span>;
  }

  const cartItems = cart.map((cartItem, index) => {
    return (
      <div className="cart-item" key={index}>
        <div className="cart-item-name">{cartItem.name}</div>
        <div className="cart-item-price">${cartItem.price}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="cart-container">{cartItems}</div>
      <div className="buttons">
        <button className="clear-cart-button" onClick={() => clearCart()}>
          Clear cart
        </button>
        <button className="create-order-button" onClick={handleCreateOrder}>
          Create order
        </button>
      </div>
      <Space direction="vertical" style={{ width: "100%" }}>
        {showAlert && (
          <Alert
            message="Order Created"
            description="Your order has been created successfully."
            type="success"
          />
        )}
      </Space>
    </div>
  );
};

export default Cart;
