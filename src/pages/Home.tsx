import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <div className="hero">

      {/* Background Glow */}
      <div className="hero-bg"></div>

      <section className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Optimize Your Biology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Precision healthcare powered by DNA insights, advanced labs, 
          and personalized performance optimization.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </motion.div>

      </section>
    </div>
  );
}