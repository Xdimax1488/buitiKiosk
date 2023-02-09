import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { MdRemoveCircle } from 'react-icons/md';
import EmptyCart from '../../asets/empty-cart.png';

import { addToCart, removeFromCart } from '../../Redux/Actions/CartAction';
import './Cart.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();
  const location = useLocation();
  const productId = params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 3;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id)=>{
    dispatch(removeFromCart(id))
  
  }
  const checkOutHandler = ()=>{
    navigate('/login?redirect=shipping')
    }

  console.log();
  return (
    <div className="cart_page">
      {cartItems.length === 0 ? (
        <div className="empty_cart">
          <div className="empty_cart-inner">
            <img src={EmptyCart} alt="" />
            <h1>You'r cart is ampty</h1>
            <Link to={'/'}>
              <button className="select-btn">Shopping now</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="cart_alert">
            total cart products
            <Link className="total_products" to={'/cart'}>
              ({cartItems.length})
            </Link>
          </div>

          {cartItems.map((item) => (
            <div className="cart_item" key={item.product}>
              <div className="remuve_button" onClick={()=>removeFromCartHandler(item.product)}>
                <MdRemoveCircle size={25} style={{ color: '#ff0000' }} />
              </div>
              <div className="cart_img">
                <img src={item.image} alt="" />
              </div>
              <div className="item_title">
                <Link to={`/products/${item.product}`} >
                  <h4>{item.name}</h4>
                </Link>
              </div>
              <div className="cart_quantity">
                <h6>quantity</h6>
                <select
                  value={item.qty}
                  onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                  {[...Array(item.countInstok).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="cart_price">
                <h6>Price</h6>
                <h4>${item.price}</h4>
              </div>
            </div>
          ))}
          <div className="cart_total">
            <span className="cart_total-total">total:</span>
            <span className="cart_total-price">${total}</span>
          </div>

          <div className="cart_buttons">
            <Link className="cart_button" to={'/'}>
              <button> continue to shopping</button>
            </Link>
            {total > 0 && (
              <div className="cart_button ">
                
                  <button className=" gren" onClick={checkOutHandler}>checkout</button>
                
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
