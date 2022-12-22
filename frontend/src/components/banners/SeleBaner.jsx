import React from 'react'
import { bannerData } from '../Slideer/Date'

import './banners.scss'

const SeleBaner = () => {
    
  return (
    <div className='banner sele' >{bannerData.map((obj, i) => (
        <div className="wraper_banner" key={i}>
          <div className="banner-left">
            <h1 className="sele_persent">{obj.baner.sale_banner.sale_deg}off</h1>
            <h4 className="sele_time">{obj.baner.sale_banner.time}</h4>
          </div>
          <div className="banner-centr">
            <img src={obj.baner.sale_banner.img} alt="" />
          </div>
          <div className="banner-right">
            <h3 className="title">{obj.baner.sale_banner.title}</h3>
            <h1 className="big_title">{obj.baner.sale_banner.big_title}</h1>
            <h4 className="desc desc-sele">{obj.baner.sale_banner.description}</h4>
            <button type='button' className='btn-sele'>{obj.baner.sale_banner.btn_text}</button>
          </div>
        </div>
      ))}</div>
  )
}

export default SeleBaner