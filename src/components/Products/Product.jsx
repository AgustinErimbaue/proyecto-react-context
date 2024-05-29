import React, { useContext } from "react";
import "./Product.scss"
import { GlobalContext } from "../../Context/GlobalState";
const Product = ({infoProduct}) => {

  return (
    <div>
      <div className="product-card">
        <h2 className="product-name">{infoProduct.name}</h2>
        <p className="product-description">{infoProduct.description}</p>
        <p className="product-price">{infoProduct.price}</p>
        <p className="product-category">{infoProduct.category}</p>
      </div>
    </div>
  );
};

export default Product;
