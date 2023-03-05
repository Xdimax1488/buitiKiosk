import React from 'react';
import { Link } from 'react-router-dom';

import './NewArriveds.scss';
import Skeleton from './SkeletonHom';

const HomeProducts = ({ title, description, content, loading, error }) => {
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="hp-products">
      <div className="hp-header">
        <div className="hp-tittle">{title}</div>
        <div className="hp-description">{description}</div>
      </div>
      <div className="hp-content">
        {loading ? (
          skeletons
        ) : loading ? (
          <p>Error:</p>
        ) : (
          <>
            {content.map((product) => (
              <Link to={`/products/${product._id}`} className="product_cart" key={product.name}>
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <div className="product_cart-title">{product.name}</div>
                <div className="product_cart-price">${product.price}</div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
