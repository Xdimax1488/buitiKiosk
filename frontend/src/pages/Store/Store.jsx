import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Products } from '../../components';

import { listProduct } from '../../Redux/Actions/ProductAction';
import Skeleton from './Skeleton';
import './Store.scss';

const Store = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const [categoriId, setCategoriId] = useState(0);
  // const [newProducts, setNewProducts] = useState([]);
  const categories = ['all', 'test1', 'test2', 'test3', 'test4', 'test5'];

  useEffect(() => {
    dispatch(listProduct());
    // setNewProducts(products);

    // if (categories[categoriId] === 'all') {
    //   setNewProducts(products);
    // } else {
    //   const newData = products.filter((product) => {
    //     return product.categori === categories[categoriId];
    //   });
    //   setNewProducts(newData);
    // }
  }, [dispatch]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const onChangeCategories = (i) => setCategoriId(i);
  
  return (
    <div className="store">
      <div className="store_wrrap">
        <div className="category">
          <span>Categoriea:</span>
          <ul>
            {categories.map((CategoriName, i) => (
              <li
                key={i}
                onClick={() => onChangeCategories(i)}
                className={categoriId === i ? 'active' : ''}>
                {CategoriName}
              </li>
            ))}
          </ul>
        </div>
        <div className="products">
          <div className="products_wrapper">
            {loading ? (
              skeletons
            ) : error ? (
              <p>Error:</p>
            ) : (
              <>
                {products.map((item) => (
                  <Products item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
