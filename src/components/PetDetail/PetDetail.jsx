import { useState } from 'react'
import './PetDetail.css'
import Navbar from '../../components/Navbar'
import AddToBasket from '../AddToBasket'
import Footer from '../../components/Footer/Footer.jsx'

function ProductDetail({ product }) {
  

  return (
    <>

    <Navbar />
    
      <div className="content">
        <div className="detail-top">
          <div className="detail-img">
            <img
              alt={product.name}
              className="detail-img-img"
              src={product.cover}
            />
          </div>
          <div className="detail-c">
            <h1 className="detail-c-name">{product.name}</h1>
            <h3 className="detail-c-key">{product.area }| {product.personality}</h3>

            <div className="card">
              <div className="section-title">基本資料</div>
              <div className="info-grid">
                <div className="label">品種</div><div className="value">{product.breed}</div>
                <div className="label">性別</div><div className="value">{product.gender}</div>

                <div className="label">年齡</div><div className="value">{product.age}</div>
                <div className="label">體型</div><div className="value">{product.size}</div>

                <div className="label">毛色</div><div className="value">{product.furColor}</div>
                <div className="label">健康狀況</div><div className="value">{product.health}</div>
              </div>

              <div className="section-title">領養需求(每月)</div>
              <div className="info-grid">
                <div className="label">食物</div><div className="value">{product.food}</div>
                <div className="label">生活用品</div><div className="value">{product.daily}</div>
                <div className="label">醫療</div><div className="value">{product.medical}</div>
                <div className="label">娛樂訓練</div><div className="value">{product.train}</div>
              </div>

              <div className="btn-group">
                <AddToBasket className="btn btn-secondary" product={product}/>
                <button className="btn btn-primary">直接認養</button>
              </div>
            </div>
          </div>
        </div>


        <div className="detail-comment">
          <h3 className="detail-comment-h">飼主的話</h3>
          <div className="detail-comment-c">{product.comment}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail