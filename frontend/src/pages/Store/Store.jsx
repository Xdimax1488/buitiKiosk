import React from 'react';
import { Products } from '../../components';
import { StoreData } from './StoreData';

import './Store.scss';

const Store = () => {
  const categories = ['dsd', 'sdds', 'dsdssds', 'dssd', 'dssds', 'dscsc'];
  return (
    <div className="store">
      <div className="store_wrrap">
        <div className="category">
          <span>Categoriea:</span>
          <ul>
            {categories.map((CategoriName, i) => (
              <li key={i} onClick="">
                {CategoriName}
              </li>
            ))}
          </ul>
        </div>
        <div className="products">
          {StoreData.map((item)=>(
            <Products item={item} key={item.id}/>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Store;
