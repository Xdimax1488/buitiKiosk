import React, { useEffect } from 'react';

import { Categories, Contact, HomeProducts, Slider } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../Redux/Actions/ProductAction';


function Home() {
  // const arrived_data = [
  //   { img: IMG_test, title: 'shoose', price: '100' },
  //   { img: IMG_test, title: 'shoose', price: '100' },
  //   { img: IMG_test, title: 'shoose', price: '100' },
  //   { img: IMG_test, title: 'shoose', price: '100' },
  // ];

 
  const dispatch = useDispatch();



  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const new_arrived = products.filter((p) => p.home_page_position === 'new arriveds');
  const trending = products.filter((p) => p.home_page_position === 'trending');

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div className="home">
      <Slider />

      <HomeProducts
        loading={loading}
        error={error}
        title={'new arriveds'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dicta. Sed et sapiente perferendis vel suscipit veritatis, accusantium cupiditate id tenetur cumque eius sit reiciendis eum aspernatur officia ab ratione amet sint voluptatum ipsum sequi quas harum. Iste, neque exercitationem.'
        }
        content={new_arrived}
      />

      <Categories />
      
      
      <HomeProducts
        loading={loading}
        error={error}
        title={'trending'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dicta. Sed et sapiente perferendis vel suscipit veritatis, accusantium cupiditate id tenetur cumque eius sit reiciendis eum aspernatur officia ab ratione amet sint voluptatum ipsum sequi quas harum. Iste, neque exercitationem.'
        }
        content={trending}
      />
      <Contact />
    </div>
  );
}

export default Home;
