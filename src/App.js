import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Cart from "./Page/Cart/Cart";
import Order from "./Page/Order/Order";
import Footer from "./Page/Footer/Footer";
import { useState } from "react";
import Login from "./Components/Auth/Login";

function App() {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login/>: <></>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
