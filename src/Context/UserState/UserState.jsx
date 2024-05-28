import axios from "axios";
import { createContext, useReducer } from "react";

const token = localStorage.getItem("token") || "";

const initialState = {
  token: token,
  user: null,
};

const API_URL = "http://localhost:3000/users";

export const UserContext = createContext(initialState);

export const UserProvider = async ({ children }) => {
  const { state, dispatch } = useReducer(UserContext, initialState);

  const login = async (user) => {
    const res = await axios.post(API_URL + "/login", user);
    dispatch({
      type: "LOGIN",
      payload: res.data.user,
    });
    if (res.data.user) {
      localStorage.setItem("token", res.data.token);
    }
  };
  return (
    <UserContext.Provider>
      value =
      {{
        token: state.token,
        user: state.user,
        login,
      }}
    </UserContext.Provider>
  );
};
