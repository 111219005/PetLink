import './PetDetail.css'
import Navbar from '../../components/Navbar'
import AddToBasket from '../AddToBasket'
import Footer from '../../components/Footer/Footer.jsx'
import { motion } from "framer-motion";

function ProductDetail({ product }) {

  return (
    <>

      <Navbar />

      <div className="content">
        <div className="detail-top">
          <div className="detail-img">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={product.cover}
              alt={product.name}
              className="detail-img-img"
            />
          </div>

          <div className="detail-c">
            <motion.h1
              className="detail-c-name"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {product.name}
            </motion.h1>

            <motion.h3
              className="detail-c-key"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {product.area} | {product.personality}
            </motion.h3>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* 基本資料區塊 */}
              <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                基本資料
              </motion.div>

              <div className="info-grid">
                <div className="label">品種</div><div className="value">{product.breed}</div>
                <div className="label">性別</div><div className="value">{product.gender}</div>
                <div className="label">年齡</div><div className="value">{product.age}</div>
                <div className="label">體型</div><div className="value">{product.size}</div>
                <div className="label">毛色</div><div className="value">{product.furColor}</div>
                <div className="label">健康狀況</div><div className="value">{product.health}</div>
              </div>

              {/* 領養需求區塊 */}
              <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                領養需求(每月)
              </motion.div>

              <div className="info-grid">
                <div className="label">食物</div><div className="value">{product.food}</div>
                <div className="label">生活用品</div><div className="value">{product.daily}</div>
                <div className="label">醫療</div><div className="value">{product.medical}</div>
                <div className="label">娛樂訓練</div><div className="value">{product.train}</div>
              </div>

              {/* 按鈕 */}
              <motion.div
                className="btn-group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <AddToBasket className="btn btn-secondary" product={product} />
                <motion.button whileTap={{ scale: 0.95 }} className="btn btn-primary">
                  直接認養
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

        </div>


        <motion.div
          className="detail-comment"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="detail-comment-h"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            飼主的話
          </motion.h3>

          <motion.div
            className="detail-comment-c"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {product.comment}
          </motion.div>
        </motion.div>

      </div>
      <Footer />
    </>

  )
}

export default ProductDetail