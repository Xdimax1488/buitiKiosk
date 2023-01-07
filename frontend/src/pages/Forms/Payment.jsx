import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
    const submitHandler = (e)=>{
        e.preventDefault();
      }
  return (
    <div className="login_page">
      <div className="login_page-container" onSubmit={submitHandler}>
        <h4>delivery adress</h4>
        <form className="login_page-form ">
          <input type="radio" value="PayPal" placeholder="Enter address" />
          <label>PayPal or Credit Cart</label>

          <Link className='link' to="/placeorder">
            <button type="submit">Continue</button>
          </Link>
        </form>
      </div>
    </div>
    
  )
}

export default Payment