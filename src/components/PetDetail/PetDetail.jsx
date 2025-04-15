import { useState } from 'react'
import './PetDetail.css'

function ProductDetail({ product }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content">
        <div class="detail-top">
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

            <div class="card">
              <div class="section-title">基本資料</div>
              <div class="info-grid">
                <div class="label">品種</div><div class="value">{product.brees}</div>
                <div class="label">性別</div><div class="value">{product.gender}</div>

                <div class="label">年齡</div><div class="value">{product.age}</div>
                <div class="label">體型</div><div class="value">{product.size}</div>

                <div class="label">毛色</div><div class="value">{product.furColor}</div>
                <div class="label">健康狀況</div><div class="value">{product.health}</div>
              </div>

              <div class="section-title">領養需求(每月)</div>
              <div class="info-grid">
                <div class="label">食物</div><div class="value">{product.food}</div>
                <div class="label">生活用品</div><div class="value">{product.daily}</div>
                <div class="label">醫療</div><div class="value">{product.medical}</div>
                <div class="label">娛樂訓練</div><div class="value">{product.train}</div>
              </div>

              <div class="btn-group">
                <button class="btn btn-secondary">加入收藏清單</button>
                <button class="btn btn-primary">直接認養</button>
              </div>
            </div>
          </div>
        </div>


        <div className="detail-comment">
          <h3 className="detail-comment-h">飼主的話</h3>
          <div className="detail-comment-c">{product.comment}</div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail