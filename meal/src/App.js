import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Donor from './Donor';
import Home from './Home';
import Service from './Service';
import About from './About';
import LoginRegister from './LoginRegister';
import Cart from './Cart';
import Footer from './Footer';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/About" element={<About />} />
            <Route path="/LoginRegister" element={<LoginRegister />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Donor" element={<Donor />} />
          </Routes>
        </CartProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
