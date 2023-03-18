import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { Footer, Navbar } from './components';
import Home from './pages/Home/Home';

import Cart from './pages/Cart/Cart';

import Login from './pages/Forms/Login';
import Payment from './pages/Forms/Payment';
import Register from './pages/Forms/Register';
import Shipping from './pages/Forms/Shipping';
import OrderScreen from './pages/PlaceOrder/OrderScreen';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Product from './pages/Product/Product';
import Profail from './pages/Profail/Profail';
import Store from './pages/Store/Store';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name_category" element={<Store/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profail />} />
        <Route path="/cart/:id?" element={<Cart />} />
        <Route path="/login/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order" element={<OrderScreen />} />

        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
