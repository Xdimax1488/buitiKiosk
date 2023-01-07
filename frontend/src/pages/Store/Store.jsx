import React, { useEffect, useState } from 'react';
import { Products } from '../../components';
import { StoreData } from './StoreData';

import './Store.scss';

const Store = () => {
  const [categoriId, setCategoriId] = useState(0);
  const [products, setProducts] = useState([]);
  const categories = ['all', 'test1', 'test2', 'test3', 'test4', 'test5'];

  useEffect(() => {
    if (categories[categoriId] === 'all') {
      setProducts(StoreData);
    } else {
      const newData = StoreData.filter((product) => {
        return product.categori === categories[categoriId];
      });
      setProducts(newData);
    }
  }, [categoriId]);
  
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
            {products.map((item) => (
              <Products item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
