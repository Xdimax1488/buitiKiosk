import React from 'react'
import { Link } from 'react-router-dom'

import './Login.scss'

const Login = () => {
  return (
    <div className="login_page">
        <div className="login_page-container">
            <form className="login_page-form">
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type='submit' >Login</button>
                <p>
                    <Link to={'/register'} > <span>Create Account</span> </Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login