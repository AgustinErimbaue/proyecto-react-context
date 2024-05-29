import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import products from "./AppReducer";

const cart =localStorage.getItem("cart") || []
const initialState = {
  products: [],
  cart: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/products");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.products,
    });
  };
  const addCart = (products) => {
    dispatch({
      type: "ADD_CART",
      payload: products,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
