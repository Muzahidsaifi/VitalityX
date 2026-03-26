import { motion } from "framer-motion";
import "./ProductCard.css";

type Product = {
  id: number;
  name: string;
  price: number;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {/* Image */}
      <div className="product-image">
        <img src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto:good,w_700/India%20LOB/Stationery%2C%20Letterheads%20and%20Stamps/ID%20Cards%20(Horizontal%20%2B%20Vertcal)/IN_ID-cards_Overview_01" alt={product.name} />
      </div>

      {/* Content */}
      <div className="product-content">
        <h2>{product.name}</h2>
        <p className="subtitle">Advanced Health Supplement</p>

        <div className="product-bottom">
          <span className="price">₹{product.price}</span>
          <button>Add</button>
        </div>
      </div>
    </motion.div>
  );
}