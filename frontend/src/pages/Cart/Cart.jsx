import React from 'react';
import { Link } from 'react-router-dom';

import { MdRemoveCircle } from 'react-icons/md';
import IMG_test from '../../asets/MX472.jpeg';

import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart_page">
      <div className="cart_alert">
        total cart products
        <Link className="total_products" to={'/cart'}>
          (1)
        </Link>
      </div>
      <div className="cart_item">
        <div className="remuve_button">
          <MdRemoveCircle size={25} style={{ color: '#ff0000' }} />
        </div>
        <div className="cart_img">
          <img src={IMG_test} alt="" />
        </div>
        <div className="item_title">
          <Link to="#">
            <h4>some name product </h4>
          </Link>
        </div>
        <div className="cart_quantity">
          <h6>quantity</h6>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="cart_price">
          <h6>total</h6>
          <h4>$100</h4>
        </div>
      </div>
      <div className="cart_total">
        <span className="cart_total-total">total:</span>
        <span className="cart_total-price">$100</span>
      </div>
      <div className="cart_buttons">
        <Link className="cart_button" to={'/'}>
          <button> continue to shopping</button>
        </Link>
        <div className="cart_button ">
          <Link to="/shipping">
            <button className=" gren">checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
