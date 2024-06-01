import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import { message } from "antd";
const token = localStorage.getItem("token") || "";

const initialState = {
  token: token,
  user: null,
};

const API_URL = "http://localhost:3000/users";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const register = async (user) => {
    try {

      console.log('User data to register:', user);
      
      const res = await axios.post(API_URL + '/register', user);
      console.log('User created:', res.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


  const login = async (user) => {
    try {
      const res = await axios.post(API_URL + "/login", user);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });

      if (res.data) {
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(API_URL + "/profile", {
        headers: {
          Authorization: token,
        },
      });
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        API_URL + "/logout",
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (res.data) {
        localStorage.removeItem("token");
        dispatch({
          type: "LOGOUT",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserInfo,
        logout,
        register
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
