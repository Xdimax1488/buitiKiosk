import React from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="login_page">
      <div className="login_page-container" onSubmit={submitHandler}>
        <h4>delivery adress</h4>
        <form className="login_page-form">
          <input type="text" placeholder="Enter address" />
          <input type="text" placeholder="Enter city" />
          <input type="email" placeholder="Enter post code" />
          <input type="password" placeholder="Enter country" />

          <Link className='link' to="/payment">
            <button type="submit">Continue</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
