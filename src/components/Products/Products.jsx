import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Product from "./Product";
import "./Product.scss";

const Products = () => {
  const { products, getProducts, addCart } = useContext(GlobalContext);

  useEffect(() => {
    getProducts();
  }, []);
 
 
  const productList = products.map((product, index) => (
    <div key={index} className="product-item">
      <Product infoProduct={product} />
      <button className="add-cart-button"  onClick={() => addCart(product)}>Add Cart</button>
    </div>
  ));

  return <div className="product-list">{productList}</div>;
};

export default Products;