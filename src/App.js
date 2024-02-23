import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Cart from "./components/Cart"; // Import the Cart component
import AboutUs from "./components/Aboutus";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
