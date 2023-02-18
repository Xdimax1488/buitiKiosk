import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/Actions/UserActions';

import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHadler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  console.log(userLogin)
  return (
    <div className="login_page">
      {error && <p>{error}</p>}
      <div className="login_page-container">
        <form className="login_page-form" onSubmit={submitHadler}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              <span>Create Account</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
