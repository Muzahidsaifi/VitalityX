import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="product-detail">

      {/* Background Glow */}
      <div className="product-bg"></div>

      <div className="product-container">

        {/* Image */}
        <motion.div
          className="product-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img src="https://www.photoland.in/product/print-shop/id-card/employee-id-card-pvc-id-card-photo-id-card-design-1/?srsltid=AfmBOoqOklC8sNogCR4P-M-DUvIamVQ2lUtXExWUa-XVnS-ulo8yiRSe" alt="product" />
        </motion.div>

        {/* Info */}
        <motion.div
          className="product-info"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1>Product {id}</h1>

          <p className="tagline">
            Advanced supplement for optimized health & performance.
          </p>

          <p className="description">
            Designed using cutting-edge research, this formula supports 
            energy, recovery, and cognitive performance. Tailored for 
            modern lifestyles and precision health.
          </p>

          <div className="price">₹2,499</div>

          <div className="actions">
            <button className="btn-primary">Buy Now</button>
            <button className="btn-secondary">Add to Cart</button>
          </div>

          {/* Features */}
          <div className="features">
            <div>✔ Clinically Tested</div>
            <div>✔ No Artificial Additives</div>
            <div>✔ Doctor Recommended</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}