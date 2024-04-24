import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Cart from "./Page/Cart/Cart";
import Order from "./Page/Order/Order";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/orders" element={<Order/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
