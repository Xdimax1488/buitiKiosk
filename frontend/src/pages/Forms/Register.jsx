import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="login_page">
        <div className="login_page-container">
            <form className="login_page-form">
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type='submit' >Register</button>
                <p>
                    <Link to={'/login'} > <span>I have account <strong>Login</strong></span> </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Register