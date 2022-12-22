import React from 'react';


import { Categories, Contact, HomeProducts, Slider } from '../components';

import IMG_test from '../asets/MX472.jpeg'

function Home() {
  const arrived_data = [
    { img: IMG_test, title: 'shoose', price: '100' },
    { img: IMG_test, title: 'shoose', price: '100' },
    { img: IMG_test, title: 'shoose', price: '100' },
    { img: IMG_test, title: 'shoose', price: '100' },
  ];
  return (
    <div className="home">
      <Slider />
      <HomeProducts
        title={'new arriveds'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dicta. Sed et sapiente perferendis vel suscipit veritatis, accusantium cupiditate id tenetur cumque eius sit reiciendis eum aspernatur officia ab ratione amet sint voluptatum ipsum sequi quas harum. Iste, neque exercitationem.'
        }
        content={arrived_data}
      />
      <Categories />
      <HomeProducts
        title={'trending'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dicta. Sed et sapiente perferendis vel suscipit veritatis, accusantium cupiditate id tenetur cumque eius sit reiciendis eum aspernatur officia ab ratione amet sint voluptatum ipsum sequi quas harum. Iste, neque exercitationem.'
        }
        content={arrived_data}
      />
      <Contact />
    </div>
  );
}

export default Home;
