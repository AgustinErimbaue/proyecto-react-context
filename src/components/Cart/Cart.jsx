import React, { useContext, useEffect } from "react";
import "./Cart.scss";
import { GlobalContext } from "../../Context/GlobalState";
import orderService from "../../service/OrderService";
const Cart = () => {
  const { cart, clearCart } = useContext(GlobalContext);

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
      <button className="clear-cart-button" onClick={() => clearCart()}>
        Clear cart
      </button>
      <button className="create-order-button" onClick={() => orderService.createOrder()}>
        Create order
      </button>
    </div>
  );
};

export default Cart;
