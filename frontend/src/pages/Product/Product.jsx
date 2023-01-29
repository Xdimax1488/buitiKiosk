import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './Product.scss';

const Product = () => {
  const params = useParams();
  //const product = StoreData.find((p) => p._id === params.id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    };
    fetchproduct();
  }, [params]);

  return (
    <div className="product-pg">
      <div className="product-pg_desc">
        <div className="product-pg_image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-pg_dtl">
          <div className="product-pg_tittle">{product.name}</div>
          <p>{product.description}</p>
          <div className="product-pg_count">
            <div className="count_info">
              <h6>Price</h6>
              <span>{product.price}</span>
            </div>
            <div className="count_info">
              <h6>Status</h6>
              {product.countInstok > 0 ? <span>in stock</span> : <span>unavailable</span>}
            </div>
            <div className="count_info">
              <h6>Reviews</h6>
              <span>{product.numReviews}</span>
            </div>
            {product.countInstok > 0 ? (
              <>
                <div className="count_info">
                  <h6>quantity</h6>
                  <select>
                    {[...Array(product.countInstok).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="select-btn">Add To Cart</button>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="product_review">
        <div className="product_reviews">
          <h4>reviews</h4>
          <div className="no_reviews">no reviews</div>
          <div className="reviews_container">
            <div className="commentator">admin</div>
            <span>14/3/2022</span>
            <div className="comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolore!
            </div>
          </div>
        </div>
        <div className="reviews-form">
          <h4>write a customer review</h4>
          <div className="review_form">
            <form>
              <div className="form_colm">
                <strong>comment</strong>
                <textarea className="coment_fild" rows="3"></textarea>
              </div>
              <button className="select-btn">submit</button>
            </form>
          </div>
          <div className="alert_info">
            Please{' '}
            <Link to={'/login'}>
              <span>"Login"</span>
            </Link>{' '}
            to rite a review
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
