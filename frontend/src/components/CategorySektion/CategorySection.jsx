import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = ({ activeCategory }) => {
  const categories = ['All', 'Women', 'Sale', 'New-Season', 'Men', 'Accessories', 'Shoes'];

  
  return (
    <>
      <span>Categories:</span>
      <ul>
        {categories.map((CategoryName, i) => (
          <Link to={`/${CategoryName}`} style={{ color: 'black' }}>
            <li key={i} className={CategoryName === activeCategory ? 'active' : ''}>
              {CategoryName}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default CategorySection;
