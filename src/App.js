import React from "react";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./components/Product/Products";
import Checkout from "./components/Checkout"
import Product from "./components/Product/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<HeroSection />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path ="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
