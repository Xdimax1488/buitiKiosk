import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../../Redux/Actions/CartAction';

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };
  return (
    <div className="login_page">
      <div className="login_page-container">
        <h4>delivery adress</h4>
        <form className="login_page-form " onSubmit={submitHandler}>
          <div className="radio_input">
            <input
              className="radio"
              type="radio"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>PayPal or Credit Cart</span>
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
