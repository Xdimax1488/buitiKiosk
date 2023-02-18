import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Navbar } from './components';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';


import Product from './pages/Product/Product';
import Profail from './pages/Profail/Profail';
import Login from './pages/Forms/Login';
import Register from './pages/Forms/Register';
import Cart from './pages/Cart/Cart';
import Shipping from './pages/Forms/Shipping';
import Payment from './pages/Forms/Payment';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import OrderScreen from './pages/PlaceOrder/OrderScreen';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profail />} />
        <Route path="/cart/:id?" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order" element={<OrderScreen />} />
        <Route path="/store" element={<Store />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
