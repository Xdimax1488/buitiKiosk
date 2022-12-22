import React from 'react'
import { Link } from 'react-router-dom'
import './NewArriveds.scss'

const HomeProducts
 = ({title,description,content}) => {
  return (
    <div className='hp-products' >
      <div className="hp-header">
        <div className="hp-tittle">{title}</div>
        <div className="hp-description">{description}
        </div>
      </div>
      <div className="hp-content">
        {content.map((product)=>(
          <Link className="product_cart" key={product.title}>
            <img src={product.img} alt="" />
            <div className="product_cart-title">{product.title}</div>
            <div className="product_cart-price">${product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeProducts
