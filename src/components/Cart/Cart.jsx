import React, { useContext, useEffect } from "react";
import "./Cart.scss";
import { GlobalContext } from "../../Context/GlobalState";

const Cart = () => {
  const { cart } = useContext(GlobalContext);
  useEffect(() => {
    localStorage.setItem("cart",cart)
  }, [cart]);
  if (cart.length <= 0) {
    return <span>You don't have any added products</span>;
  }
  const cartItem = cart.map((cartItem, index) => {
    return (
      <div className="cart" key={index}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price} €</span>
        {console.log(cartItem)}
      </div>
    );
  });
  return <div>{cartItem}</div>;
};

export default Cart;
