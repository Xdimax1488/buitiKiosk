import React from 'react'
import { bannerData } from '../Slideer/Date'

import './banners.scss'


const NewBaner = () => {

  
  return (
    <div className='banner new' >{bannerData.map((obj, i) => (
        <div className="wraper_banner new_wraper" key={i}>
          <div className="banner-left__new">
            <h3 className="new_category">{obj.baner.new_banner.category}</h3>
            <h1 className="new_bigtitle">{obj.baner.new_banner.big_title}</h1>
            <h1 className="new_name">{obj.baner.new_banner.title_litel}</h1>
            <button type='button' className='btn-sele btn-new'>{obj.baner.sale_banner.btn_text}</button>
          </div>
          <div className="banner-centr">
            <img src={obj.baner.sale_banner.img} alt="" />
          </div>
          <div className="banner-right__new">
            <span className='new_banner'>Description</span>
            <h4 className="desc">{obj.baner.new_banner.description}</h4>
            
          </div>
        </div>
      ))}</div>
  )
}

export default NewBaner