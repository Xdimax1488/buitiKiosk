import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { listProductDetails } from '../../Redux/Actions/ProductAction';

import './Product.scss';
import ProductSkeleton from './ProductSkeleton';

const Product = () => {
  const params = useParams();
  const navigate = useNavigate()
  //const product = StoreData.find((p) => p._id === params.id);
  const [qty, setQty] = useState(1);
  const productId = params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    navigate(`/cart/${productId}?qty=${qty}`);
    
  };

  const skeletons = <ProductSkeleton />;
  return (
    <div className="product-pg">
      <div className="product-pg_desc">
        {loading ? (
          skeletons
        ) : error ? (
          <p>Error:</p>
        ) : (
          <>
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
                    <button onClick={AddToCartHandle} className="select-btn">
                      Add To Cart
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </>
        )}
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
