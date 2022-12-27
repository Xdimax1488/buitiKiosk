import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsPerson } from 'react-icons/bs';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import {RiArrowDownSFill} from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io';
import Plflag from '../../asets/pl-flag.png';
import Uaflag from '../../asets/ua-flag.png';

import './Navbar.scss';

const Navbar = () => {
  const [chuesContry, setChuesContry] = useState(false);
  const [open, setOpen] = useState(false);

  const flag = [Uaflag, Plflag];
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item-country" onClick={() => setChuesContry(!chuesContry)}>
            <img src={flag[0]} alt="" />
            <IoIosArrowDown />
            <div>
              {chuesContry && (
                <div className="sort_popup">
                  {flag.map((obj, i) => (
                    <Link key={i}>
                      <img src={obj} alt="" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            ButyKiosk
          </Link>
        </div>
        <div className="right">
          <div className="nav-item">
            <Link to='/' className="link nav-link">Home</Link>
            <Link  className="link nav-link">About</Link>
            <Link className="link nav-link">Contact</Link>
            <Link to = '/store' className="link nav-link">Store</Link>
          </div>
          <div className="nav-icon">
            <div className="log-person" onClick={() => setOpen(!open)}>
              <span>name</span>
              <BsPerson />
              <RiArrowDownSFill/>
              <div me="sort_popup">
                {open && (
                  <div className="sort_popup-items">
                    <Link to='/profail' className='links'>profile</Link>
                    <Link className='links'>logout</Link>
                    
                  </div>
                )}
              </div>
            </div>
            <button type="button" className="shop-icon" onClick="">
              <HiOutlineShoppingCart />
              <span className="shop-icon-qty">1</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
