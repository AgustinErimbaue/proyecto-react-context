import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Product from "./Product";
import "./Product.scss"

const Products = () => {
  const { products, getProducts } = useContext(GlobalContext);

  useEffect(() => {
    getProducts();
  }, []);
  const product = products.map((product, index) => {
   return <Product key={index} infoProduct={product} />;
  });
  return <div className="product-list">{product}</div>;
};

export default Products;
