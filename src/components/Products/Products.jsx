import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Product from "./Product";

const Products = () => {
  const { products, getProducts } = useContext(GlobalContext);

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  const product = products.map((product, index) => {
   return <Product key={index} infoProduct={product} />;
  });
  return <div>{product}</div>;
};

export default Products;
