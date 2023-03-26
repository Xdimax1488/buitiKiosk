import React from 'react';
import { Link } from 'react-router-dom';

import { GiPositionMarker } from 'react-icons/gi';
import { IoMdPerson } from 'react-icons/io';
import { TbTruckDelivery } from 'react-icons/tb';

import { useDispatch, useSelector } from 'react-redux';
import './PlaceOrder.scss';

const PlaceOrder = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //calculate price
  const addDecimals =(num)=>{
    return (Math.round(num * 100)/100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc,item)=>acc + item.price*item.qty,0)
  )
  cart.shippingPrice=addDecimals(cart.itemsPrice>100?0:20)
  cart.totalPrice = (Number(cart.itemsPrice)+Number(cart.shippingPrice)).toFixed(2)

  const placeOrderHandler = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="placeorder">
      <div className="placeorder_inner">
        <div className="placeorder_header">
          <div className="header_colum">
            <div className="colum_icon">
              <IoMdPerson size={25} />
            </div>
            <div className="colum_desc">
              <h4>Customer</h4>
              <p>{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
          <div className="header_colum">
            <div className="colum_icon">
              <TbTruckDelivery size={25} />
            </div>
            <div className="colum_desc">
              <h4>Order Info</h4>
              <p>Shipping: {cart.shippingAddress.country}</p>
              <p>Pay method: {cart.paymentMethod}</p>
            </div>
          </div>
          <div className="header_colum">
            <div className="colum_icon">
              <GiPositionMarker size={25} />
            </div>
            <div className="colum_desc">
              <h4>Deliver to</h4>
              <p>
                Address:{cart.shippingAddress.city}, {cart.shippingAddress.address}{' '}
                {cart.shippingAddress.postCode}
              </p>
            </div>
          </div>
        </div>
        <div className="placeorder_body">
          {cartItems.length === 0 ? (
            <span>Error</span>
          ) : (
            <div className="body_orders">
              {cartItems.map((item, index) => (
                <div className="order" key={index}>
                  <div className="orders_img">
                    <img src={item.image} alt="" />
                  </div>

                  <Link to={`/products/${item._id}`} className="title">
                  {item.name}
                  </Link>
                  <div className="quantity">
                    <h4>quantity</h4>
                    <h4>{item.qty}</h4>
                  </div>
                  <div className="total">
                    <h4>subtotal</h4>
                    <h4>${item.qty * item.price}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="body_table">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>${cart.itemsPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>${cart.shippingPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>${cart.totalPrice}</td>
                </tr>
              </tbody>
            </table>

            <Link to="/order">
              <button type="submit" onClick={placeOrderHandler}>PLACE ORDER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
