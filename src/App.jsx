import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { GlobalProvider } from "./Context/GlobalState";
import { UserProvider } from "./Context/UserState/UserState";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <GlobalProvider>
          <UserProvider>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </UserProvider>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
