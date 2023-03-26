import React from 'react';
import { Link } from 'react-router-dom';


import { GiPositionMarker } from 'react-icons/gi';
import { IoMdPerson } from 'react-icons/io';
import { TbTruckDelivery } from 'react-icons/tb';
import IMG_test from '../../asets/MX472.jpeg';

import './PlaceOrder.scss';

const PlaceOrder = () => {
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
              <p>Dima Dima</p>
              <p>dk@gmail.com</p>
            </div>
          </div>
          <div className="header_colum">
            <div className="colum_icon">
              <TbTruckDelivery size={25} />
            </div>
            <div className="colum_desc">
              <h4>Order Info</h4>
              <p>Shipping: Uk</p>
              <p>Pay method: Paypal</p>
              <p className="pay_info"> Paid on Jan 02 2022</p>
            </div>
          </div>
          <div className="header_colum">
            <div className="colum_icon">
              <GiPositionMarker size={25} />
            </div>
            <div className="colum_desc">
              <h4>Deliver to</h4>
              <p>Address: Wroclaw,cur 4</p>
              <p className="deliv_info">Not Delivered</p>
            </div>
          </div>
        </div>
        <div className="placeorder_body">
          <div className="body_orders">
            <div className="order">
              <div className="orders_img">
                <img src={IMG_test} alt="" />
              </div>

              <Link to={'/'} className="title">
                super item
              </Link>
              <div className="quantiti">
                <h4>quantity</h4>
                <h4>4</h4>
              </div>
              <div className="total">
                <h4>subtotal</h4>
                <h4>$545</h4>
              </div>
            </div>
            <div className="order">
              <div className="orders_img">
                <img src={IMG_test} alt="" />
              </div>

              <Link to={'/'} className="title">
                super item
              </Link>
              <div className="quantiti">
                <h4>quantity</h4>
                <h4>4</h4>
              </div>
              <div className="total">
                <h4>subtotal</h4>
                <h4>$545</h4>
              </div>
            </div>
          </div>

          <div className="body_table">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>$86</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>$86</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$86</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$86</td>
                </tr>
              </tbody>
            </table>

            <div className="pay_button">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
