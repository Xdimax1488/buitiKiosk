import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Products } from '../../components';
import CategorySection from '../../components/CategorySektion/CategorySection';
import { listProduct } from '../../Redux/Actions/ProductAction';

import './Store.scss';
import Skeleton from './Skeleton';

const Category = () => {
  const categories = ['All', 'Women', 'Sale', 'New-Season', 'Men', 'Accessories', 'Shoes'];
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  const categoryItem = products.filter((p) => p.categori === category);

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="store">
      <div className="store_wrrap">
        <div className="category">
          <CategorySection activeCategory={category}/>
        </div>
        <div className="products">
          <div className="products_wrapper">
            {loading ? (
              skeletons
            ) : (
              <>
                {category === 'All'
                  ? products.map((item) => <Products item={item} key={item._id} />)
                  : categoryItem.map((item) => <Products item={item} key={item._id} />)}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
