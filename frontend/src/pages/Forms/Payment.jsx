import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login_page">
      <div className="login_page-container" onSubmit={submitHandler}>
        <h4>delivery adress</h4>
        <form className="login_page-form ">
          <div className="radio_input">
            <input className='radio' type="radio" value="PayPal" placeholder="Enter address" />
            <span>PayPal or Credit Cart</span>
          </div>

          <Link className="link" to="/placeorder">
            <button type="submit">Continue</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Payment;
