import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ item }) => {
  console.log(item);
  return (
    <div className="product">
      <Link to={`/product/${item._id}`}>
        <img src={item.image} alt="" />
        <div className="product_desc">
          <p>{item.tittle}</p>
          <p>{item.numReviews} reviews</p>
          <p>${item.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Products;
