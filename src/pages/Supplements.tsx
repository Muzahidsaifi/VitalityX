import { motion } from "framer-motion";
import ProductCard from "../components/shop/ProductCard";
import "./Supplements.css";

const products = [
  { id: 1, name: "OmegaCore", price: 49 },
  { id: 2, name: "NeuroSync", price: 59 },
  { id: 3, name: "GutGenix", price: 39 },
];

export default function Supplements() {
  return (
    <div className="supplements">

      {/* Background Glow */}
      <div className="supplements-bg"></div>

      {/* Header */}
      <section className="supplements-header">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Premium Supplements
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Scientifically formulated products for optimal health & performance.
        </motion.p>
      </section>

      {/* Products */}
      <section className="supplements-grid">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </section>

    </div>
  );
}