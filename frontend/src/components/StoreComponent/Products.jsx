import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ item }) => {
  return (
    <div className="product">
      <Link to={`/products/${item._id}`}>
        <img src={item.image} alt="" />
        <div className="product_desc">
          <p>{item.name}</p>
          <p>{item.numReviews} reviews</p>
          <p>${item.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Products;
