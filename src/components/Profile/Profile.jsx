import React, { useEffect, useContext } from "react";
import { UserContext } from "../../Context/UserState/UserState";
import "./Profile.scss";
import { Spin } from "antd";

const Profile = () => {
  const { getUserInfo, user, token } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  if (!user) {
    return <Spin size="large" />;
  }

  const orders = user.Orders;

  const orderCards = orders.map((order, i) => (
    <div key={i} className="order-card">
      <h3>Order: {order.id}</h3>
      <div className="products-list">
        {order.Products.map((product, j) => (
          <div key={j} className="product-item">
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p className="profile-info-line id">ID: {user.id}</p>
        <p className="profile-info-line">Name: {user.name}</p>
        <p className="profile-info-line">Email: {user.email}</p>
      </div>
      <div className="orderContainer">{orderCards}</div>
    </div>
  );
};

export default Profile;
